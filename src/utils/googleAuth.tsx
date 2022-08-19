import React, { useContext, useEffect } from 'react';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();

const googleAuth = () => {
    const signIn = async () => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: '215382460353-qq2lc93pf3mdtvbg8560d7lumitronl8.apps.googleusercontent.com',
        });
        try {
            await GoogleSignin.hasPlayServices();
            const userGoogle = await GoogleSignin.signIn();
            navigation.navigate('Dashboard')
    
        } catch (error) {
            console.error(error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                console.error('otro error' + error);
            }
        }
    };
  return (
    <></>
  )
}

export default googleAuth





export const signOut = async () => {

    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        //props.navigation.navigate('LoginScreen')
        //setloggedIn({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
        console.error(error);
    }
};

