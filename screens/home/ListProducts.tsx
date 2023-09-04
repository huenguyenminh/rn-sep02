import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import HeadingBlock from "../components/HeadingBlock";
const ListProducts = () => {
    const listProducts = [
        {id: 1, name : '1 Product Title'},
        {id: 2, name : '2 Product Title', sale: '-30%'},
        {id: 3, name : '3 Product Title', sale: '-30%'},
        {id: 4, name : '4 Product Title'},
        {id: 5, name : '5 Product Title'},
        {id: 6, name : '6 Product Title'},
        {id: 7, name : '7 Product Title'},
        {id: 8, name : '8 Product Title'},
        {id: 9, name : '9 Product Title'},
    ];

    // call api
    const [pe, setPe] = useState([]);
    const getApi = () => {
        return fetch('https://64f5d9812b07270f705dcaab.mockapi.io/pe')
            .then(response => response.json())
            .then((data) => setPe(data))
            .catch(err => console.log(err))
    }

    useState(() => {
        getApi();
    });


    return(
        <>
            <View style={[styles.container, styles.product_list]}>
                <View style={styles.cate_header}>
                    <HeadingBlock title="Products"></HeadingBlock>
                </View>
                <FlatList 
                    scrollEnabled={false} 
                    data={pe} 
                    numColumns= {2}
                    columnWrapperStyle={styles.row}
                    renderItem={({item}: any) =>(
                    <View style={styles.cate_item}>
                        <Image style={{width: '100%', height: 100}} source={{uri: item.avatar}}/>
                        <Text style={styles.product_title}>{item.name}</Text>
                       
                        {item.sale ? (
                            <View style={styles.tag}>
                            <Text style={styles.sale}>{item.sale}</Text>
                            </View>
                        ) : null}
                    </View>
                )}
                />
                
               
               
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
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