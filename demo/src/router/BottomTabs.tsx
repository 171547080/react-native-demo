import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import MusicVideo from '../pages/MusicVideo';
import User from '../pages/User';
import Community from '../pages/Community';
import { RootStackNavigation, RootStackParamList } from '.';
export type BottomTabParamList = {
  Home: undefined;
  MusicVideo: undefined;
  User: undefined;
  Community: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();


type Route = RouteProp<RootStackParamList,'BottomTabs'>

interface IProps{
  navigation: RootStackNavigation,
  route: Route
}

function getHeaderTitle(route: Route){
  const routeName = route.name
  return routeName
}

class BottomTabs extends React.Component<IProps> {
  componentDidMount(){
    const {navigation,route} = this.props
    console.log(route)
    navigation.setOptions({
      headerTitle:getHeaderTitle(route)
    })
  }

  render() {
    return (
    //   <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
            name="Home"
            component={Home}
            options={{tabBarLabel: '首页'}}></Tab.Screen>
          <Tab.Screen
            name="MusicVideo"
            component={MusicVideo}
            options={{tabBarLabel: 'MV'}}></Tab.Screen>
          <Tab.Screen
            name="Community"
            component={Community}
            options={{tabBarLabel: '社区'}}></Tab.Screen>
          <Tab.Screen
            name="User"
            component={User}
            options={{tabBarLabel: '我的'}}></Tab.Screen>
        </Tab.Navigator>
    //   </NavigationContainer>
    );
  }
}

export default BottomTabs;
