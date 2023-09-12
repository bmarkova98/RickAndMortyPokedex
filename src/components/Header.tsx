import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

export default function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Text>Rick and Morty Pokedex</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
