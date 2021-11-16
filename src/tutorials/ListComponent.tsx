import React from "react";
import { FlatList, Text, View } from "react-native";

// Hard Coded Data Structure
const covidData = [
    {
        id: 1,
        state: "Maharashtra",
        confirmed: 165241
    },

    {
        id: 2,
        state: "Delhi",
        confirmed: 125241
    },

    {
        id: 3,
        state: "Punjab",
        confirmed: 5241
    },

    {
        id: 4,
        state: "Himachal",
        confirmed: 1241
    },

    {
        id: 5,
        state: "Karnataka",
        confirmed: 55241
    },
];

const ListItem = ({data}) => (
    <View>
        <Text>{data.state}</Text>
        <Text>{data.confirmed}</Text>
    </View>
);

function ListViewPage(){

    const renderItem = ({item}) => <ListItem data={item}/>

    return (
        <View>
            <FlatList data = {covidData} renderItem={renderItem}></FlatList>
        </View>
    );
    
}

export default ListViewPage;