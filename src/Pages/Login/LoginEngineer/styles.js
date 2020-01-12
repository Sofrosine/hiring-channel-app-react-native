import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderColor: 'white',
    borderBottomColor: '#FABA00',
    borderWidth: 1,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#FABA00',
    height: 30,
    elevation: 2,
  },
  registerButton: {
    backgroundColor: '#FABA77',
    height: 30,
    elevation: 2,
  },
});
