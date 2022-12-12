import React from 'react';
import {SafeAreaView, Image, View, Alert, Text} from 'react-native';
import styles from './Login.style';
import Input from '../../components/Input/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import Config from 'react-native-config';
import usePost from '../../hooks/usePost';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();

  // Authorization check
  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }

  if (error) {
    Alert.alert('Bazaar', 'Something went wrong...');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Bazaar', 'User not found!');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
      navigation.navigate('ProductsPage');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Text style={styles.text}>BAZAAR</Text>
        <Image
          style={styles.logo}
          source={require('../../assets/loginLogo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Enter username..."
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Enter password..."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure={true}
            />
            <Button text="Login" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};

