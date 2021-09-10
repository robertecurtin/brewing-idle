module.exports = [
  {
    name: 'Get a raise',
    text: 'Doubles cash gained',
    function: 'multiplyCashGain',
    value: 2,
    costs: { cash: 0, beer: 5 }
  },
  {
    name: 'Get six-packs',
    text: 'Multiplies beer gained by 6',
    function: 'multiplyBeerGain',
    value: 6,
    costs: { cash: 1, beer: 6 }
  }
];
