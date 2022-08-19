//General imports
import React from 'react'
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

// My imports
import theme from '../../style/theme'

const ServicesButtonView = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.card}
        //onPress={() => { props.onPress=="generarQr"?null:null}}
        >
            <Icon
                name={item.icon}
                size={90}
                color={theme.primaryColor.color}
            />
            <Text style={styles.text}>
                {item.title}
            </Text>
        </TouchableOpacity>
    )
}

export default ServicesButtonView

const styles = StyleSheet.create({
    card: {
        width: 130,
        height: 130,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    text: {
        paddingVertical: 5,
        textAlign: 'center',
        width: '100%',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: theme.primaryColor.color,
    },
})