# VPN2go Frontend

Easy setup for OpenVPN frontend. Base on the server side project [vpn2go](https://github.com/jadolg/vpn2go).

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server

Setup the next environment variables:

- `PORT_FRONTEND`: Exposed port for the docker container.
- `API_URL`: Url of the API to where the frontend will make the requests.
 
Then start the project with docker: `docker-compose up -d`

## Build

**Development build**

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

**Production build**

Run `npm run build:prod` to build the project in production. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test`

## Contributions

All contributions are welcome
