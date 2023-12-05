import { createNativeStackNavigator } from '@react-navigation/native-stack';
import First from '../screens/First';
import Home from '../screens/Home';
import Settings from '../screens/Setting';
import BottomTab from '../navigation/BottomTabs'

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName='First'>
            <Stack.Screen name="First" component={First} options={{headerShown: false}} />
            <Stack.Screen name="BottomTab" component={BottomTab}  />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}

export default MyStack