package com.akveo.kittenTricks.packages.splash;

import android.app.Dialog;
import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;

import com.akveo.kittenTricks.R;

public class SplashDialog extends Dialog {

  public SplashDialog(@NonNull Context context) {
    super(context, R.style.Theme_AppCompat_Light_NoActionBar);
    this.configure();
  }

  public View getContentView() {
    return ((ViewGroup) this.getWindow().getDecorView()).getChildAt(0);
  }

  private void configure() {
    this.setContentView(R.layout.layout_dialog_splash);
    this.setCancelable(false);
  }
}
