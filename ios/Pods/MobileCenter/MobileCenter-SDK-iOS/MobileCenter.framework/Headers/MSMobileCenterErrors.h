#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

#pragma mark - Domain

extern NSString *const kMSMCErrorDomain;

#pragma mark - Log

// Error codes
NS_ENUM(NSInteger){kMSMCLogInvalidContainerErrorCode = 1};

// Error descriptions
extern NSString const *kMSMCLogInvalidContainerErrorDesc;

#pragma mark - Connection

// Error codes
NS_ENUM(NSInteger){kMSMCConnectionSuspendedErrorCode = 100, kMSMCConnectionHttpErrorCode = 101};

// Error descriptions
extern NSString const *kMSMCConnectionHttpErrorDesc;
extern NSString const *kMSMCConnectionSuspendedErrorDesc;

// Error user info keys
extern NSString const *kMSMCConnectionHttpCodeErrorKey;

NS_ASSUME_NONNULL_END
