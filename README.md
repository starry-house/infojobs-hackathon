# Project Title

One Paragraph of the project description

## Getting Started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push

- [Node](https://nodejs.org)
- [Ngrok](https://ngrok.com)
- [InfoJobs Application Credentials](https://developer.infojobs.net)

### Installing

#### Install the dependencies

First, make sure that all the necessary dependencies are installed in your local environment. You can do this by running the following command in your terminal.

```bash
npm install
```

#### Configurar Ngrok

To perform tests and allow users to authenticate in the application, we need to expose our local Next.js application. This can be done using Ngrok.

To initialize a server in Ngrok, run the following command:

```bash
ngrok http 3000
```

When running this command, you will see an output similar to the following:

```bash
ngrok                                                                                                      (Ctrl+C to quit)

Announcing ngrok-go: The ngrok agent as a Go library: https://ngrok.com/go

Session Status                online
Account                       developeru@mail.com (Plan: Free)
Version                       3.3.0
Region                        United States (us)
Latency                       70ms
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://9b34-177-227-198-29.ngrok-free.app -> http://localhost:3000

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

The `Forwarding` value in the previous output shows the URL that will expose our local application. In this case, you will be able to access your application through `https://9b34-177-227-198-29.ngrok-free.app`

> **Note**: Every time you run the above command, the URL will change. Therefore, it's important to keep this command running during development. You can open a new console to continue with the development of your application.

#### Update the Callback URL

Next, you will need to update the callback URL of your application in the [Developer Portal](https://developer.infojobs.net).

If the URL issued by Ngrok is `https://9b34-177-227-198-29.ngrok-free.app`, the callback URL will be `https://9b34-177-227-198-29.ngrok-free.app/api/auth/callback/infojobs`.

![application_credentials](https://github.com/starry-house/infojobs-hackathon/assets/54286456/27509bf5-ab9b-4c94-9d5f-0d0fe1641350)

#### Configure environment variables

Copy the example environment variables file to your local environment variables file:

```bash
cp .env.example .env.local
```

Remember to replace `OAUTH_CLIENT_ID` and `OAUTH_CLIENT_SECRET` with the OAuth credentials of your InfoJobs application. Additionally, `secretpass` is just an example of a value for `NEXTAUTH_SECRET` - you can set any random string for development purposes. Make sure the value of NEXTAUTH_URL is the same as the URL issued by Ngrok."

```
# OAuth Server
OAUTH_CLIENT_ID=
OAUTH_CLIENT_SECRET=
NEXTAUTH_SECRET=secretpass
NEXTAUTH_URL=https://9b34-177-227-198-29.ngrok-free.app
```

#### Start the application

Finally, now that you have configured everything correctly, you can start your Next.js application with the following command:

```bash
npm run dev
```

During development, you should always access your application through the URL issued by Ngrok (for example, `https://9b34-177-227-198-29.ngrok-free.ap`p) because InfoJobs will only respond to requests coming from an authorized domain.

## Running the tests

Explain how to run the automated tests for this system

### Sample Tests

Explain what these tests test and why

```
Give an example
```

### Style test

Checks if the best practices and the right coding style has been used.

```
Give an example
```

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Built With

- [Next](https://nextjs.org) - The React Framework
- [Chakra](https://chakra-ui.com) - UI Kit
- [NextAuth](https://next-auth.js.org) - Autenticación para Next.js

## Versioning

We use [Semantic Versioning](http://semver.org) for versioning.

## Authors

- **Erick Sarabia** - _Initial work_ - [ericksarabia](https://github.com/ericksarabia)
- **Jose Jose Rios** - _Initial work_ - [joseriosjose](https://github.com/joseriosjose)
- **Luis Fernandez** - _Initial work_ - [Oreku2608](https://github.com/Oreku2608)
- **Maykell Carrillo** - _Initial work_ - [macs15](https://github.com/macs15)
- **Saul Moreyra** - _Initial work_ - [SaulMoreyra](https://github.com/SaulMoreyra)
