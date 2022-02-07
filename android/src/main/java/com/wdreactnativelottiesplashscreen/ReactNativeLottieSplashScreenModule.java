package com.wdreactnativelottiesplashscreen;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = ReactNativeLottieSplashScreenModule.NAME)
public class ReactNativeLottieSplashScreenModule extends ReactContextBaseJavaModule {
    public static final String NAME = "ReactNativeLottieSplashScreen";

    public ReactNativeLottieSplashScreenModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void hide() {
      ReactNativeLottieSplashScreen.hide(getCurrentActivity());
    }
}
