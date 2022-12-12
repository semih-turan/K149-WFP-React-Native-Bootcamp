import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.styles';

const Card = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.proverb.imageUrl}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.proverb.title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text style={styles.year}>{props.proverb.year}</Text>
            <Text>{props.proverb.location}</Text>
            <Text>{props.proverb.text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
