## RN 0.61 Application for xproperty

### Development
```bash
git clone --single-branch --branch xpay https://github.com/opetstudio/MyPizzaApp.git 
cd MyPizzaApp
npm install
cd ios
pod install
npx react-native link
# add this line >>> missingDimensionStrategy 'react-native-camera', 'general' <<< inside android/app/build.gradle after line "versionName "1.0""
react-native run-android
```

### build

```bash
./gradlew app:assembleRelease
```
