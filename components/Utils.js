import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300, 
    marginBottom: 20,
  },
  card: {
    width: '80%',
    padding: 20,
  },
  input: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
    button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
