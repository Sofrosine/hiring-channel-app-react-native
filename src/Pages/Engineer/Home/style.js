import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  containerProject: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e3e6e6',
    flexWrap: 'wrap',
  },
  cardProject: {
    height: 200,
    width: 165,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    borderRadius: 5,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  actionButtonIcon2: {
    fontSize: 20,
    height: 22,
    color: '#F27E81',
  },
  actionButtonIcon3: {
    fontSize: 16,
    height: 18,
    color: '#F27E81',
  },
  // drawerStyles: {
  //   drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  //   main: { paddingLeft: 3 },
  // }
});
