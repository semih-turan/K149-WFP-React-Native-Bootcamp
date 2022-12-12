import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ADB5',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    fontColor: '#393E46',
    textAlign: 'center',
    paddingTop: 10,
    margin: 10,
  },
  logo: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width * 0.6,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logo_container: {
    justifyContent: 'center',
  },
  body_container: {},
});

export default styles;
