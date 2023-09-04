import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
const Skelaton = () => {
    return(
        <>
            <View style={{width: '50%', height: 160}}>
                <View style={{width: '100%', height: 100, backgroundColor: "#ddd"}}></View>
                <View >
                    <Text style={{width: '80%', height: 30, marginVertical: 10, backgroundColor: "#ddd"}}></Text>
                    <Text style={{width: '80%', height: 30, backgroundColor: "#ddd"}}></Text>
                </View>
            </View>
        </>
    )
};

export default Skelaton;