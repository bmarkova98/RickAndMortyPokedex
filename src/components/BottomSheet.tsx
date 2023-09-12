import React from 'react';
import { View, Text } from 'react-native';
import { useGetCharacterByIdQuery } from '../api/rickAndMortyAPI';

export default function BottomSheet({ characterId }) {
  const { data, error, isLoading } = useGetCharacterByIdQuery(characterId);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <Text>{data.name}</Text>
      <Text>{data.status}</Text>
      <Text>{data.species}</Text>
      <Text>{data.type}</Text>
      <Text>{data.gender}</Text>
    </View>
  );
}
