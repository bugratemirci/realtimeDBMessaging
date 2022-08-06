import { Text, View, TextInput } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function LoginInput({ text, onChangeHandler, isPassword }) {
    return (
        <View style={styles.loginView}>
            <Text>{text}</Text>
            <TextInput onChangeText={onChangeHandler} secureTextEntry={isPassword} style={{width: '50%'}}/>
        </View>
    )
}

