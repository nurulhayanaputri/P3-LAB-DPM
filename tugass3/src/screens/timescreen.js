import React from 'react';
import { View, Text } from 'react-native';
import Clock from '../components/clock';
import Timer from '../components/timer';
import styles from '../styles/styles';

const TimeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Time and Timer App</Text>
            <Clock />
            <Timer />
        </View>
    );
};

export default TimeScreen;
