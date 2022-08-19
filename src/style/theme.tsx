import React from 'react';
import {
    StyleSheet
} from 'react-native';

const theme = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',

    },
    viewWhite: {
        width: '100%',
        height: '10%',
        backgroundColor: 'white',
    },
    viewBlue: {
        width: '100%',
        height: '10%',
        backgroundColor: 'grey',
    },
    viewRed: {
        width: '100%',
        height: '10%',
        backgroundColor: 'red',
    },
    buttonGoogle: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    viewLogo: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: '40%',
        backgroundColor: 'white',
        resizeMode: 'contain',
    },
    viewOptions: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {    
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent:'space-between',
    },
    primaryColor: {
        color: '#A81F2B',
    },
    secondaryColor: {
        color: '#E05554',
    },
    primaryColorDark: {
        color: '#720001',
    }


});
export default theme;