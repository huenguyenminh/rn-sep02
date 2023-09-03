import React from "react";
import { Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Category from './Category';
import ListProducts from './ListProducts';
const HomeScreen = () => {
    return (
        <>
          <Header/>
          <Category/>
          <ListProducts/>
          <Text>Home screen</Text>
        </>
    )
};


export default HomeScreen;