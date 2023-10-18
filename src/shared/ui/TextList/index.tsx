import React, { FC } from 'react'
import { TextListProps } from './types'
import { Dimensions, StyleProp, View, ViewStyle } from 'react-native'
import { RegularText } from 'shared/ui/Text/RegularText'
import { CSSProp } from 'styled-components'

const windowWidth = Dimensions.get('window').width;

const ContainerText: CSSProp = {
  backgroundColor: 'transparent',
  borderRadius: 15,
  borderWidth: 1,
  borderColor: 'white',
  marginTop: 5,
  marginBottom: 5,
};

const personalDataText: CSSProp = {
  fontSize: 16,
  color: '#FFFFFF',
  fontFamily: 'OpenSans_400Regular',
  textAlign: 'left',
  paddingVertical: 5,
  marginHorizontal: 15,
  width: windowWidth * 0.8,
};

export const TextList: FC<TextListProps> = ({ items }) => {
  return <>
    {items.map((item, key) => (
        <View style={(ContainerText) as StyleProp<ViewStyle>} key={key}>
          <RegularText textStyles={(personalDataText) as StyleProp<ViewStyle>}>
            {item}
          </RegularText>
        </View>
    ))}
  </>
}