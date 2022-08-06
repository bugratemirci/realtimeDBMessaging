import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../styles'

export default function Button({ onPressHandler, buttonText }) {
    return (
        <TouchableOpacity onPress={onPressHandler} style={styles.loginButton}>
            <Text>{buttonText}</Text>
        </TouchableOpacity>
    )
}

