import React, { useContext } from 'react'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
}
    from 'react-native'

import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';

import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../context/authContext/authContext';
import ValidarUserBECL from '../components/login/ValidarUserBECL';
const GoogleButton = ({props}) => {

    const {
        logIn,
        setGoogleToken,
        logOut,
        setBECLToken,
    } = useContext(AuthContext);

    //console.log(AuthContext)
    const signIn = async () => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            //androidClientId: '215382460353-6cpt22p56kir9faqo7ea1tjb7pacsofu.apps.googleusercontent.com',
            //webClientId: '215382460353-qq2lc93pf3mdtvbg8560d7lumitronl8.apps.googleusercontent.com',
            webClientId: '557760474593-kepdbfo4b549a0qh3gkagdmfba121l9k.apps.googleusercontent.com'
        });
        try {
            await GoogleSignin.hasPlayServices();
            const userGoogle = await GoogleSignin.signIn();
            logIn()
            setGoogleToken(userGoogle)
            //console.log(userGoogle.idToken) 

            await ValidarUserBECL(userGoogle.idToken)
                .then(res => {
                    setBECLToken(res)
                }).catch(err => {
                    console.log(err)
                });

            props.navigation.navigate('Tabs')

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                console.error(error);
            }
        }
    };
    const navigateToDashboard = () => {
        //console.log(props);
       props.navigation.navigate('Tabs');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={navigateToDashboard}
            >
                <Image
                    style={styles.image}
                    source={require('../assets/googleLogo.png')}
                />
                <Text
                    style={styles.buttonText}
                >Iniciar sesión con Google </Text>
            </TouchableOpacity>
        </View>
    )
}

export default GoogleButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderRadius: 15,
        activeOpacity: 0.8,
    },
    image: {
        width: 28,
        height: 28,
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 15,
    }
})
