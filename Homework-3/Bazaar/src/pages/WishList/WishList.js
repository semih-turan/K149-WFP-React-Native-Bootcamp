import React, {useState} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import ProductCard2 from '../../components/ProductCard';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch';
import styles from './WishList.style';

const WishList = ({route}) => {
  const {id} = route.params;
  const {loading, data, error} = useFetch(`${Config.API_PRODUCT_URL}/${id}`);

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
        <Text style={styles.price}>{data.price} ₺</Text>
      </View>
    </View>
  );
};

export default WishList;
