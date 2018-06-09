import React from 'react';
import {Text, View, TouchableHighlight, StyleSheet, Image} from 'react-native';
import ResponseButtons from './ResponseButtons';

const Animal = (props) => (
    <View style={styles.container}>
        <View style={styles.img}>
            <Image source={require('../assets/DidYouKnow.png')} style={{width: 130, height: 100}} />
        </View>
        <Text style={styles.smallText}>
        The City of Toronto inspects and investigates animal-related complaints to ensure compliance with acts, bylaws and regulations.
        This is done through the Animal Control program.
        </Text>
        <TouchableHighlight style={styles.button3} onPress={() => this.props.navigation.navigate('FileComplaint')} >
          <Text style={{color: 'white', textAlign: 'center', width: 200, marginTop: '5%'}}>Call 416-338-PAWS</Text>
        </TouchableHighlight>
        <ResponseButtons goBack={props.goBack}/>
    </View>
)
const styles = StyleSheet.create({
    h1: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold'
    },
    smallText: {
        fontSize: 15,
        color: 'grey',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '5%'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center'
      },
    text: {
        color: 'white',
        fontSize: 30,
        padding: 20,
        textAlign: 'center',
        justifyContent: 'center',
        opacity: 1
    },
    img: {
        width: 150,
        height: 80,
        alignItems:'center',
        justifyContent: 'center'
    },
    button2: {
        width: 190,
        height: 80,
        marginTop: '5%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button3: {
        width: 190,
        height: 40,
        marginTop: '5%',
        backgroundColor: '#27AE60',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Animal;
