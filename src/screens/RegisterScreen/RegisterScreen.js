import {StatusBar} from 'expo-status-bar';
import React, {useLayoutEffect, useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import styles from './styles';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back to Login',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const registry = () => {};

  return (
    <View behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{marginBottom: 50}}>
        Create a Signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Confirm Password"
          secureTextEntry
          type="password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={registry}
        />
      </View>

      <Button
        raised
        onPress={registry}
        title="Register"
        containerStyle={styles.button}
      />
      <View style={{height: 100}} />
    </View>
  );
};

export default RegisterScreen;
