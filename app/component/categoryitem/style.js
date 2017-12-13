import {
  StyleSheet,
} from 'react-native';


export const style = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    borderLeftWidth: 5,
    marginLeft: 5,
    marginBottom: 5,
  },
  title: {
    width: '100%',
    height: 30,
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 5,
   },
   detail: {
     height: 15,
     fontSize: 8,
     alignSelf: 'flex-end',
     paddingRight: 20,
     // paddingTop: 5,
   },
});
