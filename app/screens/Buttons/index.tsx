import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import ButtonGroup from '../../components/ButtonGroup/ButtonGroup';

import * as loginActions from '../../store/actions/loginActions' // ' app/store/actions/loginActions';
import { ILoginState } from '../../models/reducers/login';
import styles from './styles';

interface IState {
  loginReducer: ILoginState;
}


const Buttons: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  const name = useSelector((state: IState) => state.loginReducer.username);

  const goBack = () => {

    onLogout()
  }

  return (
    <View style={styles.container}>
      <Text style={{ padding: 5 }}>
        {`Hey, ${name}`}
      </Text>
      <ButtonGroup />

      <Button icon="keyboard-backspace" mode="outlined" onPress={goBack}>
        Go Back
      </Button>
    </View>
  );
};

export default Buttons;