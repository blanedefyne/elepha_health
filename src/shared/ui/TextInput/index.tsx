import {TextInputProps} from 'shared/ui/TextInput/types';
import { FC } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import * as React from 'react';

export const TextInput: FC<TextInputProps> = (props) => (
  <RNTextInput
    style={{
      width: '100%',
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      borderRadius: 15,
      fontFamily: 'OpenSans_400Regular',
      color: 'white',
      ...(props.style as object),
    }}
    placeholder={props.placeholder}
    placeholderTextColor="white"
    value={props.value}
    onChangeText={props.onChange}
    keyboardType={props.keyboardType}
    autoCapitalize={props.autoCapitalize}
    secureTextEntry={props.secureTextEntry}
  />
);

// export default TextInput;
