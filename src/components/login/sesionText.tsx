import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';

const SesionText = (props) => {
    
    return (
        <Text
        style={styles.text}
        >
            {props.text}
        </Text>
    )
}
export default SesionText;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white',
        marginVertical: 15,
        marginHorizontal: 10,
    }
})