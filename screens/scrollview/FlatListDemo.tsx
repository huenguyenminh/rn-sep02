import React from "react";
import { Image, Text, View, StyleSheet, SafeAreaView, Dimensions, FlatList } from "react-native";

const { height } = Dimensions.get('window'); // Get the screen height

const FlatListDemo = () => {
    const headingHeightWrap = 120;

    const dataFake = [
        {id: 1, name: '1 Block Name', image: "https://t3.ftcdn.net/jpg/06/04/00/74/240_F_604007447_aqN9XD6ktouFl8MD84cX24xNCXQ8bTQq.jpg"},
        {id: 2, name: '2 Block Name', image: "https://t4.ftcdn.net/jpg/06/05/97/13/240_F_605971383_0NjKTJ08YGhGFx6BrwtwsL9DssnDKul3.jpg"},
        {id: 3, name: '3 Block Name', image: "https://t3.ftcdn.net/jpg/04/27/45/80/240_F_427458031_UCVoIfA92aoYqtwvjaQbTTqRCP2neE7z.jpg"},
        {id: 4, name: '4 Block Name', image: "https://t4.ftcdn.net/jpg/06/27/16/73/240_F_627167315_SHXBnJsPIMancYnMjPxjhctUuQTyjiWE.jpg"},
        {id: 5, name: '5 Block Name', image: "https://t3.ftcdn.net/jpg/06/11/91/88/240_F_611918802_H1NQufUojOlkSZeraPui4YKilsj4PJVI.jpg"},
        {id: 6, name: '6 Block Name', image: "https://t3.ftcdn.net/jpg/02/99/05/16/240_F_299051602_t6XooXL6EzgsCwlxasNfQhfwFeQJxTnh.jpg"},
    ];
    

    return(
        <SafeAreaView>
            <View style={[styles.header]}>
                <View style={styles.container}>
                        <Text style={styles.heading}> Demo Flat List</Text>
                </View>
            </View>
            <FlatList
                style={{height: height - headingHeightWrap }}
                data={dataFake}
                renderItem={({item}) =>
                <View style={styles.item}>
                    <Text>{item.name} </Text>
                    <Image style={styles.img} source={{uri: item.image}} />
                </View> 
            } />
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
});

export default FlatListDemo;