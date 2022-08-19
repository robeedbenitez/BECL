import React, { useContext, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    Button,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import jwt_decode from "jwt-decode";
import { AuthContext } from '../context/authContext/authContext'
import generarQr from '../consts/generarQr'
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../style/theme';
import ServicesButton from '../components/dashboard/ServicesButton'


const DashboardScreen = (props) => {
    //console.log("props de dashboardScreen "+JSON.stringify(props))
    const { authState } = useContext(AuthContext)
    const { user } = authState.googleToken
    const BECLuser = jwt_decode(authState.BECLToken.access)
    //console.log(JSON.stringify(authState))
    const [qr, setQr] = useState();

    const QrScreen = async () => {
        try {
            const data = {
                grupo: BECLuser.user.groups[0].id,
                token: authState.BECLToken.access,
            }
            await generarQr(data)
                .then(data => {
                    setQr(data.qrcode)
                    console.log("data de generar qr " + data)
                })
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <ImageBackground
                style={styles.background}
                source={require('../assets/backgroundservicios.png')}
                resizeMode='cover'
            >
                <SafeAreaView >
                    <View style={styles.container}>
                        <ServicesButton
                            iconName="home"
                            title="Ingreso"
                            onPress="generarQr"
                        />
                        <ServicesButton
                            iconName="home"
                            title="Salida"
                            onPress="generarQr"
                        />
                    </View>
                </SafeAreaView>
                
            </ImageBackground>
        </>
    )
}

export default DashboardScreen;


const styles = StyleSheet.create({

    background: {
        flex: 1,
        width: '100%',
        height: '100%',

    },
    container: {
        flex: 1,        
        alignItems: 'center',
        width: '100%',
        height: '100%',

    }
});