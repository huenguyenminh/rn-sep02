import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

type HeadingBlockProps = {
    title: string
}

const HeadingBlock = ({title}:HeadingBlockProps) => {
    return(
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.h3}>
                        {title}
                    </Text>
                </View>
                <View>
                    <TouchableHighlight>
                        <Text style={styles.aLink}>
                            View all
                        </Text>
                    </TouchableHighlight>
                    
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    h3: {
        fontSize: 14,
        textTransform: "uppercase"
    },
    aLink: {
        fontSize: 14
    }
})

export default HeadingBlock;