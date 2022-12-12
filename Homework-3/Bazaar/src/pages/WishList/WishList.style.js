import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#EEEEEE'},
  
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    padding: 10,
  },
  title: {fontWeight: 'bold', fontSize: 25, color: '#222831'},
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right',
    color: '#393E46',
    margin: 10,
  },
});

export default styles;
