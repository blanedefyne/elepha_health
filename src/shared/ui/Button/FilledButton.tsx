import React, {FunctionComponent} from 'react';
import {ButtonProps} from 'shared/ui/Button/types';
import {Text as RNText, View} from 'react-native';
import styled from 'styled-components/native';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  width: 100%;
  border-radius: 20px;
`;

export const FilledButton: FunctionComponent<ButtonProps> = (props) => {
    const styles = {
        fontSize: 18,
        color: '#FFFFFF',
        fontFamily: 'OpenSans_400Regular',
        ...props.textStyles,
    };

    return (
        <View
            style={
                {
                    width: '100%',
                    height: 40,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '10%',
                    marginBottom: '10%',
                    backgroundColor: props.backgroundColor,
                    ...props?.viewStyle,
                }
            }
        >
            <ButtonView
                onPress={props.onPress}
                style={props.btnStyles}
            >
                <RNText style={styles}>{props.children}</RNText>
            </ButtonView>
        </View>
    );
};

// export default FilledButton;
