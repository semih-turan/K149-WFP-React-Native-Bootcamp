import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    margin: 8,
    backgroundColor: '#FAF3E3',
},
  line: {
    borderWidth: 1,
    justifyContent: 'center',
},
  inner_container: {
    padding: 8,
    margin: 5,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    //fontFamily: 'engravers-old-english-bold-bt',
    fontFamily: 'Sinhala Sangam MN',
    // color: '#FF9F29'
    color: '#C06014',
  },
  info_container: {
    flexDirection: 'column',
    flex: 1,
  },
  year: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 1,
    paddingBottom: 10,
    color: '#1A4D2E',
  },
  location: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    color: '#1A4D2E',
  },
  content_container: {
    flexDirection: 'column',
    color: '#000000',
  },
});
