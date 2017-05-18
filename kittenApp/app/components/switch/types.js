export const SwitchTypes = (theme) => {
  return ({
    _base: {
      container: {
        width: 52,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: theme.colors.border.hint,
        onColor: theme.colors.back.primary,
        offColor: {
          android: theme.colors.back.base,
          ios: theme.colors.border.hint
        }
      },
      thumb: {
        position: 'absolute',
        height: 32,
        width: 32,
        borderWidth: 1,
        borderColor: theme.colors.border.hint,
        backgroundColor: theme.colors.back.base,
        borderRadius: 16,
      }
    },
    selected: {
      thumb: {
        borderColor: theme.colors.back.primary
      },
      container: {
        borderColor: theme.colors.back.primary,
      }
    }
  })
};