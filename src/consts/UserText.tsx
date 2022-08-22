import React from 'react'
import {
    Text,
    StyleSheet,
    View,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const UserText = ({item}) => {
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.icon}>
                <Icon
                    name={item.iconName}
                    size={30}
                    color='#A81F2B' />
            </Text>
            <Text style={styles.textInfo}>
                {item.data}                
            </Text>
        </View>
    )
}

export default UserText

const styles = StyleSheet.create({

    textInfo: {
        fontSize: 20,
        width: '90%',
    },
    icon: {
        marginRight: 20,
    },
    viewContainer: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 8,
    }
})