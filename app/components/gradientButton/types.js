export const GradientButtonTypes = (theme) => {
  return ({
    _base: {
      button: {
        alignItems: 'stretch',
        paddingVertical: 0,
        paddingHorizontal: 0,
        height: 40,
        borderRadius: 20
      },
      gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        colors: [theme.colors.back.gradient1, theme.colors.back.gradient2]
      },
      text: {
        backgroundColor: 'transparent',
        color: theme.colors.text.additional
      }
    },
    large: {
      button: {
        alignSelf: 'stretch',
        height: 56,
        borderRadius: 28,
      },
      gradient: {
        borderRadius: 28
      }
    }
  })
};