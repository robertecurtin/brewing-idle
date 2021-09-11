module.exports = [
  [
    {
      title: 'Desk Jockey',
      text: 'Generates $2/second',
      generates: { cash: 2, beerExp: 0, businessExp: 0 },
      requirement: { cash: 0, beerExp: 0, businessExp: 0 },
    },
    {
      title: 'Middle Manager',
      text: 'Generates $4/second',
      generates: { cash: 4, beerExp: 0, businessExp: 1 },
      requirement: { cash: 20, beerExp: 0, businessExp: 0 },
    },
    {
      title: 'C-Suite',
      text: 'Generates $10/second',
      generates: { cash: 10, beerExp: 0, businessExp: 50 },
      requirement: { cash: 100, beerExp: 0, businessExp: 100 },
    },
  ],
  [
    {
      title: 'Bartender',
      text: 'Generates 1$/second and 1 brewing exp/second',
      generates: { cash: 1, beerExp: 1, businessExp: 0 },
      requirement: { cash: 0, beerExp: 0, businessExp: 0 },
    },
    {
      title: 'Bar owner',
      text: 'Generates 2$/second and 3 brewing exp/second',
      generates: { cash: 2, beerExp: 3, businessExp: 0 },
      requirement: { cash: 20, beerExp: 20, businessExp: 0 },
    }
  ]
];
