import React from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { styles } from '../../themes/theme';

const TextInput = (props) => {
    return <RNTextInput style={styles.input} {...props} />;
};

export default TextInput;
