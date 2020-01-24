package com.akveo.kittenTricks;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.akveo.kittenTricks.packages.splash.SplashScreen;

public class MainActivity extends ReactActivity {

  @Override protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    SplashScreen.getInstance().open(this);
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

