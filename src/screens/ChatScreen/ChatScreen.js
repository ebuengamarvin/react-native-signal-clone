import {StatusBar} from 'expo-status-bar';
import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {AntDesign, FontAwesome, Ionicons} from '@expo/vector-icons';
import styles from './styles';

const ChatScreen = ({navigation, route}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [authUser, setAuthUser] = useState({id: 1, email: 'mrx.lccgroup.com'});

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chats',
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
      headerTitle: () => (
        <View style={styles.title}>
          <Avatar
            rounded
            source={{
              uri: messages[0]?.photoUrl,
            }}
          />
          <Text style={styles.chats}>{route.params.chatName}</Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.rightIcon}>
          <TouchableOpacity onPress={navigation.goBack}>
            <FontAwesome name="video-camera" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, messages]);

  useLayoutEffect(() => {
    setMessages([
      {
        id: 1,
        timestamp: 'April 07, 2021 1:49 AM',
        message: 'Hello Sam',
        name: 'Marvin Ebuenga',
        email: 'mrx.lccgroup.com',
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzofkUrR7K3E3z_OUonNfvW0Qhm5PDo0XKMkFVSVevN29PsWA8r_Y4cjdiQRZWJCXUmE&usqp=CAU',
      },
      {
        id: 2,
        timestamp: 'April 07, 2021 1:49 AM',
        message: 'Hello Marvs',
        name: 'Sammy Barbacena',
        email: 'itis9.ta.lccgroup.com',
        photoUrl:
          'https://static.wikia.nocookie.net/mobile-legends/images/6/63/Vale.png/revision/latest/scale-to-width-down/340?cb=20190615171250',
      },
      {
        id: 3,
        timestamp: 'April 07, 2021 1:49 AM',
        message: 'Welcome to Mobile Legends Hahaha',
        name: 'Marvin Ebuenga',
        email: 'mrx.lccgroup.com',
        photoUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzofkUrR7K3E3z_OUonNfvW0Qhm5PDo0XKMkFVSVevN29PsWA8r_Y4cjdiQRZWJCXUmE&usqp=CAU',
      },
    ]);
  }, [route]);

  const sendMessage = () => {
    Keyboard.dismiss();
    setInput('');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={90}>
        <>
          <ScrollView contentContainerStyle={{paddingTop: 15}}>
            {messages.map((data) =>
              data.email === authUser.email ? (
                <View key={data.id} style={styles.sender}>
                  <Avatar
                    position="absolute"
                    bottom={-15}
                    right={-5}
                    containerStyle={styles.photo}
                    rounded
                    size={30}
                    source={{uri: data.photoUrl}}
                  />
                  <Text style={styles.senderText}>{data.message}</Text>
                  <Text style={styles.senderName}>{data.name}</Text>
                </View>
              ) : (
                <View key={data.id} style={styles.reciever}>
                  <Avatar
                    position="absolute"
                    bottom={-15}
                    right={-5}
                    containerStyle={styles.photo}
                    rounded
                    size={30}
                    source={{uri: data.photoUrl}}
                  />
                  <Text style={styles.recieverText}>{data.message}</Text>
                  <Text style={styles.recieverName}>{data.name}</Text>
                </View>
              ),
            )}
          </ScrollView>
          <View style={styles.footer}>
            <TextInput
              placeholder="Signal Message"
              editable
              value={input}
              onChangeText={(text) => setInput(text)}
              onSubmitEditing={sendMessage}
              style={styles.textInput}
            />
            <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
              <Ionicons name="send" size={24} color="#2B68E6" />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
