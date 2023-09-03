import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeadingBlock from "../components/HeadingBlock";
const ListProducts = () => {
    return(
        <>
            <View style={[styles.container, styles.product_list]}>
                <View style={styles.cate_header}>
                    <HeadingBlock title="Products"></HeadingBlock>
                </View>
                <View style={styles.cate_body}>
                    <View style={styles.cate_item}>
                        <Image style={styles.cate_img} source={require('../../assets/images/cate-1.jpg')}/>
                        <Text style={styles.product_title}>Product Title</Text>
                        <View style={styles.tag}>
                            <Text style={styles.sale}>-30%</Text>
                        </View>
                    </View>
                    <View style={styles.cate_item}>
                        <Image style={styles.cate_img} source={require('../../assets/images/cate-2.jpg')}/>
                        <Text style={styles.product_title}>Product Title</Text>
                    </View>
                    <View style={styles.cate_item}>
                        <Image style={styles.cate_img} source={require('../../assets/images/cate-3.jpg')}/>
                        <Text style={styles.product_title}>Product Title</Text>
                    </View>
                    <View style={styles.cate_item}>
                        <Image style={styles.cate_img} source={require('../../assets/images/cate-4.jpg')}/>
                        <Text style={styles.product_title}>Product Title</Text>
                    </View>
                </View>
               
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    product_list: {
        marginTop: 0
    },
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
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
        justifyContent: 'space-between',
        flexWrap: 'wrap'

    },
    cate_item: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#AA6FA1',
        padding: 5,
        width: '48.5%',
        marginBottom: 10,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    cate_img: {
        borderRadius: 5,
        maxWidth: '100%',
        maxHeight: '100%',
    },
    product_title: {
        paddingVertical: 10,
        color: '#AA6FA1',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    tag: {
        width: "auto",
        backgroundColor: 'rgba(238,34,34, 0.9)',
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 3,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        top: 6,
        right: 6
    },
    sale: {
        color: '#fff'
    }
});

export default ListProducts;