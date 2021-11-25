import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [
        { name: '#1' },
        { name: '#2' },
        { name: '#3' },
        { name: '#4' },
        { name: '#5' },
        { name: '#6' },
    ];
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    }
});

export default ListScreen;