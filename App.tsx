import { Button, Image, StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import ScrollViewDemo from './screens/scrollViewDemo';
const App = () => {
    return (
      <>
        <View>
          <ScrollViewDemo/>
          {/* <HomeScreen/> */}
          {/* <LoginScreen/> */}
         
        </View>
      </>
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