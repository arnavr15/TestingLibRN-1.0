import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import CommunityScreen from './screens/CommunityScreen';

//Screen namesr
const homeName = 'Home';
const profileName = 'Profile';
const settingsName = 'Settings';
const communityName = 'Community';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = '';
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === communityName) {
              iconName = focused ? 'key' : 'key-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            marginBottom: 5,
            fontSize: 10,
          },
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
        })}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
        <Tab.Screen name={communityName} component={CommunityScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
