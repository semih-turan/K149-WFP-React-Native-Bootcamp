import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.styles';

const Card = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.line} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{props.proverb.title}</Text>
        <View style={styles.info_container}>
          <Text style={styles.location}>{props.proverb.location}</Text>
          <Text style={styles.year}>{props.proverb.year}</Text>
          <Text style={styles.content_container}>{props.proverb.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
