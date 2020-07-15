#!/bin/bash

tags=$(git tag --points-at HEAD)

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
tags=($tags) # split to array $names
IFS=$SAVEIFS   # Restore IFS

echo "$DOCKER_PASSWORD" | docker login -u $DOCKER_USER --password-stdin

echo $(git status)
echo $tags

# build docker image
docker build -t img .

for (( i=0; i<${#tags[@]}; i++ ))
do
  echo "Tag name: ggjnez92/vpn2go-frontend:${tags[$i]}"

  # tag current image
  docker tag img "ggjnez92/vpn2go-frontend:${tags[$i]}"

  # push docker image to DockerHub
  docker push "ggjnez92/vpn2go-frontend:${tags[$i]}"
done
