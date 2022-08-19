import React from 'react';
import LoginScreen from '../../views/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from '../navigation/Tabs';
import QrScreen from '../../views/QrScreen';
// import DashboardScreen from '../../views/DashboardScreen';
import Dashboard from '../../views/Dashboard';
const Stack = createStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
        >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    header: () => null
                }}

            />
            <Stack.Screen
                name="QrScreen"
                component={QrScreen}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    header: () => null
                }}
            />


        </Stack.Navigator>
    );
}
export default StackNavigator;