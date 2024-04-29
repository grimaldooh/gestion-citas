import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { styles } from '../../themes/theme';

const TextInputModal = (props) => {
    return <RNTextInput style={styles.inputModal} {...props} />;
};

export default TextInputModal;