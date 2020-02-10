package com.akveo.kittenTricks;

import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import com.akveo.kittenTricks.packages.splash.SplashScreen;

public class MainActivity extends ReactActivity {

  @Override protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    SplashScreen.getInstance().open(this);
  }

  @Override
  public void onConfigurationChanged(Configuration newConfig) {
    super.onConfigurationChanged(newConfig);
    Intent intent = new Intent("onConfigurationChanged");
    intent.putExtra("newConfig", newConfig);
    this.sendBroadcast(intent);
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
        return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }

  @Override protected void onDestroy() {
    super.onDestroy();
    SplashScreen.getInstance().reset();
  }

  @Override protected String getMainComponentName() {
    return "KittenTricks";
  }

  public static void start(Context context) {
    Intent starter = new Intent(context, MainActivity.class);
    context.startActivity(starter);
  }
}

