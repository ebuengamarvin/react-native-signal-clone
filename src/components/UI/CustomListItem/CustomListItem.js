import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

const CustomListItem = ({id, chatName, enterChat}) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    setChatMessages([
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
  }, []);

  return (
    <ListItem onPress={() => enterChat(id, chatName)} bottomDivider>
      <Avatar
        rounded
        source={{
          uri:
            chatMessages[0]?.photoUrl ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHXi6kWCo1P3qJAuOnEAs6jWS1Dg1BqRkk8Q&usqp=CAU',
        }}
      />
      <ListItem.Content>
        <ListItem.Title>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages[0]?.name}: {chatMessages[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;
