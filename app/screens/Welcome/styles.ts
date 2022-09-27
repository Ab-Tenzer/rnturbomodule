import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputArea: {
    flexDirection: 'row',
    maxWidth: '60%',
    paddingVertical: 5
  },
  textInput: {
    flex: 1,
    marginBottom: 5
  },
  login: {
    padding: 8,
  },
  forgot: {
    marginTop: 12,
  },
  labelStyle: {
    fontSize: 12,
  },
});

export default styles;
