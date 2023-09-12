import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <View>
      {favorites.map((character) => (
        <Text key={character.id}>{character.name}</Text>
      ))}
    </View>
  );
}
