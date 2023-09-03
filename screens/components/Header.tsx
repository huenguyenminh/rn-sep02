import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
const Header = () => {
    return (
       <View style={styles.container}>
            <View> 
                <Text style={styles.titlepage}>
                    PRINT EFFECT
                </Text>
            </View>
            <View> 
                <Image style={styles.logo} source={require('../../assets/images/logo.jpg')} />
            </View>
       </View>
    )
};
const styles= StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: 'white',
        width: "100%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    titlepage: {
        color: '#AA6FA1',
        textTransform: 'uppercase',
        fontWeight: "bold",
        fontSize: 15,
        // fontFamily: "Baskerville-01",
        fontFamily: "ProximaNova-Regular"
    },
    logo:{
      width: 80,
      height: 60,
      alignSelf: 'center'
    }
  })
export default Header;