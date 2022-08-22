//General imports
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    SafeAreaView
} from 'react-native'

// My imports
import GeneralButton from '../consts/GeneralButton';
import UserText from '../consts/UserText';
import theme from '../style/theme';
import GeneralTable from '../consts/GeneralTable';
import { getUserProfileData } from '../data/indexData';


const UserProfile = () => {
    return (
        <>
            <ImageBackground
                source={require('../assets/backgroundprofile.png')}
                resizeMode="cover"
                style={styles.background}
            >
                <SafeAreaView
                    style={styles.background}
                >
                    <View style={styles.container}>
                        <View style={styles.infoContainer}>
                            <View style={[styles.photoContainer]}>
                                <Image
                                    style={styles.photo}
                                    source={{
                                        uri: "https://yt3.ggpht.com/yti/AJo0G0lY84pFGfrIwIh0ZSH3aVWNz_DdUHNgCbGyoqZQq4I=s88-c-k-c0x00ffffff-no-rj-mo"
                                    }}
                                />
                            </View>
                            <View style={styles.info}>
                                <GeneralTable                                    
                                    data={getUserProfileData()}
                                    numColumns={1}
                                    renderItem={UserText}
                                />
                            </View>
                        </View>
                        <View style={styles.buttonsConstainer}>
                            <GeneralButton
                                text="Historial"
                            />
                            <GeneralButton
                                text="Mis solicitudes"
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </>
    )
}

export default UserProfile;
//------------------------- Style Sheet --------------------------------- 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    infoContainer: {
        width: '100%',
        flex: 9,
        //backgroundColor: '#Fdf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        width: '80%',
        //backgroundColor: '#Fee',
    },
    buttonsConstainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        //backgroundColor: 'red'
    },
    button: {
        backgroundColor: theme.secondaryColor.color,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        fontSize: 30,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    textWhite: {
        color: 'white',
    },
    photoContainer: {
        width: 190,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    photo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 400 / 2,
    }



})