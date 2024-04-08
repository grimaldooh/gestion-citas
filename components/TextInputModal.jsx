import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { styles } from '../theme';

const TextInputModal = (props) => {
    return <RNTextInput style={styles.inputModal} {...props} />;
};

export default TextInputModal;