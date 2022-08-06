import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import { useUsersStore } from '../zustand/useStore';
import styles from '../styles';
import LoginInput from '../components/LoginInput';
import Button from '../components/Button';


export default function LoginScreen({ navigation }) {
    const users = useUsersStore(state => state.users);
    const setUsers = useUsersStore(state => state.setUsers);
    const currentUser = useUsersStore(state => state.currentUser);
    const setCurrentUser = useUsersStore(state => state.setCurrentUser);

    const usernameChangeHandler = (text) => {
        const newCurrentUser = { ...currentUser, username: text }
        setCurrentUser(newCurrentUser);
    }
    const passwordChangeHandler = (text) => {
        const newCurrentUser = { ...currentUser, password: text }
        setCurrentUser(newCurrentUser);
    }
    const buttonOnPress = () => {
        users.map(user => {
            if ((user.username == currentUser.username) && (user.password == currentUser.password)) {
                const newCurrentUser = { ...currentUser, _id: user._id, avatar: user.avatar }
                setCurrentUser(newCurrentUser);
                navigation.navigate('ChatScreen')
            }
        })

    }
    useEffect(() => {
        database()
            .ref('/users/')
            .once('value')
            .then(snapshot => {
                const response = snapshot.val();
                setUsers(response)
            });
    }, [])

    return (
        <View style={styles.container}>
            <LoginInput text={'Kullanıcı Adı:'} onChangeHandler={usernameChangeHandler} isPassword={false} />
            <LoginInput text={'Parola:'} onChangeHandler={passwordChangeHandler} isPassword={true} />
            <Button onPressHandler={buttonOnPress} buttonText={'Giriş Yap'} />
        </View>
    )
}

