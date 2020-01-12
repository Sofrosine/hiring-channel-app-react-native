import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#f76157',
  },
  welcomeText: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  welcomeTextItem1: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  welcomeTextItem2: {
    color: 'white',
  },
  welcomeImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeImageItem: {
    width: 400,
    height: 300,
  },
  welcomeButton: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeButtonItem1: {
    backgroundColor: '#FABA00',
    height: 45,
    elevation: 2,
  },
  welcomeButtonItem2: {
    color: 'white',
  },
});
