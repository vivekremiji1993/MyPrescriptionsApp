# Prescription Management App

A mobile application for managing medical prescriptions, built with React Native.

## Features

- Create and view patient prescriptions  
- Search medicine database  
- Track prescription history  
- Intuitive UI for healthcare professionals  

## Prerequisites

- Node.js (v16+)  
- npm (v8+) or Yarn (v1.22+)  
- JDK 11 (for Android)  
- Xcode (for iOS)  
- Android Studio (for Android)  

## Quick Start

# Clone the repo:  
   git clone https://github.com/yourusername/prescription-app.git
   cd MyPrescriptions


# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios