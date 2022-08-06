import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%'
    },
    loginButton: {
        borderRadius: 50,
        width: '19%',
        borderWidth: .5,
        alignItems: 'center',
        marginTop: '2%'
    }
})

export default styles;