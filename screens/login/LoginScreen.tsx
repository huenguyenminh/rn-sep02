import React from "react";
import { Alert, View, Text, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const LoginScreen = () => {
    return(
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'dark-content'}></StatusBar>
                <View style={styles.main}>
                    <View style={styles.login_up}>
                        <Text style={styles.title}>Login</Text>
                        <Text style={styles.note}>
                            By signing in you are agreeing our 
                        </Text>
                        <TouchableOpacity onPress={() => { Alert.alert('Clickable')}}>
                            <Text style={styles.link}>
                            Term and privacy policy
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.login_form}>
                        <Icon name="google" size={30} color="#900" />
                        <View style={styles.group}>
                            <TextInput style={styles.form_control} placeholder="Email Address"></TextInput>
                        </View>
                    </View>
                   
                </View>
            </SafeAreaView>
        </>
    )
};

const styles = StyleSheet.create({
    container: {

    },
    main:{
        paddingHorizontal: 20
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
       
    },
    login_up: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 48,
    },
    title: {
        textTransform: "uppercase",
        fontSize: 32,
        color: '#AA6FA1',
        fontWeight: '500',
         fontFamily: "ProximaNova-Regular",
         marginBottom: 10
    },
    note: {
       marginBottom: 5,
    },
    link:{
        color: '#036BB9'
    },
    login_form: {
        
    },
    group: {

    },
    form_control: {
        borderBottomWidth: 1,
        paddingBottom: 8,
        borderBottomColor: '#A6A6A6'
    }
});

export default LoginScreen;