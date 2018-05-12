import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
 render() {
   const { buttonConatinerStyle, buttonTextStyle, buttonHighlightStyle } = styles;
   return (
     <TouchableOpacity
     style={[buttonConatinerStyle, this.props.highlight ? buttonHighlightStyle : null]}
     underlayColor="#193441"
     onPress={this.props.onPress}
     >
       <Text style={buttonTextStyle}>{this.props.value}</Text>
      </TouchableOpacity>
   );
 }
}

const styles = {
 buttonConatinerStyle: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   borderWidth: 0.5,
   borderColor: '#91AA9D'
 },
 buttonTextStyle: {
   fontSize: 20,
   fontWeight: 'bold',
   color: 'white'
 },
 buttonHighlightStyle: {
   backgroundColor: '#193441'
 }
};

export default Button;
