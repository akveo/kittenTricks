export const AvatarTypes = (theme) => {
  return ({
    _base: {
      container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
      },
      image: {
        width: 40,
        height: 40
      },
      username: {
        paddingLeft: 10,
        color: theme.colors.text.base
      }
    },
    big: {
      image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        marginBottom:19
      },
      container: {
        flexDirection: 'column'
      },
      username:{
        fontSize: theme.fonts.sizes.large
      }
    }
  })
};