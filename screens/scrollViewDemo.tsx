import React from "react";
import { Image, Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions } from "react-native";

const { height } = Dimensions.get('window'); // Get the screen height
const scrollViewDemo = () => {
    const headingHeight = 60;
    const headingHeightWrap = 120;
    return(
        <SafeAreaView>
           <View style={[styles.header, {height:headingHeight} ]}>
                <View style={styles.container}>
                        <Text style={styles.heading}> Demo Scroll View</Text>
                </View>
            </View>
            <ScrollView style={{backgroundColor: 'red', borderBottomWidth: 10, borderBottomColor: 'black'}}  style={{ height: height - headingHeightWrap }}>
                <View style={styles.item}>
                    <Text>1 Block Title </Text>
                    <Image style={styles.img} source={require('../assets/images/hero.jpeg')} />
                </View>
                <View style={styles.item}>
                    <Text>2 Block Title </Text>
                    <Image style={styles.img} source={require('../assets/images/hero.jpeg')} />
                </View>
                <View style={styles.item}>
                    <Text>3 Block Title </Text>
                    <Image style={styles.img} source={require('../assets/images/hero.jpeg')} />
                </View>
                <View style={styles.item}>
                    <Text>4 Block Title </Text>
                    <Image style={styles.img} source={require('../assets/images/hero.jpeg')} />
                </View>
            
            </ScrollView>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30
    },
    body: {

    },
    item: {
        width: '50%',
        marginBottom: 20,
        marginLeft: 30,
    },
    header: {
        flexDirection: "row",
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    heading:{
        fontSize: 20,
        textTransform: 'uppercase',
    },
    img: {
        marginTop: 10,
        width: '100%',
        height: 200,
    }
})

export default scrollViewDemo;