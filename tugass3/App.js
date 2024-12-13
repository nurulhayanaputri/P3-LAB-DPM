import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TimeScreen from './src/screens/timescreen';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TimeScreen />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;