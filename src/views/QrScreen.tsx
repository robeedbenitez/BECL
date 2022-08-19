
import React, { useContext } from 'react'
import {
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    View,
} from 'react-native'
import { AuthContext } from '../context/authContext/authContext'
import jwt_decode from "jwt-decode";

const QrScreen = (props) => {
    const { authState } = useContext(AuthContext)
    const { user } = authState.googleToken
    user.photo = user.photo.replace('=s96-c', '')
    console.log("props de qrscreen " + props.route.params)
    const base64Image = props.route.params;

    return (
        <View
            style={styles.background}
        >
            <ImageBackground
                source={require('../assets/qrbackground.png')}
                style={styles.backgroundImage}

            >
                <View style={styles.container}>
                    <Text style={styles.textQr}>
                        ESTUDIANTE
                    </Text>
                    <View style={[styles.photoContainer]}>
                        <Image
                            style={styles.photo}
                            source={{
                                uri: user.photo
                            }}
                        />
                    </View>
                    <Text
                    style={styles.name}
                    >
                        {user.givenName+"\n"+user.familyName}
                        {console.log(user)}
                    </Text>
                    <Text  
                    style={styles.codigo}
                    >
                        {user.id}
                    </Text>


                    <Image
                        source={{ uri: `data:image/jpeg;base64,${base64Image}` }}
                        style={styles.qr}

                    />
                </View>

            </ImageBackground>
        </View>
    )
}

export default QrScreen

const styles = StyleSheet.create({
    qr: {
        width: 250,
        height: 250,
    },
    background: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        //backgroundColor: 'red',
    },
    textQr: {
        color: 'white',
        fontSize: 40,
        borderRadius: 10,
        padding: 10,
    },

    photo: {
        width: 190,
        height: 190,
        resizeMode: 'contain',
        borderRadius: 400/2,
        
    },
    photoContainer: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        textTransform: 'capitalize',
    },
    codigo:{
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
    }

})