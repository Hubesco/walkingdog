Walking Dog
====
- TravisCI : [![Build Status](https://travis-ci.org/paoesco/walkingdog.svg?branch=master)](https://travis-ci.org/paoesco/walkingdog)
- Codacy : [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b8cbd8954b874c5eb33aa1cd0b7f32c5)](https://www.codacy.com/app/pao-esco/walkingdog?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=paoesco/walkingdog&amp;utm_campaign=Badge_Grade)

## API Documentation

### Location API

- Dogs around
`GET /api/location/dogsAround?ne-lat=51.603176&ne-lon=-0.187197&sw-lat=51.599313&sw-lon=-0.199326`

- Register location
`POST /api/location/register  { "userUuid":"dog1", "dogName":"Dog 1", "latitude":51.600000, "longitude":-0.190000, "walking": "true|false" }`

- Sign Up
`POST /api/authentication/signup { "email":"xxx@xxx.com", "password":"xxx", "dogName":"Dog xxx", "dogGender":"FEMALE|MALE", "dogBreed":"SHIBA_INU", "dogBirthdate":"2015-01-01" }`

- Log In
`POST /api/authentication/login { "email":"xxx@xxx.com", "password":"xxx"}`

- Activate
`GET /api/authentication/activate?token=xxx`


## Environment

- Integration : https://walkingdog-services.herokuapp.com/

## Contribute

### Installation

- Install nodejs
- `npm install -g ionic`
- `npm install -g cordova`
- `git clone https://github.com/paoesco/walkingdog.git`
- `cd walkingdog`
- `git config user.name "xxx"`
- `git config user.email "xxx@xxx.com"`
- `cd walkingdog-mobile`
- `npm install`


#### Android platform


- `ionic platform add android` (inside walkingdog-mobile folder)
- Install Java 8 (JDK)
- Add JAVA_HOME variable (path/to/jdk)
- Add $JAVA_HOME/bin to $PATH
- Install Android Studio (SDK and AVD)
- Add ANDROID_HOME variable (path/to/sdk)
- Add $ANDROID_HOME/tools to $PATH
- Add $ANDROID_HOME/platform-tools to $PATH
- Install SDK API 19 (SDK Platform, Google APIs Intel X86 Atom System Image, Sources for Android SDK)
- Install Intel HAXM (if not installed by Android Studio or Android SDK)

#### iOS platform

- Install Xcode
- `xcode-select --install` (after Xcode installation finished)
- `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`
- `npm install -g ios-sim`
- `sudo npm install -g ios-deploy --unsafe-perm=true --allow-root`
- `ionic platform add ios` (inside walkingdog-mobile folder)


### Build

- `ionic serve`
- for prod mode : `` (https://github.com/driftyco/ionic-app-scripts/blob/master/CHANGELOG.md#entry-point-changes)

#### Android

- `ionic build android`
- `ionic emulate android` (needs AVD up and running)
- For prod mode, add prod param : `ionic run android --prod`

#### iOS

// TBC
