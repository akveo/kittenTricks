package com.akveo.kittenTricks.packages.splash;

import android.os.Handler;

import androidx.annotation.Nullable;

import com.akveo.kittenTricks.packages.splash.animations.SplashAnimator;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;

import javax.annotation.Nonnull;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class SplashScreenModule extends ReactContextBaseJavaModule {

  public SplashScreenModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @ReactMethod public void close(ReadableMap options) {
    int animationType = SplashAnimator.ANIMATION_NONE;
    int duration = 0;
    int delay = 0;

    if (options != null) {
      if (options.hasKey("animationType")) {
        animationType = options.getInt("animationType");
      }
      if (options.hasKey("duration")) {
        duration = options.getInt("duration");
      }
      if (options.hasKey("delay")) {
        delay = options.getInt("delay");
      }
    }

    if (animationType == SplashAnimator.ANIMATION_NONE) {
      delay = 0;
    }

    final int final_animationType = animationType;
    final int final_duration = duration;

    final Handler handler = new Handler();

    handler.postDelayed(() -> {
      SplashScreen.getInstance().close(this.getCurrentActivity(), final_animationType, final_duration);
    }, delay);
  }

  @Override @Nullable public Map<String, Object> getConstants() {
    return Collections.unmodifiableMap(new HashMap<String, Object>() {
      {
        put("animationType", getAnimationTypes());
      }

      private Map<String, Object> getAnimationTypes() {
        return Collections.unmodifiableMap(new HashMap<String, Object>() {
          {
            put("none", SplashAnimator.ANIMATION_NONE);
            put("fade", SplashAnimator.ANIMATION_FADE);
            put("scale", SplashAnimator.ANIMATION_SCALE);
          }
        });
      }
    });
  }

  @Override @Nonnull public String getName() {
    return "SplashScreen";
  }

}