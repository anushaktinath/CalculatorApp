import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Button from '../common/Button';
import { handleNumberOperation, performCalculation } from '../actions/operationAction';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+'],
    ['c', 'ce']
];

class Calculator extends Component {

  constructor(props) {
       super(props);
       this.initialState = {
            oldInputValue: 0,
            inputValue: 0,
            selectedSymbol: null
        };
        this.state = this.initialState;
     }

     componentWillReceiveProps(nextProps) {
       this.setState({
           oldInputValue: nextProps.values.oldInputValue,
           inputValue: nextProps.values.inputValue,
           selectedSymbol: nextProps.values.selectedSymbol
       });
    }

  onButtonClick(input) {
    switch (typeof input) {
            case 'number':
                return this.handleNumberInput(input);
            default:
                return this.handleStringInput(input);
        }
  }

  handleNumberInput(num) {
    const symbol = this.state.selectedSymbol;
    const inputValue = this.state.inputValue;
    const oldInputVal = this.state.oldInputValue;
    this.props.handleNumberOperation(num, inputValue, oldInputVal, symbol);
    }

    handleStringInput(str) {
      switch (str) {
          case '/':
          case '*':
          case '+':
          case '-':
              this.props.performCalculation(this.state.inputValue, str, 0, str);
              break;
          case '=':
              const symbol = this.state.selectedSymbol;
              const inputValue = this.state.inputValue;
              const oldInputValue = this.state.oldInputValue;

              if (!symbol) {
                  return;
              }
              this.props.performCalculation(oldInputValue, symbol, inputValue, str);
              break;

          case 'ce':
              this.setState(this.initialState);
                  break;

          case 'c':
              this.setState({ inputValue: 0 });
              break;

      }
    }

  renderButtons() {
    const { rowStyle } = styles;
    const views = inputButtons.map((row, idx) => {
            const inputRow = row.map((buttonVal, columnIdx) => {
                return (<Button
                            value={buttonVal}
                            highlight={this.state.selectedSymbol === buttonVal}
                            onPress={this.onButtonClick.bind(this, buttonVal)}
                            key={'butt-' + columnIdx}
                         />);
            });
            return <View style={rowStyle} key={'row-' + idx}>{inputRow}</View>;
        });
        return views;
  }

  render() {
    const { containerStyle, upperViewStyle, lowerViewStyle, inputTextStyle } = styles;
    return (
      <View style={containerStyle}>
       <View style={upperViewStyle}>
         <Text style={inputTextStyle}>{this.state.inputValue}</Text>
       </View>
       <View style={lowerViewStyle}>
       {this.renderButtons()}
       </View>
      </View>
    );
  }
}

const styles = {
 containerStyle: {
   flex: 1
 },
 upperViewStyle: {
  flex: 2,
  backgroundColor: '#193441',
  justifyContent: 'center'
 },
 lowerViewStyle: {
   flex: 8,
   backgroundColor: '#3E606F'
 },
 rowStyle: {
   flex: 1,
   flexDirection: 'row'
 },
 inputTextStyle: {
   color: 'white',
   fontSize: 38,
   fontWeight: 'bold',
   textAlign: 'right',
   padding: 20
 }
};

const mapStateToProps = state => {
 return {
   values: state.values,
  };
};

export default connect(mapStateToProps,
  { handleNumberOperation, performCalculation })(Calculator);
