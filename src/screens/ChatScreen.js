import { Text, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import styles from '../styles'
import { useUsersStore } from '../zustand/useStore'
import Chat from '../components/Chat'
import { GiftedChat } from 'react-native-gifted-chat'
import database from '@react-native-firebase/database';
export default function ChatScreen() {

    const currentUser = useUsersStore(state => state.currentUser);
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        database()
            .ref('/messages/')
            .on('value', snapshot => {
                const response = snapshot.val();
                setMessages(response);

            })

    }, [])

    const onSend = useCallback((messages = []) => {
        let message = {
            _id: messages[0]._id,
            createdAt: new Date().toUTCString(),
            text: messages[0].text,
            user: currentUser
        }
       
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        
        // database().ref('/messages/').push(message, err => console.log(err))


    }, [])
    return (

        <Chat messages={messages} onSend={onSend} setMessages={setMessages} />
    )
}

