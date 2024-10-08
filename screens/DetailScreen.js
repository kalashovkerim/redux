import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';

const DetailScreen = ({ route }) => {
    const { item } = route.params;
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const isFavorite = favorites.some(fav => fav.idDrink === item.idDrink);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFavorite(item));
        } else {
            dispatch(addFavorite(item));
        }
    };

    return (
        <View>
            <Text>{item.strDrink}</Text>
            <Text>{item.strInstructions}</Text>
            <Button
                title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                onPress={handleFavoriteToggle}
            />
        </View>
    );
};

export default DetailScreen;