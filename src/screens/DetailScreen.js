import React from 'react';
import {View, Text, Button, Platform, TouchableOpacity, TextInput, ScrollView, SafeAreaView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import CustomButton from "../components/CustomButton";
import ArrowLeftIcon from "../components/Icons/ArrowLeftIcon";

const DetailScreen = ({ navigation, route }) => {
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
        <SafeAreaView>
            <View style={{paddingHorizontal: 16, paddingVertical: Platform.OS === 'android' ? 48 : 0, justifyContent: 'space-between', height: '100%'}}>
                <View style={{gap: 48}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
                        <TouchableOpacity style={{width: 24, height: 24, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.goBack()}>
                            <ArrowLeftIcon/>
                        </TouchableOpacity>
                        <Text style={{fontSize: 24, fontWeight: '600'}}>Details</Text>
                    </View>
                    <View style={{gap: 8}}>
                        <Text style={{fontSize: 22, fontWeight: '500'}}>{item.strDrink}</Text>
                        <Text style={{fontSize: 15, fontWeight: '400'}}>{item.strInstructions}</Text>
                    </View>
                </View>
                <CustomButton
                    label={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                    handleOnPress={handleFavoriteToggle}
                    type={"secondary"}
                />
            </View>
        </SafeAreaView>
    );
};


export default DetailScreen;