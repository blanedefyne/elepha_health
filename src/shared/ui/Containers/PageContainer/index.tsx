import * as React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { FC, PropsWithChildren } from 'react'

export const PageContainer: FC<PropsWithChildren> = (props) => (
  <ImageBackground
    source={require('shared/ui/assets/bgs/back1.png')}
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ImageBackground
      source={require('shared/ui/assets/bgs/bg2.png')}
      style={{
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      imageStyle={{ opacity: 0.4 }}
    />
      {props.children}
  </ImageBackground>
);

// export default Index;
