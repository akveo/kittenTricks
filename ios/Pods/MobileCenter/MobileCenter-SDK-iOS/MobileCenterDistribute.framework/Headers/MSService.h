#import <Foundation/Foundation.h>

/**
 *  Protocol declaring service logic.
 */
@protocol MSService <NSObject>

/**
 *  Enable/disable this service.
 *
 *  @param isEnabled whether this service is enabled or not.
 *  @see isEnabled
 */
+ (void)setEnabled:(BOOL)isEnabled;

/**
 *  Is this service enabled.
 *
 *  @return a boolean whether this service is enabled or not.
 *  @see setEnabled:
 */
+ (BOOL)isEnabled;

@end
