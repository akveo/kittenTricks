package com.akveo.kittenTricks.packages.splash.animations;

import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.view.animation.AnimationSet;

public class ScaleAnimation implements SplashAnimation {

  public static final int ID = 2;

  @Override public Animation create(Config config) {
    AnimationSet animationSet = new AnimationSet(true);

    animationSet.addAnimation(this.createFadeAnimation(config));
    animationSet.addAnimation(this.createScaleAnimation(config));

    return animationSet;
  }

  private Animation createFadeAnimation(Config config) {
    AlphaAnimation animation = new AlphaAnimation(1, 0);
    animation.setDuration(config.duration);

    return animation;
  }

  private Animation createScaleAnimation(Config config) {
    android.view.animation.ScaleAnimation scaleAnimation = new android.view.animation.ScaleAnimation(
      1,
      1.5f,
      1,
      1.5f,
      Animation.RELATIVE_TO_SELF,
      0.5f,
      Animation.RELATIVE_TO_SELF,
      0.65f
    );

    scaleAnimation.setDuration(config.duration);

    return scaleAnimation;
  }
}
