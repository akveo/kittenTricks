package com.akveo.kittenTricks.packages.splash.animations;

import android.view.animation.Animation;

public interface SplashAnimation {
  Animation create(Config config);

  class Config {
    int duration;

    public Config(int duration) {
      this.duration = duration;
    }
  }
}
