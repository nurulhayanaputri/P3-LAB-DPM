import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Mendapatkan lebar layar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BAB6B6', // Warna abu-abu terang
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    clockContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D8D4D3',
        width: width * 0.8, // Lebar lingkaran sesuai layar
        height: width * 0.8,
        borderRadius: width * 0.4, // Membentuk lingkaran
        elevation: 5, // Shadow untuk Android
        shadowColor: '#000', // Shadow untuk iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 20,
    },
    clockText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
    },
    timerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginTop: 20,
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#000', // Tombol hitam
        borderRadius: 30, // Membuat tombol melingkar
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#FFF', // Teks putih
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;
