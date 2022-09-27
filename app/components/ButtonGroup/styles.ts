import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '90%'
    },
    separator: {
        marginVertical: 7,
        borderBottomColor: '#737373',
        // borderBottomWidth: StyleSheet.hairlineWidth,
    },

    // 1. Text button

    buttonOne: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        // backgroundColor: 'black',
    },
    textOne: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#6EB1F7',
    },

    buttonTwo: {
        alignItems: "center",
        backgroundColor: "#34424A",
        padding: 10,
        borderRadius: 7
    },

    textTwo: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#6EB1F7',
    },

    buttonThree: {
        alignItems: "center",
        backgroundColor: "#6EB1F7",
        padding: 10,
        borderRadius: 7
    },

    textThree: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

});

export default styles;