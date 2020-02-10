package com.akveo.kittenTricks.packages.splash;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import javax.annotation.Nonnull;
import java.util.Collections;
import java.util.List;


public class SplashScreenPackage implements ReactPackage {

  @Override @Nonnull public List<NativeModule> createNativeModules(@Nonnull ReactApplicationContext reactContext) {
    return Collections.singletonList(
      new SplashScreenModule(reactContext)
    );
  }

  @Override @Nonnull public List<ViewManager> createViewManagers(@Nonnull ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}