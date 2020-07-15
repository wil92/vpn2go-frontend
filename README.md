# VPN2go Frontend

[![codecov](https://codecov.io/gh/wil92/vpn2go-frontend/branch/master/graph/badge.svg)](https://codecov.io/gh/wil92/vpn2go-frontend)
[![Build Status](https://travis-ci.org/wil92/vpn2go-frontend.svg?branch=master)](https://travis-ci.org/wil92/vpn2go-frontend)

Easy setup for OpenVPN frontend. Base on the server side project [vpn2go](https://github.com/jadolg/vpn2go).

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server

Start the project with docker: `docker run -p 4000:80 .`

## Build

**Development build**

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

**Production build**

Run `npm run build:prod` to build the project in production. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test`

## Contributions

All contributions are welcome
