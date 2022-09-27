import React, { useState } from 'react';
import { StyleSheet, Button, View, TouchableOpacity, Text, Alert, Pressable } from 'react-native';
import SwipeButton from '../SwipeButton/SwipeButton'


import styles from './styles';

const ButtonGroup: React.FC = () => {
    const [toggleState, setToggleState] = useState(false);

    const handleToggle = (value) => {
        if (value) {
            onPress('Four')
        }
        setToggleState(value);
    }

    const title = 'Press me';
    const onPress = (name: string) => {
        Alert.alert(`Button ${name} pressed`)
    }

    return (
        <View style={styles.container}>

            <Pressable style={styles.buttonOne} onPress={() => onPress('One')}>
                <Text style={styles.textOne}>{title}</Text>
            </Pressable>

            <View style={styles.separator} />

            <TouchableOpacity
                style={styles.buttonTwo}
                onPress={() => onPress('Two')}
            >
                <Text style={styles.textTwo}>{title}</Text>
            </TouchableOpacity>

            <View style={styles.separator} />


            <TouchableOpacity
                style={styles.buttonThree}
                onPress={() => onPress('Three')}
            >
                <Text style={styles.textThree}>{title}</Text>
            </TouchableOpacity>

            <View style={styles.separator} />

            <SwipeButton onToggle={handleToggle} />


            <View style={styles.separator} />

        </View>
    )
}

export default ButtonGroup;