#import <React/RCTBridgeModule.h>
#import <React/RCTRootView.h>

@interface SplashScreen : NSObject <RCTBridgeModule>

typedef NS_ENUM(NSInteger, RCTCameraAspect) {
  UIAnimationNone = 0,
  UIAnimationFade = 1,
  UIAnimationScale = 2
};

+ (void)open:(RCTRootView *)v;

@end
