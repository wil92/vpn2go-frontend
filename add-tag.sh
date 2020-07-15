#!/bin/bash

# remove local tag
git tag -d ${1}

# remove remote tag
git push -d origin ${1}

# create local tag
git tag ${1}
