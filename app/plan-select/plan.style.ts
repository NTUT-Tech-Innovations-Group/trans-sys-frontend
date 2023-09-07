import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F9F3DC',
    alignItems: 'center',
    zIndex: 0,
  },

  header: {
    width: '100%',
    marginTop: 50,
    marginBottom: 40,
    marginLeft: 50,
  },
  route_list: {
    height: '65%',
    justifyContent: 'space-between',
  },

  mainHeader: {
    color: '#666',
    fontFamily: 'Inter-600',
    fontSize: 24,
    letterSpacing: 3.6,
  },

  subHeader: {
    color: '#818181',
    fontFamily: 'Inter-500',
    fontSize: 13,
    lineHeight: 21,
    letterSpacing: 1.95,
  },

  inputContainer: {
    height: 450,
    width: '100%',
    display: 'flex',
    gap: 60,
    alignItems: 'center',
  },
  btnContainer: {
    alignItems: 'flex-end',
    bottom: 100,
    display: 'flex',
    position: 'absolute',
    width: '100%',
  },

  btn: {
    alignItems: 'center',
    backgroundColor: '#89B449',
    display: 'flex',
    width: 148,
    height: 40,
    borderRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'center',
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 16,
  },

  btnTitle: {
    fontFamily: 'Inter-500',
    fontSize: 20,
    letterSpacing: 6.63,
    fontWeight: '500',
    color: '#fff',
  },
})
