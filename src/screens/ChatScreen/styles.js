import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chats: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontWeight: '700',
  },
  rightIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80,
    marginRight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  textInput: {
    flex: 1,
    bottom: 0,
    height: 40,
    marginRight: 15,
    backgroundColor: '#ECECEC',
    padding: 10,
    color: 'grey',
    borderRadius: 30,
  },
  reciever: {
    padding: 15,
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: '80%',
    position: 'relative',
  },
  sender: {
    padding: 15,
    backgroundColor: '#2B68E6',
    alignSelf: 'flex-end',
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: '80%',
    position: 'relative',
  },
  recieverText: {
    color: '#8C8C8C',
    fontWeight: '500',
    marginBottom: 15,
  },
  senderText: {
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: 15,
  },
  senderName: {
    paddingRight: 10,
    fontSize: 10,
    color: '#FFFFFF',
  },
  recieverName: {
    paddingRight: 10,
    fontSize: 10,
    color: '#8C8C8C',
  },
  photo: {
    position: 'absolute',
    bottom: -15,
    right: -5,
  },
  profileReciever: {
    position: 'absolute',
    bottom: -15,
    left: -5,
  },
});

export default styles;
