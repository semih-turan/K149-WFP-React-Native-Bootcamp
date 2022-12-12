import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import styles from './Detail.style';

const Detail = ({route, navigation}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_PRODUCT_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price} ₺</Text>
        <Button title="Add to Wish List" onPress={()=>navigation.navigate('WishListPage',{id})} />
      </View>
    </View>
  );
};

export default Detail;
