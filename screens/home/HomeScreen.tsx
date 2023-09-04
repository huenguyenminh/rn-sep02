import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Category from './Category';
import ListProducts from './ListProducts';
const HomeScreen = () => {
    return (
        <>
          <Header/>
          <ScrollView>
            <Category/>
            <ListProducts/>
          </ScrollView>
          
        </>
    )
};


export default HomeScreen;