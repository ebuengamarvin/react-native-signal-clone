import React, {useLayoutEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import CustomListItem from '../../components/UI/CustomListItem/CustomListItem';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const [chats, setChats] = useState([
    {id: 1, chatName: 'YouTube Chat'},
    {id: 2, chatName: 'Facebook Chat'},
  ]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: '#FFFFFF'},
      headerTitleStyle: {color: '#000'},
      headerTintColor: '#000',
      headerLeft: () => (
        <View style={{marginLeft: 20}}>
          <Avatar
            rounded
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzofkUrR7K3E3z_OUonNfvW0Qhm5PDo0XKMkFVSVevN29PsWA8r_Y4cjdiQRZWJCXUmE&usqp=CAU',
            }}
          />
        </View>
      ),
      headerRight: () => (
        <View style={styles.rightIcon}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <SimpleLineIcons
              onPress={() => navigation.navigate('AddChat')}
              name="pencil"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  const enterChat = (id, chatName) => {
    navigation.navigate('Chat', {id, chatName});
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({id, chatName}) => (
          <CustomListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
