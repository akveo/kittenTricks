[Run](#run)
[Run with Expo](#run-with-expo)
[Environments](#environments)
[Building](#building)
[Reusing Screens](#reusing-screens)

# Run

Before running, application dependencies should be installed and linked.

`yarn && npx react-native link && cd ios && pod install` from the project root.

By default, Kitten Tricks starts like a regular React Native application. In case you want it to run
with Expo, see [Expo](#run-with-expo) section.

`yarn start` from the project root to start Metro Bundler.
`yarn ios` or `yarn android` to run application on the device.

# Run with Expo

`expo start` from the project root. This will start a local Expo server and output an options to run
application on iOS, Android or Web.

When running with Expo, `ios` and `android` folder are not needed for this project.
Also, some of the business logic may have different implementation for Expo and Bare React Native apps.
In Kitten Tricks, we handle it with [`.expo` file extension](https://docs.expo.io/versions/latest/bare/using-expo-client/#practical-patterns-for-client-compatible-bare-apps).

# Environments

Kitten Tricks application supports two environments: 

- **Production** (Provides Eva Design System and UI Kitten modules published to npm)
- **Development** (Provides local Eva Design System and UI Kitten modules)

Environment configuration can be found in [./env](./env) dir.
It includes `.env` files to locate environment-dependent modules and tsconfig files for each environment.
To switch environment manually, you can run `yarn env prod` or `yarn env dev`.

## Production mode

`yarn start`

## Development mode

- Clone Eva Design System and UI Kitten projects to the directory containing Kitten Tricks:
```bash
git clone https://github.com/eva-design/eva && git clone https://github.com/akveo/react-native-ui-kitten
```

- **IMPORTANT:** Ensure you have the following structure of repositories:
```
- /
  - eva
  - kittenTricks
  - react-native-ui-kitten
```
- Install dependencies if needed and finally run `yarn start:dev`

# Building

## Transpile to JavaScript

We use [Typescript](https://www.typescriptlang.org/) to build Kitten Tricks.
Use `yarn build` to compile it to JavaScript. This will output the source code with `.js` files in
[`./dist/tsc-out`](./dist/tsc-out) dir.

Don't use this output as source code in your project in case you would like to [reuse screens](#reusing-screens).

## Web Bundle

`expo build:web` from the project root to build runnable web bundle.
This will output web bundle in [`./web-build`](./web-build) dir.

# Reusing Screens

All screens presented in Kitten Tricks application are listed in [`./src/layouts`](./src/layouts) directory and structured by following categories: 

- [Auth](./src/layouts/auth)
- [Social](./src/layouts/social)
- [Articles](./src/layouts/articles)
- [Messaging](./src/layouts/messaging)
- [Dashboards](./src/layouts/dashboards)
- [Ecommerce](./src/layouts/ecommerce)

If you would like to reuse it, you may copy and paste the entire screen folder.

Some of the screens may contain 3rd-party modules that need to be installed.
You can find them in `3rd-party.ts` files.

E.g in case of reusing `Forgot Password` screen, you may need:
- Copy [Forgot Password](./src/layouts/auth/forgot-password) directory into your project
- Install and configure 3rd-party modules listed in [3rd-party.ts](./src/layouts/auth/forgot-password/extra/3rd-party.ts) file.

Note that the source code for reusable screens doesn't include headers, safe areas and navigation logic.
In case you want to add this, the following links might be helpful:

- [Supporting safe areas](https://reactnavigation.org/docs/en/next/handling-safe-area.html)
- [Adding navigation headers](https://akveo.github.io/react-native-ui-kitten/docs/components/top-navigation?utm_campaign=ui_kitten%20-%20home%20-%20kitten_tricks%20github%20readme&utm_source=kitten_tricks&utm_medium=referral&utm_content=dev_docs_link)

## Structure

Each screen is structured in the same way:

- index.ts - Screen itself
- extra - Directory containing components, data, and 3rd-party modules used by screen
- assets - Directory containing assets used by screen
