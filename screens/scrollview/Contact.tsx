import React from "react";
import { Image, Text, View, StyleSheet, SafeAreaView, Dimensions, SectionList } from "react-native";

const { height } = Dimensions.get('window'); // Get the screen height

const Contact = () => {
    const headingHeightWrap = 120;
    const dataContact = [
        {
          title: 'A',
          data: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Anna' },
          ],
        },
        {
          title: 'B',
          data: [
            { id: 3, name: 'Bob' },
            { id: 4, name: 'Back' },
          ],
        },
        {
          title: 'C',
          data: [
            { id: 5, name: 'Charlie' },
            { id: 6, name: 'Catherine' },
          ],
        },
        {
          title: 'D',
          data: [
            { id: 7, name: 'David' },
            { id: 8, name: 'Diana' },
          ],
        },
        {
          title: 'E',
          data: [
            { id: 9, name: 'Edward' },
            { id: 10, name: 'Ella' },
          ],
        },
        {
          title: 'F',
          data: [
            { id: 11, name: 'Frank' },
            { id: 12, name: 'Fiona' },
          ],
        },
        // Continue adding more alphabet entries and names as needed
      ];
    return(
        <SafeAreaView>
            <View style={[styles.header]}>
                <View style={styles.container}>
                        <Text style={styles.heading}> Demo Section List</Text>
                </View>
            </View>
            <View style={{height: height - headingHeightWrap, paddingHorizontal: 20}}>
                <SectionList
                    sections={dataContact}
                    keyExtractor={(item, index) =>`basicListEntry-${item.id}`}
                    renderItem={({item}) => (
                        <View style={styles.contactInfo}>
                        <Image style={styles.img} source={{uri: 'https://t3.ftcdn.net/jpg/06/11/91/88/240_F_611918802_H1NQufUojOlkSZeraPui4YKilsj4PJVI.jpg'}} />
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                    )}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.header}>{title + ' Group'}</Text>
                    )}
                />  
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contactInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 16,
    },
    img: {
        width: 60,
        height: 60,
        marginRight: 20,
        borderRadius: 40,
    },
    name: {
        flex: 1,
        fontSize: 20
    },
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
    
});


export default Contact;