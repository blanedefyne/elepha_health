import React, { FunctionComponent } from 'react';
import { Text as RNText } from 'react-native';

import {TextProps} from './types';

export const SmallText: FunctionComponent<TextProps> = (props) => {
  const styles = {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'OpenSans_400Regular',
    ...props.textStyles,
  };

  return (
    <RNText style={styles}>
      {props.children}
      {' '}
    </RNText>
  );
};

// export default SmallText;
