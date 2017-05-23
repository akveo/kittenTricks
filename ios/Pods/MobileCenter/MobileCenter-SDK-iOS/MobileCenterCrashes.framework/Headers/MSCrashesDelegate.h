#import <Foundation/Foundation.h>

@class MSCrashes;
@class MSErrorReport;

@protocol MSCrashesDelegate <NSObject>

@optional

/**
 * Callback method that will be called before processing errors. Based on the return value,
 * Crashes will send logs to the server or discard/delete logs.
 * @param crashes The instance of MSCrashes.
 * @param errorReport The errorReport that will be sent.
 */
- (BOOL)crashes:(MSCrashes *)crashes shouldProcessErrorReport:(MSErrorReport *)errorReport;

/**
 * Callback method that will be called before each error will be send to the
 * server. Use this callback to display custom UI while crashes are sent to the server.
 * @param crashes The instance of MSCrashes.
 * @param errorReport The errorReport that will be sent.
 */
- (void)crashes:(MSCrashes *)crashes willSendErrorReport:(MSErrorReport *)errorReport;

/**
 * Callback method that will be called in case the SDK was unable to send an error report to the server. Use this method to hide custom
 * @param crashes The instance of MSCrashes.
 * @param errorReport The errorReport that Mobile Center sent.
 */
- (void)crashes:(MSCrashes *)crashes didSucceedSendingErrorReport:(MSErrorReport *)errorReport;

/**
 * Callback method that will be called in case the SDK was unable to send an error report to the server.
 * @param crashes The instance of MSCrashes.
 * @param errorReport The errorReport that Mobile Center tried to send.
 * @param error The error that occurred.
 */
- (void)crashes:(MSCrashes *)crashes didFailSendingErrorReport:(MSErrorReport *)errorReport withError:(NSError *)error;

@end
