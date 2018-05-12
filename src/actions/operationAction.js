import {
   OPERATION_SUCCESS,
   OPERATION
  } from './types';

 export function performCalculation(oldInputVal, symbol, inputVal, str) {
   return (dispatch) => {
     let dic = {};
     if (str === '=') {
       let finalValue;
       if (symbol === '+') {
        finalValue = oldInputVal + inputVal;
       }
       if (symbol === '-') {
        finalValue = oldInputVal - inputVal;
       }
       if (symbol === '/') {
        finalValue = oldInputVal / inputVal;
       }
       if (symbol === '*') {
        finalValue = oldInputVal * inputVal;
       }
        dic = {
         oldInputValue: 0,
         inputValue: finalValue,
         selectedSymbol: null
       };
     } else {
       dic = {
        oldInputValue: oldInputVal,
        inputValue: inputVal,
        selectedSymbol: symbol
      };
     }
   dispatch({ type: OPERATION_SUCCESS, payload: dic });
 };
 }

 export function handleNumberOperation(num, inputValue, oldInputVal, symbol) {
    return (dispatch) => {
      const input = (inputValue * 10) + num;
      const dic = {
       oldInputValue: oldInputVal,
       inputValue: input,
       selectedSymbol: symbol
     };
      dispatch({ type: OPERATION, payload: dic });
   };
 }
