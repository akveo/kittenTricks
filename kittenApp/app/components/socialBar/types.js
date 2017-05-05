export const SocialBarTypes = (theme) => {
  return ({
    _base: {
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
      },
      section: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
      },
      icon: {
        marginRight: 8,
        fontSize: 20
      },
      label: {
        alignSelf: 'flex-end'
      }
    },
    leftAligned: {
      section:{
        alignItems:'flex-start',
        justifyContent:'flex-start'
      },
      label:{
        color:'white',
      },
      icon:{
        color:'white'
      }
    }
  })
};