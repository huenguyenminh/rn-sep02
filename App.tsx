import { Button, Image, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import ScrollViewDemo from './screens/scrollview/ScrollViewDemo';
import FlatListDemo from './screens/scrollview/FlatListDemo';
import Contact from './screens/scrollview/Contact';

const Tab = createBottomTabNavigator();

// const Home = ({ navigation }: any) => {
//   return(
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button 
//          onPress={() => navigation.navigate('Detail',{
//             productId: 86,
//             sale: '-30%'
//          })}
//         title="Detail Product"></Button>
//     </View>
//   )
// }

// const Detail = ({route, navigation} : any) => {
//   /* 2. Get the param */
//   const { productId, sale } = route.params;
//   console.log('====================================');
//   console.log(productId);
//   console.log('====================================');

//   return(
//    <>
//       <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: 'black'}}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={{color: "white"}}> &lt; Back</Text>
//         </TouchableOpacity>
//         <Icon name="mail" color="#900" />
//       </View>
//      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', borderBottomColor: 'red', borderBottomWidth: 10}}>
//         <Text>Detail Screen</Text>
//         <Text>Product ID: {JSON.stringify(productId)}</Text> 
//         <Text>New Price: {JSON.stringify(sale)}</Text> 
//     </View>
//    </>
//   )
// }

// const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator 
           screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'appstore1'
                  : 'appstore-o';
              } else if (route.name === 'Contact') {
                iconName = focused ? 'contacts' : 'solution1'
              } else if (route.name === 'Login'){
                iconName = focused ? 'login' : 'logout'
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false
          })}
          >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Contact" component={Contact} />
          <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
      </NavigationContainer>

      // <NavigationContainer>
      //     <Stack.Navigator>
      //         <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      //         <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
      //     </Stack.Navigator>
      // </NavigationContainer>


      // <>
      //   <View>
      //     {/* <Contact/> */}
      //     {/* <FlatListDemo/> */}
      //     {/* <ScrollViewDemo/> */}
      //     {/* <HomeScreen/> */}
      //     {/* <LoginScreen/> */}
         
      //   </View>
      // </>
    )
}
const styles= StyleSheet.create({
  container: {
      width: "100%",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
  },
  item:{
    width: '25%',
    height: 100,
    alignSelf: 'center'
  }
})
export default App;