This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### File Structure

React doesn’t have opinions on how you put files into folders. That said there are a few common [approaches](https://reactjs.org/docs/faq-structure.html) popular in the ecosystem you may want to consider.
This project mix the two suggested approaches grouping files by modules and then by file types.

## Learn More

#### NextJS

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about NextJS features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive NextJS tutorial
- [Typescript](https://nextjs.org/docs/basic-features/typescript) - how to use NextJS with Typescript
- [Environment Variables](https://nextjs.org/docs/basic-features/environment-variables) - how to use environment variables
- [Image Optimization](https://nextjs.org/docs/basic-features/image-optimization) - learn how to use NextJS Image component

#### Redux Toolkit

This project uses `@reduxjs/toolkit` to manage the state of the entities. Includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more.

To learn more about Redux Toolkit, take a look at the following resources:

- [Redux Toolkit Usage Guide](https://redux-toolkit.js.org/usage/usage-guide) - learn about basic features
- [Usage with Typescript](https://redux-toolkit.js.org/usage/usage-with-typescript) - learn about Typescript types and syntax
- [Making asynchronous requests](https://redux-toolkit.js.org/api/createAsyncThunk) - learn how to fetch data in the right way
- [Use Entity Adapter](https://redux-toolkit.js.org/api/createEntityAdapter) - learn hot to use entity adapters
- [State Normalization](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) - learn about state normalization and suggested data structure
- [Redux ORM](https://github.com/redux-orm/redux-orm) - an optional library to manage relational models into redux
- [Normalizr](https://www.npmjs.com/package/normalizr) - an optional useful library to normalize data structures

#### Tailwind

This project uses `tailwindcss` and utility-first styles approach.
This project also uses `postcss-import` to split css code into multiple files.

Yuo can learn more about Tailwind CSS at the following resources:

- [Utility First](https://tailwindcss.com/docs/utility-first) - learn why to use utility first
- [Configuration](https://tailwindcss.com/docs/configuration) - learn how to customize your design system
- [Components](https://tailwindcss.com/docs/extracting-components) - learn how to use Tailwind with components
- [Extend](https://tailwindcss.com/docs/adding-new-utilities) - learn how to add new utility classes
- [Directives](https://tailwindcss.com/docs/functions-and-directives) - learn how to use Tailwind directives
- [Imports](https://www.npmjs.com/package/postcss-import) - learn about PostCSS Imports

## Tools 

#### Logs

This project uses `pino` to print logs. It can be configured to send logs to various tools.
You can learn more about this library at the following resources:

- [Pino API](https://github.com/pinojs/pino/blob/master/docs/api.md) - documentation for server side
- [Browser API](https://github.com/pinojs/pino/blob/master/docs/browser.md) - documentation for client side
- [Transports](https://github.com/pinojs/pino/blob/master/docs/transports.md) - transports plugins
- [Redaction](https://github.com/pinojs/pino/blob/master/docs/redaction.md) - hide sensitive data

#### Storybook

This project uses `storybook` to build UI components in isolation from app's business logic, data and context.
You can learn more at the following links:

- [Get Started](https://storybook.js.org/docs/react/get-started/introduction) - official documentation
- [Configuration](https://storybook.js.org/docs/react/configure/overview) - configure storybook
- [MDX Format](https://storybook.js.org/docs/react/api/mdx) - markdown documentation

#### Versioning

This project uses `semantic-release` to analyze commit messages and determine the type of changes in the codebase. 
Following formalized conventions for commit messages, semantic-release automatically determines the next semantic version number and push the release tag.

|Commit message	        |Release type          |Version     
|:---:                  |:---:                 |:---:
|fix: ...               |Patch Release         |+0 +0 +1
|feat: ...              |Feature Release       |+0 +1 +0
|BREAKING CHANGE: ...	|Major Breaking Release|+1 +0 +0

To learn more about Semantic release, take a look at the following resources:

- [Documentation](https://github.com/semantic-release/semantic-release) - how to customize the tool and add plugins
- [Committizen](https://www.npmjs.com/package/commitizen) - optional library to format commits
- [Husky](https://typicode.github.io/husky/#/) - optional library to automate git hooks 
- [Semver](https://semver.org/) - base of semantic versioning

#### Deploy

To easily deploy this project on AWS we can use the Serverless Component for NextJS.
You can read more info at the following links:

- [Serverless Components](https://www.serverless.com/blog/what-are-serverless-components-how-use) - what are and how to use
- [Serverless NextJS](https://www.serverless.com/blog/serverless-nextjs) - intro to NextJS serverless component
- [Repository](https://github.com/serverless-nextjs/serverless-next.js/) - serverless-next.js repository

#### Test

This project uses `cypress` to do e2e integration tests. You can learn more about this tool reading the following links:

- [Documentation](https://docs.cypress.io/guides/overview/why-cypress) - Cypress official documentation
- [Organizing tests](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests) - how to organize tests
- [Best  Practices](https://docs.cypress.io/guides/references/best-practices) - suggested best practices

## Other libraries

- [classnames](https://www.npmjs.com/package/classnames) - a simple utility for conditionally joining classNames together
- [uuid](https://www.npmjs.com/package/uuid) - a utility to create unique ids or hashes
- [bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) - a utility to analyze NextJS bundles sizes and composition
                                                           
## Resources

- [React Hooks](https://www.youtube.com/playlist?list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM) - YouTube Playlist 
- [Redux Toolkit](https://www.youtube.com/playlist?list=PLM0LBHjz37LXSASzEv81f3tGptAsEGQUM) - YouTube Playlist
- [Redux Entity Adapter](https://www.youtube.com/playlist?list=PLM0LBHjz37LW0zVaEjpeCmw-WgglfXWnI) - YouTube Playlist
- [Javascript](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md) - You Don't Know JS
- [Design Patterns and more](https://refactoring.guru/) - Refactoring.Guru
