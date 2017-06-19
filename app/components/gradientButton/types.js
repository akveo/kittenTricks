import {scale, scaleModerate, scaleVertical} from '../../utils/scale';

export const GradientButtonTypes = (theme) => {
  return ({
    _base: {
      button: {
        alignItems: 'stretch',
        paddingVertical: 0,
        paddingHorizontal: 0,
        height: scaleVertical(40),
        borderRadius: 20
      },
      gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        colors: theme.colors.gradients.base
      },
      text: {
        backgroundColor: 'transparent',
        color: theme.colors.text.inverse
      }
    },
    large: {
      button: {
        alignSelf: 'stretch',
        height: scaleVertical(56),
        borderRadius: 28,
      },
      gradient: {
        borderRadius: 28
      }
    },
    statItem: {
      button: {
        flex: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        height: null,
        alignSelf: 'auto',
      },
      gradient: {
        flex: 1,
        borderRadius: 5,
        padding: 10,
      }
    }
  })
};