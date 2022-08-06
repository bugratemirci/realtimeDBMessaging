import { Text, View } from 'react-native'
import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import styles from '../styles';
import { useUsersStore } from '../zustand/useStore'

export default function Chat({ messages, onSend }) {
    const currentUser = useUsersStore(state => state.currentUser);

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: currentUser._id,
                name: "Buğra",
                avatar: currentUser.avatar
            }}
            showUserAvatar={true}

        />
    )
}
