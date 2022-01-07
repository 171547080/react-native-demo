// jsx语法，必须引入React
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home'
const Stack = createNativeStackNavigator();
const Router = function(){
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    ) 
}

export default Router