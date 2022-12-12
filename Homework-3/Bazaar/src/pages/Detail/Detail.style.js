import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#EEEEEE'},
  body_container: {
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {fontWeight: 'bold', fontSize: 25, color: '#222831'},
  description: {fontStyle: 'italic', marginVertical: 5, color: '#393E46'},
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right',
    color: '#393E46',
    margin: 10,
  },
});
