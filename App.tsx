import { ALert, Button, Image, StyleSheet, View, Text } from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
const App = () => {
    return (
      <>
        <View style={styles.container}>
          <View style={[styles.item, {backgroundColor: 'red'}]}></View>
          <View style={[styles.item, {backgroundColor: 'yellow'}]}></View>
          <View style={[styles.item, {backgroundColor: 'green'}]}></View>
          <View style={[styles.item, {backgroundColor: 'brown'}]}></View>

          <View style={[styles.item, {backgroundColor: 'blue'}]}></View>
          <View style={[styles.item, {backgroundColor: 'pink'}]}></View>
          <View style={[styles.item, {backgroundColor: 'orange'}]}></View>
          <View style={[styles.item, {backgroundColor: 'violet'}]}></View>
        </View>
        <View>
          <Image source={require('./assets/hero.jpeg')} style={{width: '100%', height: 300}}/>
          <View style={{backgroundColor: 'red', padding: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 20, right: 20, zIndex: 2}}>
            <Text style={{color: '#fff', }}>Seoul Korea</Text>
          </View>
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