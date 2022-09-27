import { StyleSheet } from 'react-native';

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 45;
const BUTTON_PADDING = 10;

const styles = StyleSheet.create({
    swipeCont: {
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        backgroundColor: '#303030',
        borderRadius: 7,
        padding: BUTTON_PADDING,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#fff'
    },
    lightSwipeCont: {
        backgroundColor: '#fff',
        borderColor: '#303030',
    },
    colorWave: {
        position: 'absolute',
        left: 0,
        height: BUTTON_HEIGHT,
        borderRadius: 7,
    },
    swipeable: {
        position: 'absolute',
        left: 0,
        height: BUTTON_HEIGHT,
        width: BUTTON_HEIGHT,
        borderRadius: 7,
        zIndex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    swipeText: {
        alignSelf: 'center',
        fontSize: 16,
        zIndex: 2,
        color: '#6EB1F7',
    },
});

export default styles;