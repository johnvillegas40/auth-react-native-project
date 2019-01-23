import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, children}) =>{
    const {buttonStyle, textStyle} = styles;

    return(
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a4c639',
        marginLeft: 5,
        marginRight: 5,
        elevation: 10
    },
    textStyle: {
        alignSelf: 'center',
        color: '#a4c639',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}
export default Button;
