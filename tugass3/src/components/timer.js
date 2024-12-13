import React, { useState, useRef } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/styles';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null); 

    const startTimer = () => {
        console.log('Start button clicked'); 
        if (!isRunning) {
            console.log('Starting timer...');
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }
    };
    
    const stopTimer = () => {
        console.log('Stop button clicked'); 
        if (isRunning) {
            setIsRunning(false);
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    };
    
    const resetTimer = () => {
        stopTimer();
        setSeconds(0);
    };

    return (
        <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{seconds} sec</Text>
            <View style={styles.buttonContainer}>
                <Button title="Start" onPress={startTimer} disabled={isRunning} />
                <Button title="Stop" onPress={stopTimer} disabled={!isRunning} />
                <Button title="Reset" onPress={resetTimer} />
            </View>
        </View>
    );
};

export default Timer;
