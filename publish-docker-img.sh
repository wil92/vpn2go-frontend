#!/bin/bash

if [ -f .env ]
then
  export $(cat .env | xargs)
fi

tags=$(git tag --points-at HEAD)

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
tags=($tags) # split to array $names
IFS=$SAVEIFS   # Restore IFS

echo "$DOCKER_PASSWORD" | docker login -u ${DOCKER_USER} --password-stdin

# build docker image
docker build -t img .

for (( i=0; i<${#tags[@]}; i++ ))
do
  echo "---------------------------------"
  echo "TAG NAME: ${DOCKER_USER}/vpn2go-frontend:${tags[$i]}"

  # tag current image
  docker tag img ${DOCKER_USER}/vpn2go-frontend:${tags[$i]}

  # push docker image to DockerHub
  docker push ${DOCKER_USER}/vpn2go-frontend:${tags[$i]}
  echo "---------------------------------"
done
