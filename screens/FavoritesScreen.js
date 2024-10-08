import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
    const favorites = useSelector(state => state.favorites);

    return (
        <View>
            <FlatList
                data={favorites}
                keyExtractor={item => item.idDrink}
                renderItem={({ item }) => <Text>{item.strDrink}</Text>}
            />
        </View>
    );
};

export default FavoritesScreen;