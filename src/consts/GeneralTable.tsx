//General imports
import React from 'react'
import {
    StyleSheet,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
interface GeneralTable {
    data: any;
    renderItem: (item:any) => JSX.Element;
    numColumns: number;
    horizontal?: boolean;
}
const GeneralTable = ({ data, renderItem, numColumns, horizontal = false }:GeneralTable) => {

    return (
        <FlatList
            horizontal={horizontal}
            numColumns={numColumns}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}

export default GeneralTable

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        backgroundColor: 'red',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,

    },
    title: {
        fontSize: 15,
    },
    description: {
        fontSize: 10,
    },
})