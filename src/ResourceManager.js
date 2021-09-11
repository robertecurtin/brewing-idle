import { useState } from 'react';

export default (title, _value) => {
  const [value, setValue] = useState(_value);
  const [addFunctions, setAddFunctions] = useState([]);
  return {
    add: (v) => {
      if (typeof v != 'number') { return; }

      for (let f of addFunctions) {
        v = f(v);
      }
      setValue(value + v);
    },
    subtract: (v) => {
      if (typeof v != 'number') { return; }
      setValue(value - v);
    },
    getValue: () => {
      return value;
    },
    getIncrementValue: () => {
      let v = 1;
      for (let f of addFunctions) {
        v = f(v);
      }
      return v;
    },
    registerAddFunction: (f) => {
      addFunctions.push(f);
      setAddFunctions(addFunctions);
    }
  };
};
