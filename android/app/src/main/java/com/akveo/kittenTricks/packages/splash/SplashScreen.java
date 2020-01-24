package com.akveo.kittenTricks.packages.splash;

import android.app.Activity;
import android.view.animation.Animation;
import androidx.annotation.Nullable;

import com.akveo.kittenTricks.packages.splash.animations.SplashAnimation;
import com.akveo.kittenTricks.packages.splash.animations.SplashAnimator;

import java.lang.ref.WeakReference;

public class SplashScreen implements Animation.AnimationListener {

  private WeakReference<SplashDialog> splashViewHolder;

  public static SplashScreen getInstance() {
    return InstanceHolder.INSTANCE;
  }

  // Animation.AnimationListener

  @Override public void onAnimationStart(Animation animation) {
    // no-op
  }

  @Override public void onAnimationRepeat(Animation animation) {
    // no-op
  }

  @Override public void onAnimationEnd(Animation animation) {
    this.splashViewHolder.get().getContentView().post(SplashScreen.this::reset);
  }

  public void open(@Nullable Activity activity) {
    if (activity == null || activity.isFinishing()) {
      return;
    }

    SplashDialog splashDialog = new SplashDialog(activity);
    this.splashViewHolder = new WeakReference<>(splashDialog);

    activity.runOnUiThread(splashDialog::show);
  }

  public void close(@Nullable Activity activity, @SplashAnimator.AnimationType int animationType, int duration) {
    if (activity == null) {
      return;
    }

    activity.runOnUiThread(() -> {
      this.closeWithAnimation(animationType, duration);
    });
  }

  public void reset() {
    if (this.splashViewHolder != null && this.splashViewHolder.get() != null) {
      this.splashViewHolder.get().dismiss();
      this.splashViewHolder.clear();
    }
  }

  private void closeWithAnimation(@SplashAnimator.AnimationType int animationType, int duration) {
    SplashAnimation.Config animationConfig = new SplashAnimation.Config(duration);
    Animation animation = SplashAnimator.createAnimation(animationType, animationConfig);

    this.startAnimation(animation);
  }

  private void startAnimation(Animation animation) {
    if (this.splashViewHolder == null || this.splashViewHolder.get() == null || !this.splashViewHolder.get().isShowing()) {
      return;
    }

    animation.setAnimationListener(this);
    this.splashViewHolder.get().getContentView().startAnimation(animation);
  }

  private static final class InstanceHolder {
    private static final SplashScreen INSTANCE = new SplashScreen();
  }
}