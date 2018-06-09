import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const GreyBox = (props) => (
    <View style={styles.rectangle}>
        <Text style={styles.txt}>
        TestTestTestTestTestTestTestTestTestTestTestTestTest
        </Text>
    </View>
)

const styles = StyleSheet.create({
    txt: {
      width: 170,
      fontSize: 14,
      textAlign: 'left'

    },

    rectangle: {
      marginLeft: 40,
      width: 200,
      backgroundColor: '#F2F2F2',
      padding: 15,
      borderRadius: 15,
      borderBottomLeftRadius: 0,
      marginBottom: 10
    }
})

export default GreyBox;