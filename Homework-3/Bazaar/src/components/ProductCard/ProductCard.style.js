import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: '#EEEEEE',
    borderColor: '#00ADB5',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#222831',
  },
  price: {
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#393E46',
  },
});
