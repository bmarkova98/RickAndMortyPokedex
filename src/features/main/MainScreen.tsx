import React from 'react';
import { View, Text } from 'react-native';
import { useGetCharactersQuery } from '../../api/rickAndMortyAPI';

export default function MainScreen() {
  const { data, error, isLoading } = useGetCharactersQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      {data.results.map((character) => (
        <Text key={character.id}>{character.name}</Text>
      ))}
    </View>
  );
}
