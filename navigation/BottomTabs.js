import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Setting';
import Profile from '../screens/profile'
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { WebView } from 'react-native-webview';



const Tab = createBottomTabNavigator();


//Form input dari github pages
const forminput = 'https://ikhwannnnnnn.github.io/Responsi-PGPBL/';

//Peta web dari gituhub pages
const webmap = 'https://ikhwannnnnnn.github.io/Responsi-PGPBL/map.html'



function MyTabs() {

    function HomeScreen() {
        return (
            <View>
                <Profile/>
            </View>
        );
    }

    function MapScreen() {
        return (
            <WebView
                source={ { uri: webmap} }
            />
        );
    }
    
    function AddDataScreen() {
        return (
            <WebView
                source={ { uri: forminput} }
            />
        );
    }

    return (
        <Tab.Navigator screenOptions={{headerShown:false, 
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
                bottom: 50,
                left: 30,
                right: 30,
                borderRadius: 20,
                // flexDirection: 'column',
                backgroundColor: '#282A3A'
        }
        


        }} >

            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused, size}) => (
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', backgroundColor: focused ? '#fff' : '#6D5D6E',
                        width: 55, height: 55, borderRadius: 30}}>
                        <FontAwesome5 name="home" size={size} style={{ color: focused ? '#735F32' : '#fff'}}/>
                        <Text style={{ color: focused ? '#007260' : '#fff', fontSize: 10 }}>Home</Text>
                    </View>
                )
                }} />
            <Tab.Screen name="Input Titik" component={AddDataScreen} options={{
                tabBarIcon: ({focused, size}) => (
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', backgroundColor: focused ? '#fff' : '#6D5D6E',
                        width: 55, height: 55, borderRadius: 30}}>
                        <FontAwesome5 name="map-marker-alt" size={size} style={{ color: focused ? '#735F32' : '#fff'}}/>
                        <Text style={{ color: focused ? '#007260' : '#fff', fontSize: 10 }}>Input Titik</Text>
                    </View>
                )
                }} />
            <Tab.Screen name="Peta" component={MapScreen} options={{
                tabBarIcon: ({focused, size}) => (
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', backgroundColor: focused ? '#fff' : '#6D5D6E',
                        width: 55, height: 55, borderRadius: 30}}>
                        <FontAwesome5 name="map" size={size} style={{ color: focused ? '#735F32' : '#fff'}}/>
                        <Text style={{ color: focused ? '#007260' : '#fff', fontSize: 10 }}>Input Titik</Text>
                    </View>
                )
                }} />
        </Tab.Navigator>
    );
}

export default MyTabs