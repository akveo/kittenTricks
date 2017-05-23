#import <Foundation/Foundation.h>
@class MSDevice;

@interface MSErrorReport : NSObject

/**
 *  UUID for the crash report.
 */
@property(nonatomic, copy, readonly) NSString *incidentIdentifier;

/**
 *  UUID for the app installation on the device.
 */
@property(nonatomic, copy, readonly) NSString *reporterKey;

/**
 *  Signal that caused the crash.
 */
@property(nonatomic, copy, readonly) NSString *signal;

/**
 *  Exception name that triggered the crash, nil if the crash was not caused by
 * an exception.
 */
@property(nonatomic, copy, readonly) NSString *exceptionName;

/**
 *  Exception reason, nil if the crash was not caused by an exception.
 */
@property(nonatomic, copy, readonly) NSString *exceptionReason;

/**
 *  Date and time the app started, nil if unknown.
 */
@property(nonatomic, readonly) NSDate *appStartTime;

/**
 *  Date and time the error occurred, nil if unknown
 */
@property(nonatomic, readonly) NSDate *appErrorTime;

/**
 *  Device information of the app when it crashed.
 */
@property(nonatomic, readonly) MSDevice *device;

/**
 *  Identifier of the app process that crashed.
 */
@property(nonatomic, readonly, assign) NSUInteger appProcessIdentifier;

// TODO Please review this doc that contains method name which doesn't exist.
/**
 Indicates if the app was killed while being in foreground from the iOS.

 If `[MSCrashes enableAppNotTerminatingCleanlyDetection]` is enabled, use this
 on startup
 to check if the app starts the first time after it was killed by iOS in the
 previous session.

 This can happen if it consumed too much memory or the watchdog killed the app
 because it
 took too long to startup or blocks the main thread for too long, or other
 reasons. See Apple
 documentation: https://developer.apple.com/library/ios/qa/qa1693/_index.html.

 See `[MSCrashes enableAppNotTerminatingCleanlyDetection]` for more
 details about which kind of kills can be detected.

 @warning This property only has a correct value, once `[BITHockeyManager
 startManager]` was
 invoked! In addition, it is automatically disabled while a debugger session is
 active!

 @see `[MSCrashes enableAppNotTerminatingCleanlyDetection]`
 @see `[MSCrashes didReceiveMemoryWarningInLastSession]`

 @return YES if the details represent an app kill instead of a crash
 */
- (BOOL)isAppKill;

@end
