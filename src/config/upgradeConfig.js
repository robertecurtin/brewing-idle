// todo: merge career upgrades with careerConfig to reduce duplication
module.exports = [
  [
    {
      name: 'Unlock Bartending',
      text: 'Working as a bartender earns $1/second and 1 Brewing EXP/second',
      function: 'unlockJob',
      value: 'Bartender',
      costs: { cash: 0, beerExp: 0, businessExp: 0 }
    },
    {
      name: 'Buy the bar',
      text: 'Owning a bar is hard work. $2/second & 3 brewing exp/second.',
      function: 'unlockJob',
      value: 'Bar owner',
      costs: { cash: 1, beerExp: 6, businessExp: 1 }
    }
  ],
  [
    {
      name: 'Work for the man',
      text: 'It pays the bills. $2/second',
      function: 'unlockJob',
      value: 'Desk Jockey',
      costs: { cash: 5, beerExp: 0, businessExp: 0 }
    },
    {
      name: 'Move to middle management',
      text: 'Take heat from above and below. $4/second',
      function: 'unlockJob',
      value: 'Middle Manager',
      costs: { cash: 20, beerExp: 0, businessExp: 0 }
    },
    {
      name: 'Become The Man',
      text: 'You run this place. $10/second & 50 business exp/second',
      function: 'unlockJob',
      value: 'C-Suite',
      costs: { cash: 100, beerExp: 0, businessExp: 100 }
    },
  ]
];
