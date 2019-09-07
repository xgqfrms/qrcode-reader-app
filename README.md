# React Native QRcode Reader APP

https://github.com/xgqfrms/qrcode-reader-app

```sh
# qrcode-reader-app
$ react-native init qrcode_reader_app

# iOS
$ cd qrcode_reader_app && react-native run-ios
# Open qrcode_reader_app\ios\qrcode_reader_app.xcodeproj in Xcode or run "xed -b ios"
# Hit the Run button

# Have an Android emulator running (quickest way to get started), or a device connected.
# Open Android Studio > AVD
# Android
$ cd qrcode_reader_app && react-native run-android

```

## QR Code (Generator and Reader)

> 二维码（生成及识别）

https://chrome.google.com/webstore/detail/qr-code-generator-and-rea/hkojjajclkgeijhcmfjcjkddfjpaimek


## refs & blogs

https://www.cnblogs.com/xgqfrms/p/11474426.html

https://github.com/xgqfrms/qrcode-reader-app

***
# React Native

```jsx
import React from 'react';
import {Text, View} from 'react-native';
import {Header} from './Header';

const WelcomeScreen = () =>
    <View>
        <Header title="Welcome to React Native"/>
        <Text style={header}>Step One</Text>
        <Text>
            Edit App.js to change this screen and turn it into your app.
        </Text>
        <Text style={header}>See Your Changes</Text>
        <Text>
            Press Cmd + R inside the simulator to reload your app’s code.
        </Text>
        <Text style={header}>Debug</Text>
        <Text>
            Press Cmd + M or Shake your device to open the React Native Debug Menu.
        </Text>
        <Text style={header}>Learn</Text>
        <Text>
            Read the docs to discover what to do next:
        </Text>
    </View>
```

## React Navigation

https://reactnative.cn/docs/navigation/#react-navigation

https://reactnavigation.org/


https://github.com/wix/react-native-navigation

```sh
$ yarn add react-navigation
# or
$ npm install react-navigation

$ yarn add react-navigation-stack

$ yarn add react-native-reanimated react-native-gesture-handler react-native-screens

```

https://github.com/kmagiera/react-native-reanimated
https://github.com/kmagiera/react-native-gesture-handler

https://github.com/react-navigation/stack#installation

https://reactnavigation.org/docs/en/stack-navigator.html


D:\github\qrcode-reader-app\qrcode_reader_app\android\app\src\main\java\com\qrcode_reader_app\MainActivity.java


## CocoaPods

> CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects.

> It has over 65 thousand libraries and is used in over 3 million apps. CocoaPods can help you scale your projects elegantly.


https://cocoapods.org/

Installing required CocoaPods dependencies
? CocoaPods (https://cocoapods.org/) is not installed. It's necessary for iOS project to run correctly. Do you want to install it? Yes



```sh

$ cd ./qrcode_app/ios && pod install

```



