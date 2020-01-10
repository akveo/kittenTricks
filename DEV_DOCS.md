[Running](#running)

[Reusing Screens](#reusing-screens)

# Running

`yarn && yarn start` from the project root

## Environments:

Kitten Tricks application supports two environments: 

- **Production** (Provides Eva Design System and UI Kitten modules published to npm)
- **Development** (Provides local Eva Design System and UI Kitten modules)

### Run in production mode:

`npm start`

### Run in development mode:

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
- Install dependencies if needed and finally run `npm run start:dev`

# Reusing Screens

All screens presented in Kitten Tricks application are listed in [`./src/scenes`](./src/scenes) directory and structured by following categories: 

- [Auth](./src/scenes/auth)
- [Social](./src/scenes/social)
- [Articles](./src/scenes/articles)
- [Messaging](./src/scenes/messaging)
- [Dashboards](./src/scenes/dashboards)
- [Ecommerce](./src/scenes/ecommerce)

If you would like to reuse it, you may copy and paste the entire screen folder.

Some of the screens may contain 3rd-party modules that need to be installed.
You can find them in `3rd-party.ts` files.

E.g in case of reusing `Forgot Password` screen, you may need:
- Copy [Forgot Password](./src/scenes/auth/forgot-password) directory into your project
- Install and configure 3rd-party modules listed in [3rd-party.ts](./src/scenes/auth/forgot-password/extra/3rd-party.ts) file.

## Structure

Each screen is structured in the same way:

- index.ts - Screen itself
- extra - Directory containing components, data, and 3rd-party modules used by screen
- assets - Directory containing assets used by screen
