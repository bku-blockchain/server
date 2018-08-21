console.log(JSON.stringify([
  { ordinal: 1, title: 'Question 1', type: 'Rating', options: [
    { ordinal: 1, name: 'Option 1.1' },
    { ordinal: 2, name: 'Option 1.2' },
    { ordinal: 3, name: 'Option 1.3' },
    { ordinal: 4, name: 'Option 1.4' },
    { ordinal: 5, name: 'Option 1.5' }
  ] },
  { ordinal: 2, title: 'Question 2', type: 'Polling', maxSelected: 3, options: [
    { ordinal: 1, name: 'Option 2.1' },
    { ordinal: 2, name: 'Option 2.2' },
    { ordinal: 3, name: 'Option 2.3' },
    { ordinal: 4, name: 'Option 2.4' },
    { ordinal: 5, name: 'Option 2.5' },
    { ordinal: 6, name: 'Option 2.6' }
  ] },
  { ordinal: 2, title: 'Question 3', type: 'Rating', options: [
    { ordinal: 1, name: 'Option 3.1' },
    { ordinal: 2, name: 'Option 3.2' },
    { ordinal: 3, name: 'Option 3.3' },
    { ordinal: 4, name: 'Option 3.4' }
  ] },
  { ordinal: 4, title: 'Question 4', type: 'Polling', maxSelected: 1, options: [
    { ordinal: 1, name: 'Option 4.1' },
    { ordinal: 2, name: 'Option 4.2' },
    { ordinal: 3, name: 'Option 4.3' }
  ] }
]));
