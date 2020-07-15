#!/bin/bash

tags=$(git tag --points-at HEAD)

SAVEIFS=$IFS   # Save current IFS
IFS=$'\n'      # Change IFS to new line
tags=($tags) # split to array $names
IFS=$SAVEIFS   # Restore IFS

docker login -u $DOCKER_USER -p $DOCKER_PASSWORD

echo $(git status)
echo $tags

for (( i=0; i<${#tags[@]}; i++ ))
do
  echo "Tag name: ggjnez92/vpn2go-frontend:${tags[$i]}"

  # build docker image
  docker build . -t "ggjnez92/vpn2go-frontend:${tags[$i]}"

  # push docker image to DockerHub
  docker push "ggjnez92/vpn2go-frontend:${tags[$i]}"
done
