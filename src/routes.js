import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import {Entypo, MaterialIcons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: "black", tabBarInactiveTintColor: "gray",}}>
            <Tab.Screen options={{tabBarIcon: ({color})=>(<Entypo name="home" size={24} color="black"/>)}} name="Home" component={Home}/>
            <Tab.Screen options={{tabBarIcon: ({color})=>(<MaterialIcons name="account-circle" size={24} color="black"/>)}} name="Profile" component={Profile}/>
        </Tab.Navigator>
    );
}