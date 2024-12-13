import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

   
    const formatTimeWithAMPM = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const hourIn12Format = hours % 12 || 12; 
        const formattedTime = `${hourIn12Format}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} ${ampm}`;
        return formattedTime;
    };

    return (
        <View style={styles.clockContainer}>
            <Text style={styles.clockText}>{formatTimeWithAMPM(currentTime)}</Text>
        </View>
    );
};

export default Clock;
