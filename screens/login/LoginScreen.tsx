import React,  { useState }  from "react";
import { Alert, View, Text, StatusBar, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Platform } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isCheck, setIsCheck] = useState(false);
    const [email, setEmail]  = useState('');
    const [checkEmail, setCheckEmail]  = useState(true);
    const [errorPass, setErrorPass]  = useState('');
    const [pass, setPass]  = useState('');

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const onSubmit = () => {
        let formData = {
            _email: email,
            _pass: pass,
            _isCheck: isCheck
        };
        // Check Email
        let regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(regexEmail.test(formData._email)){
            setCheckEmail(true);
        }else{
            setCheckEmail(false);
        }
        
        // Error message Password
        formData._pass === '' ?  setErrorPass('Please do not leave the password field empty.') : setErrorPass('')

    }
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
                        <View style={styles.group}>
                            <Icon style={styles.icons} name="mail" color="#900" />
                            <TextInput 
                                onChangeText={(value) => setEmail(value)}
                                style={styles.form_control} 
                                placeholder="Email Address"/>
                        </View>
                        <Text style={{color: 'red', marginBottom: 20, marginTop: -15}}>
                                {!checkEmail ? 'Wrong email format!' : ''}
                        </Text>
                        <View style={styles.group}>
                            <TouchableOpacity style={styles.toggle} onPress={togglePasswordVisibility}>
                                <Icon
                                style={styles.togglePass} 
                                name={isPasswordVisible ? 'eye' : 'eyeo'}
                                size={20}
                                />
                            </TouchableOpacity>   

                            <Icon style={styles.icons} name="lock" color="#900" />

                            <TextInput
                                onChangeText={(value) => setPass(value)}
                                secureTextEntry={!isPasswordVisible} 
                                style={styles.form_control} 
                                placeholder="Password" />
                            
                        </View>

                        <View style={[styles.group, {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 0, marginLeft: 0}]}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}}>
                                <CheckBox
                                     style={[styles.checkbox, ]}
                                    disabled={false}
                                    value={true}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text>Save Password</Text>
                            </View>
                            <View>
                                
                               <TouchableOpacity><Text style={styles.link}>Forgot Password</Text></TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity 
                            onPress={() => onSubmit()}
                            style={styles.btn}>
                            <Text style={{color: '#ffffff'}}> Login</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>Your email: {email}</Text>
                    <Text>Your password: {pass}</Text>
                   
                </View>
            </SafeAreaView>
        </>
    )
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#AA6FA1',
        paddingHorizontal: 20,
        paddingVertical: 8,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        color: '#fff'
    },
    checkbox: {
        marginRight: 0,
        marginLeft: 0,
        ...Platform.select({
            ios: {
                transform: [{ scaleX: 0.8 }, { scaleY: 0.8}]
            }
        }),
    },
    toggle: {
        position: "absolute",
        right: 6,
        zIndex: 3,
        top: 12,
        ...Platform.select({
            ios: {
              top: 0,
            },
            android: {},
          }),
    },
    togglePass: {
       
    },
    group: {
        position: "relative",
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#A6A6A6',
        marginBottom: 20
    },
    form_control: {
        paddingLeft: 8,
        paddingBottom: 8,
        ...Platform.select({
            ios: {
              // iOS-specific styles here
              paddingBottom: 6,
            },
            android: {
                paddingBottom: 3,
            },
          }),
    },
    icons: {
        position: 'absolute',
        bottom: 6,
        left: 0,
        zIndex: 2,
        fontSize: 24,
        color: '#AA6FA1'
    },
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
    login_form: {},
    
   
});

export default LoginScreen;