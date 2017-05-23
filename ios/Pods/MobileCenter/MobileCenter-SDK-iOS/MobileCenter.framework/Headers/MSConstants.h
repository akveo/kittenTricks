#import <Foundation/Foundation.h>

/**
 *  Log Levels
 */
typedef NS_ENUM(NSUInteger, MSLogLevel) {

  /**
   *  Logging will be very chatty
   */
  MSLogLevelVerbose = 2,

  /**
   *  Debug information will be logged
   */
  MSLogLevelDebug = 3,

  /**
   *  Information will be logged
   */
  MSLogLevelInfo = 4,

  /**
   *  Errors and warnings will be logged
   */
  MSLogLevelWarning = 5,

  /**
   *  Errors will be logged
   */
  MSLogLevelError = 6,

  /**
   * Only critical errors will be logged
   */
  MSLogLevelAssert = 7,

  /**
   *  Logging is disabled
   */
  MSLogLevelNone = 99
};

typedef NSString * (^MSLogMessageProvider)(void);
typedef void (^MSLogHandler)(MSLogMessageProvider messageProvider, MSLogLevel logLevel, NSString *tag, const char *file,
                             const char *function, uint line);

