import React from 'react'
import {
    createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import Dashboard from '../../views/Dashboard'
import UserScreen from '../../views/UserScreen'
import theme from '../../style/theme'
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: '#fff' }}
            screenOptions={
                ({ route }) => ({
                    tabBarActiveTintColor: theme.primaryColor.color,
                    tabBarIcon: ({ color, focused, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Dashboard':
                                iconName = 'apps-outline';
                                break;
                            case 'UserScreen':
                                iconName = 'person-outline';
                                break;
                        }
                        return <Icon name={iconName} size={30} color={color} />
                    }
                })
            }
            initialRouteName="Dashboard"
        >
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: "Servicios",
                    header: () => null,
                }}
            />
            <Tab.Screen
                name="UserScreen"
                component={UserScreen}
                options={{
                    tabBarLabel: "Perfil",
                    header: () => null,
                }}
            />

        </Tab.Navigator>
    );
}
export default Tabs;