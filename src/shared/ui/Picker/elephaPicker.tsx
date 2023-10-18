import Picker from "react-native-picker-select";

import {PickerI} from "shared/ui/Picker/types";
import React, {FC} from "react";

// <ElephaPicker pickerProps={[{label: 'key1', value: 'value1'},
//     {label: 'key2', value: 'value2'},
//     {label: 'key3', value: 'value3'}]} onChange={() => {
// }}/>

export const ElephaPicker: FC<PickerI> = (props) => (
    <Picker
        style={{
          viewContainer: {
            width: '100%',
            height: 40,
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10%',
            marginBottom: '10%',
            backgroundColor: props?.backgroundColor ? props?.backgroundColor : "rgba(168, 168, 166, 0.3)",
            ...props.viewContainerStyles,
          }, inputIOS: {
            fontSize: 18,
            color: '#FFFFFF',
            fontFamily: 'OpenSans_400Regular',
            ...props.textStyles,
          },
          inputAndroid: {
            fontSize: 18,
            color: '#FFFFFF',
            fontFamily: 'OpenSans_400Regular',
            ...props.textStyles,
          },
        }}
        placeholder={{}}
        items={props.pickerProps}
        onValueChange={props.onChange}
    />
);