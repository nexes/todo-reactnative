import { StyleSheet } from 'react-native';


export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  label: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    maxHeight: 20,
    paddingLeft: 20,
  },
  todoTitle: {
    flex: 1,
    maxHeight: 20,
    paddingLeft: 20,
    marginBottom: 10,
    marginTop: 5,
    justifyContent: 'center',
  },
  todoNote: {
    flex: 1,
    paddingLeft: 20,
  },
  categoryPickerItem: {
    height: 60,
  },
  addButton: {
    flex: 1,
  },
});
