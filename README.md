# NX, Next vs React Workshop

This repository is intended for my workshop on Next.js vs React Workshop. It contains a fictional movie application built with both Next.js and React/Nodejs. The goal of the workshop is to leave the participants with a better understanding of the fundamental differences between the two technologies.

Participants of the workshop will follow along with the code and learn how to build a full stack application with both Next.js and React/Nodejs.

We'll explore the following topics:

- NodeJS
  - Explore the Express BFF to understand the APIs
  - The BFF pattern
  
- React JS
  - React data fetching
  - React Routing
  - Browser behavior
  - Build Artifacts

- Next.js
  - Routing
  - API Routes
  - Client Side Rendering
  - Server Side Rendering
  - Static Site Generation
  - Browser Behavior
  - Build Artifacts

- NX
  - Repo Structure and tools by NX


# Prerequisite

Node (v16.18.0)
```
nvm install
OR
nvm use
```

[Docker Desktop](https://www.docker.com/products/docker-desktop/)

[VSCode](https://code.visualstudio.com/download)
  - When opening the project in VSCode, you will be prompted to install the recommended extensions. Press Yes. It will install the NX Console extension.



# Setup

## Install Dependencies:

Globally install NX
```
npm i -g nx
```

Install repo local dependencies
```
npm i
```

## Setup DB
Start the docker container - This will launch an instance of Postgres
```
docker-compose up -d db
```

Setup DB
```
nx push models
nx seed models
```

Explore & Manage the DB using Prisma Studio
```
nx studio models
```

# 1. Start the BFF and React app

In the first part of the workshop, we'll start the BFF and React app to explore a React based implementation of the app. We'll explore the following topics:

- HTML & Payloads
- Build Artifacts
- Client Side Routing
- Data Fetching
- Browser Behavior
- Services

To run the BFF and React app, run the following commands:

```
nx run-many --target=serve --projects=bff,react-movies
```

# 2. Generate a Next.js app (CSR)

In the second part of the workshop, we'll generate a Next.js app and re-implement the React app using Next.js. We'll explore the following topics:

- HTML & Payloads
- Build Artifacts
- Routing
- Data Fetching and APIs
- Browser Behavior
- Services

To generate a NEXT app, replace `NAME` with your name and run the following commands:

```
nx generate @nrwl/next:app NAME-movies --e2eTestRunner=none
```

*Note: I am using `--e2eTestRunner=none` to skip the e2e tests. You can remove this flag if you want to include e2e tests.*

You will have a codebase for your app which we'll use to create a client-side rendered version of the app.

You can run the app using the following command:
```
nx serve NAME-movies
```

# 3. Refactor to Server Side Rendered (SSR)

In the third part of the workshop, we'll refactor our code for server-side rendering. We'll explore the following topics:

- getServerSideProps
- HTML & Payloads
- Build Artifacts
- Routing
- Data Fetching and APIs
- Browser Behavior
- Services

# 4. Refactor to Static Site Generation (SSG)

We will briefly look at SSG to understand the differences between SSR and SSG. However, this will not be a complete refactor, only a small part to understand the differences.

- getStaticProps / getStaticPaths
- HTML & Payloads
- Build Artifacts
- Routing
- Data Fetching and APIs
- Browser Behavior
- Services

# Conclusion

In this workshop, we explored the differences between Next.js and React. We learned how to build a full stack application with both Next.js and React/Nodejs. We should now have a better understanding of where NextJS sits in the React ecosystem and when it offers value over React. We also learned about the BFF pattern and how it can be used to build full stack applications. This should help you understand the differences between Next.js and React/Nodejs.