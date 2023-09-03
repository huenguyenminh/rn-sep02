import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeadingBlock from "../components/HeadingBlock";
const Category = () => {
    return(
        <>
            <View style={styles.container}>
                <View style={styles.cate_header}>
                    <HeadingBlock title="Category"></HeadingBlock>
                </View>
                <View style={styles.cate_body}>
                    <View style={styles.cate_item}>
                        <Image style={styles.cate_img} source={require('../../assets/images/cate-1.jpg')}/>
                    </View>
                    <View style={styles.cate_item}>
                        <Image style={styles.cate_img} source={require('../../assets/images/cate-2.jpg')}/>
                    </View>
                    <View style={styles.cate_item}>
                        <Image style={styles.cate_img} source={require('../../assets/images/cate-3.jpg')}/>
                    </View>
                    <View style={styles.cate_item}>
                        <Image style={styles.cate_img} source={require('../../assets/images/cate-4.jpg')}/>
                    </View>
                </View>
               
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'white',
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    cate_header : {
        width: '100%',
        paddingBottom: 20,
    },
    cate_body : {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    cate_item: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#AA6FA1',
        width: 80,
        height: 80,
        padding: 5,
    },
    cate_img: {
        borderRadius: 5,
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
    }
});

export default Category;