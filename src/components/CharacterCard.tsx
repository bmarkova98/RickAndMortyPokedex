import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/favorites/favoritesSlice';

export default function CharacterCard({ character }) {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(character));
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(character.id));
  };

  return (
    <View>
      <Text>{character.name}</Text>
      <Button title="Add to Favorites" onPress={handleAddFavorite} />
      <Button title="Remove from Favorites" onPress={handleRemoveFavorite} />
    </View>
  );
}
