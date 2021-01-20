# react-native-template

### Table of Contents
1. [Overview](#overview)
2. [How to use it](#how-to-use-it)
	- [Firebase Configuration](#firebase-configuration)
3. [Firebase Auth](#firebase-auth)
4. [Tab Navigation](#tab-navigation)
5. [Redux Toolkit](#redux-toolkit)
6. [Theme Support](#theme-support)
7. [Intro Screen](#intro-screen)
8. [Error Notifications](#error-notifications)
9. [Splash Screen](#splash-screen)
10. [Async Storage](#async-storage) 

## Overview

It is a boilerplate react native project that could be used to create awesome mobile applications. It has some of the features that mostly all of the mobile applications need. This project works on both android and ios systems and it was tested on the following devices:

 - Xiaomi Mi A1 - Android 9 
 - iPhone 11 Emulator - iOS 14.3

The project is structured by a simple folder tree:

* ***./src*** - contains all of the JavaScript code;
	* ***/assets*** - contains all of the images and could contain the fonts and other assets too;
	* ***/compontes*** - contains all of the custom components that were created to be used on the project;
	* ***/i18n*** - contains the project translations;
	* ***/screens*** - contains all of the application screens;
	* /***services*** - contains different functions that work as simple middlewares which communicates with redux reducers using the ***react-redux/dispatch*** function.
	* ***/store*** - contains all the redux code, the reducers and actions;
	* ***/styles*** - contains all of the style of the application: the themes, font sizes, paddings, margins, and all of these dimension values;
	* ***/utils*** - contains functions that helps us with validation and whatelse you find usefull for the project;
	* ***/index.js*** - it is the applications starter file;
	* ***/router.js*** - contains the possible applcation's routes and stacks;

> All of the other files are created by `npx react-native init
> projectName`

## How to use it

To use this project on your react native applications, download it to your computer using the following command:

    git clone git@github.com:guilhermemcardoso/react-native-template.git
    //if you do not use SSH: 
    git clone https://github.com/guilhermemcardoso/react-native-template.git

After downloading the project on your computer run the following commands to install its dependencies:

    // if you use yarn:
    yarn
    // if you use npm:
    npm install

And to install the ios application dependencies:

    cd ios && pod install && cd ..

### Firebase configuration:

If you intend to use Firebase authentication, you need to follow the steps 2 and 3 from [this link](https://rnfirebase.io/).

## Firebase Auth

The project contains all the authentication process using user's email like sign in, sign up and logout. The authentication process was created using ***rnfirebase*** library. All of these functions can be found at ***./src/services/auth***. 

- ***emailSignIn*** - receives two params: email and password to login using Firebase Auth;
- ***emailSignUp*** - receives two params: email and password to create a new user using Firebase Auth;
- ***emailSignOut***- signout the current user;
- ***showErrorMessage*** - used to show error messages during the authentication process;
- ***hideErrorMessage*** - used to hide error messages during the authentication process;

## Tab Navigation

The project was created with two nested navigators using the ***react-navigation*** library (you can read more about it [here](https://reactnavigation.org/docs/getting-started)): stack navigator and bottom tab navigator. The stack navigator can handle with onboarding/intro screens, main screen and some other future screen if you want to. The bottom tab navigator handles the main screen, because it's composed by three tabs (login, register and logout tabs in our simple example).

You can see both of navigators inside the ***router.js*** file. To create the application router, we are receiving a param that teels the router if the onboarding/intro screens need to be shown or not, but you can use the same structure to create signed in and signed out routes, for example.

## Redux Toolkit

Inside the store folder you can see all the redux-toolkit (you can read more about it [here](https://redux-toolkit.js.org/introduction/quick-start)) configuration and how we can create the store using all the reducers (***store/index.js***). It's usefull to know if you want to create, delete or update a reducer on the project. Our example contains three reducers:

- ***auth*** - contains the auth global state and actions used during the authentication process. For each main action created at ***services/auth***, like emailSignIn, emailSignUp and emailSignOut, we created two actions here: one to handle with success and another one to handle with failures. For each secondary functions, like show and hide error messages, we created only one action which is responsable to update the global state related to it. You can see how it works on the Login, Register and Logout screens of the application;
- ***onboarding*** - contains the onboarding/intro global state and actions which are responsible to tell the router if it needs to show or hide the onboarding/intro screens. You can how it works inside the ***router.js*** file (to read the state) and the ***screens/Onboarding/index.js*** file (to dispatch an action to hide the onboarding when it's finished;
- ***theme*** - contains the theme global state and actions which are responsible to know and update the current application theme. Our example contains only two themes: **light** and **dark**, and you can see how it works inside the Router component, because the switch to choose the theme is located on the application's header;

## Theme Support

To create new themes or update the existing ones, just go into the ***styles/themes.js*** file to see how the themes are structured there. All of the componentes and screens inside the project are using the theme provider from ***styled-components*** library (you can read more about it [here](https://styled-components.com/docs/advanced)). And to see how to change the theme on the application, you can take a look at the application's header inside the ***router.js*** file.

## Intro Screen

The project already supports onboarding/intro screens and you can check it on ***router.js*** file, there is a param to display the intro screens as the first route of the stack or to redirect the users directly to the main screen, for example. You can update the intro screens using new text contents, colors and images according to your necessity and if you want the intro screens to be displayed everytime the user opens the application, you only need to change the **handleDone** method inside ***screens/Onboarding/index.js*** file. To configure the intro screens we used the [react-native-beautiful-screens](https://github.com/farfarawaylabs/react-native-beautiful-screens) library:

## Error Notifications

If the *error* state inside auth reducer changes to **true**, a notification will be displayed on the screen containing the *error message* state content on it. To see how it works, just take a look at these files: ***/store/auth***, ***/service/auth*** and ***src/index.js***. To configure this notifications we used the [react-native-beautiful-notifications](https://github.com/farfarawaylabs/react-native-beautiful-notifications) library.

## Splash Screen

The project already has a splash screen configured on it. But to change it according to your project's design you need to change it on native code. [This post](https://medium.com/@appstud/add-a-splash-screen-to-a-react-native-app-810492e773f9) can you help you change it according to your necessities, just ignore the configuration part and jump directly to the part to update the colors and images.

## Async Storage

Async storage is already configured on the project so you can store some informations on the device and read it anytime. For example, you can save on it if the user already saw the onboarding/intro screens and when the user opens the app again, it will redirects the user directly to the next screen. If you don't know how to use this library, you can learn [here](https://react-native-async-storage.github.io/async-storage/docs/install/).