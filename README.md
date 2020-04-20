# React Native Development

This repository contains the complete [React Native](https://reactnative.dev/) source code that was presented in first [Halifax Virtual ReactJS Meetup](https://www.meetup.com/Halifax-ReactJS-Meetup/events/269752242/) sponsored by [REDspace](https://www.redspace.com/).

Repository demonstrates some of the common tasks in React Native like making API calls, handling lists , styles in React Native and animating UI components and some performance tips when it comes to displaying large lists.

> Note : You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS

## How to run the code

1- Setup your environment by following instructions here : https://reactnative.dev/docs/environment-setup
2- Clone this repository and go to project directory :

```bash
git clone https://github.com/IceProgrammer15/virtual-react-meetup-1-.git
cd virtual-react-meetup-1-
```

3- Install project dependencies :

```bash

#if using yran:
yarn install

#if using npm:
npm install
```

4- (MacOS only) install iOS project dependencies:

```bash

# switch to ios folder
cd ios

# install cocoa pods dependencies
pod install

#back to project folder
cd ..
```

5- Start the project using either ways :

### using react-native cli:

From root folder of project, run :

```bash
 $ npx react-native run-android
```

and

```bash
$ npx react-native run-ios
```

> Note: run-android command requires an [Android Emulator](https://developer.android.com/studio/run/managing-avds) to be available and running

### using [Android Studio](https://developer.android.com/studio) and [Xcode](https://developer.apple.com/xcode/)

**Android** : Open `/android` folder in Android Studio, wait until Android Studio prepares the project and installs all dependencies, then click on **Run** button : https://developer.android.com/training/basics/firstapp/running-app#Emulator

**iOS** : open `ios/VReactMeetup1.xcworkspace` in Xcode and run the project : https://developer.apple.com/library/archive/documentation/ToolsLanguages/Conceptual/Xcode_Overview/BuildingYourApp.html

> Note: make sure you opened `.xcworkspace` file not the `.xcodeproj` file or the project will not compile.
