package com.akveo.kittenTricks.packages.splash.animations;

import android.view.animation.Animation;
import androidx.annotation.IntDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

public class SplashAnimator {

  public static final int ANIMATION_NONE = 0;
  public static final int ANIMATION_FADE = FadeAnimation.ID;
  public static final int ANIMATION_SCALE = ScaleAnimation.ID;

  @IntDef({ANIMATION_NONE, ANIMATION_FADE, ANIMATION_SCALE})
  @Retention(RetentionPolicy.SOURCE)
  public @interface AnimationType {
  }

  public static Animation createAnimation(@AnimationType int type, SplashAnimation.Config config) {
    switch (type) {
      case ANIMATION_FADE:
        return new FadeAnimation().create(config);
      case ANIMATION_SCALE:
        return new ScaleAnimation().create(config);
      case ANIMATION_NONE:
        return new FadeAnimation().create(config);
      default:
        return new FadeAnimation().create(config);
    }
  }
}
