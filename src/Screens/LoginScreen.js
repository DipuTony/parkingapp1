import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // Send login request to server
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Username'
                onChangeText={text => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password}
            />
            <Button
                title='Login'
                onPress={handleSubmit}
            />
            <Text>Don't have an account? <Text style={styles.link}>Sign up</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10
    },
    link: {
        color: 'blue'
    }
});

export default LoginScreen;