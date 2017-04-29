export const SwitchTypes = (theme) => {
  return ({
    _base: {
      container: {
        width: 50,
        height: 30,
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
        top: -1,
        height: 30,
        width: 30,
        borderWidth: 1,
        borderColor: theme.colors.border.hint,
        backgroundColor: theme.colors.back.base,
        borderRadius: 15,
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