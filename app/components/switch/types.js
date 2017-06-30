export const SwitchTypes = (theme) => {
  return ({
    _base: {
      container: {
        width: 52,
        height: 32,
        overflow: 'hidden',
        justifyContent: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: theme.colors.border.secondary,
        onColor: theme.colors.primary,
        offColor: {
          android: theme.colors.screen.base,
          ios: theme.colors.border.base
        }
      },
      thumb: {
        position: 'absolute',
        height: 32,
        width: 32,
        borderWidth: 1,
        borderColor: theme.colors.border.secondary,
        backgroundColor: theme.colors.screen.base,
        borderRadius: 16,
      }
    },
    selected: {
      thumb: {
        borderColor: theme.colors.primary
      },
      container: {
        borderColor: theme.colors.primary,
      }
    }
  })
};