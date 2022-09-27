import React from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from '../../store/actions/loginActions';
import styles from './styles';
import { ILoginState } from '../../models/reducers/login';
import NavigationService from '../../navigation/NavigationService';

interface IState {
    loginReducer: ILoginState;
}

const Welcome: React.FC = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isValid, validate] = React.useState("false");

    const id = useSelector((state: IState) => state.loginReducer.id);
    const dispatch = useDispatch();
    const onLogin = () => dispatch(loginActions.requestLogin(username, password));
    const navigateToDeviceCheck = () => NavigationService.navigate('DeviceCheck');

    const validateUsername = (username) => {
        setUsername(username)
        if (username === null || username.trim() === "") {
            validate(true);
        } else {
            validate(false)
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.login}>Login Status : {id}</Text>
                <View style={styles.textInputArea}>
                    <TextInput
                        mode='outlined'
                        label="Username"
                        value={username}
                        onChangeText={username => validateUsername(username)}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.textInputArea}>
                    <TextInput
                        mode='outlined'
                        label="Password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        style={styles.textInput}
                    />
                </View>


                <Button icon="login" mode="outlined" onPress={onLogin} disabled={isValid}>
                    Login
                </Button>
                <Button
                    mode="text"
                    style={styles.forgot}
                    labelStyle={styles.labelStyle}
                    onPress={navigateToDeviceCheck}>
                    Device Checker
                </Button>
            </View>
        </View>
    );
};

export default Welcome;