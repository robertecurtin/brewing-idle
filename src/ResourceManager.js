import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export default (title, _value) => {
  const [value, setValue] = useState(_value)
  const [addFunctions, setAddFunctions] = useState([])
  return {
    add: (v) => {
      for (let f of addFunctions) {
        v = f(v)
      }
      setValue(value + v)
    },
    subtract: (v) => {
      setValue(value - v)
    },
    getValue: () => {
      return value
    },
    getIncrementValue: () => {
      let v = 1
      for (let f of addFunctions) {
        v = f(v)
      }
      return v
    },
    registerAddFunction: (f) => {
      addFunctions.push(f)
      setAddFunctions(addFunctions)
    }
  }
}
