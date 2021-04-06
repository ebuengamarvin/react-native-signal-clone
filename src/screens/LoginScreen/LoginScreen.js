import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authUser, setAuthUser] = useState(false);

  useEffect(() => {
    authUser && navigation.replace('Home');
  }, [authUser]);

  const signIn = () => {
    setAuthUser(true);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Login',
      headerTitleAlign: 'center',
    });
  }, []);

  return (
    <View behavior="padding" style={styles.container}>
      <StatusBar style="dark" />
      <Image
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvNUzS1-hQWPrLE_zwgktFwDnRNdxr-E7XKtLYSXHOfRIPAGsgcFbCHkQ80fbMzEv1j0&usqp=CAU',
        }}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          typed="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          typed="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <Button onPress={signIn} containerStyle={styles.button} title="Login" />
      <Button
        onPress={() => navigation.navigate('Register')}
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />
      <View style={{height: 100}} />
    </View>
  );
};

export default LoginScreen;
