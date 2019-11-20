## RN 0.61 Application for xproperty

## Development
```bash
git clone --single-branch --branch xpay https://github.com/opetstudio/XProperty.git
cd XProperty
npm install
npx react-native link
cd ios
pod install
# add this line >>> missingDimensionStrategy 'react-native-camera', 'general' <<< inside android/app/build.gradle after line "versionName "1.0""
react-native run-android
```
or with shortcut:
```bash
./install.sh
```

## build android

```bash
cd android
./gradlew app:assembleRelease
```

## Install Plugin
#### react-native-maps

- npm install react-native-maps --save-exact

on Android

- android/build.gradle
    - buildscript/ext
        supportLibVersion = "28.0.0"
- AndroidManifest.xml
    ```xml
    <application>
        ...
        <meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="AIzaSyDovAcNK0kHV_2CB2H7OLmOwK35FyFZxxx"/>
    </application>
    ```

on ios

- Podfile
    ```
    target 'XProperty' do
        
        ...

        # React Native Maps dependencies
        rn_maps_path = '../node_modules/react-native-maps'
        pod 'react-native-google-maps', :path => rn_maps_path
        pod 'GoogleMaps'
        pod 'Google-Maps-iOS-Utils'
    ```
- AppDelegate.m
    ```m
    #import <GoogleMaps/GoogleMaps.h>

    - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
    {
        [GMSServices provideAPIKey:@"AIzaSyDovAcNK0kHV_2CB2H7OLmOwK35FyFZxxx"];

        ...
    ```
- pod install