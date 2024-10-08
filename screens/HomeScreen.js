import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchCocktails = async () => {
        try {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
            setResults(response.data.drinks);
        } catch (error) {
            console.error(error);
        }
    };

    const getRandomCocktail = async () => {
        try {
            const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            setResults([response.data.drinks[0]]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Search for cocktails"
                value={query}
                onChangeText={setQuery}
            />
            <Button title="Search" onPress={searchCocktails} />
            <Button title="Random Cocktail" onPress={getRandomCocktail} />
            <FlatList
                data={results}
                keyExtractor={(item) => item.idDrink}
                renderItem={({ item }) => (
                    <Text onPress={() => navigation.navigate('Detail', { item })}>
                        {item.strDrink}
                    </Text>
                )}
            />

            <Button
                title="Go to Favorites"
                onPress={() => navigation.navigate('Favorites')}  // Navigate to "Favorites"
            />
        </View>
    );
};

export default HomeScreen;
