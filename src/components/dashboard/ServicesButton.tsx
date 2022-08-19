import React,{ useContext,useState } from 'react'
import { AuthContext } from '../../context/authContext/authContext'
import jwt_decode from "jwt-decode";
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,

} from 'react-native'
import theme from '../../style/theme'
import Icon from 'react-native-vector-icons/MaterialIcons'
import generarQr from '../../consts/generarQr'
import { useNavigation } from '@react-navigation/native';


const ServicesButton = (props) => {
    const navigation = useNavigation();
    console.log(props)
    const { authState } = useContext(AuthContext)
    const BECLuser = jwt_decode(authState.BECLToken.access)

    const QrScreen = async () => {
        try {
            const data = {
                grupo: BECLuser.user.groups[0].id,
                token: authState.BECLToken.access,
            }
            await generarQr(data)
                .then(data => {
                    navigation.navigate('QrScreen',data.qrcode)
                    console.log("data de generar qr " + data)
                })
        } catch (error) {
            console.log(error)
        }
        

    }
    return (
        <TouchableOpacity 
        style={styles.card}
        onPress= {props.onPress=="generarQr"?QrScreen:null} 
        >
            <Icon
                name={props.iconName}
                size={90}
                color={theme.primaryColorDark.color}                
            />
                <Text style={styles.text}>
                    {props.title}
                </Text>
            

        </TouchableOpacity>
    )
}

export default ServicesButton
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
        textAlign: 'center',
        width: '100%',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: theme.primaryColorDark.color,
    },
})