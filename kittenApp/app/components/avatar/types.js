export const AvatarTypes = (theme) => {
  return ({
    _base: {
      container: {
        alignItems: 'center',
        flexDirection: 'row',
      },
      image: {
        width: 40,
        height: 40
      },
      badge: {
        backgroundColor: 'red',
        width: 15,
        height: 15,
        borderRadius: 7.5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -2,
        right: -2
      },
      badgeText: {
        backgroundColor: 'transparent',
        fontSize: 9,
        color: theme.colors.text.additional
      }
    },
    big: {
      image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        marginBottom: 19
      },
      container: {
        flexDirection: 'column'
      }
    },
    circle: {
      image: {
        borderRadius: 20
      },
    }
  })
};