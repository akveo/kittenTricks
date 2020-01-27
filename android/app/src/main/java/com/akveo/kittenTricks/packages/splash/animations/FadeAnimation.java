package com.akveo.kittenTricks.packages.splash.animations;

import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;

public class FadeAnimation implements SplashAnimation {

  public static final int ID = 1;

  @Override public Animation create(Config config) {
    AlphaAnimation animation = new AlphaAnimation(1, 0);
    animation.setDuration(config.duration);

    return animation;
  }
}
