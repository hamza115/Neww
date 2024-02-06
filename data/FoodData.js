const data = [
  // day 1 menu
  {
    key: '1',
    name: 'Daal-Channa',
    image: require('../assets/day-1main.jpg'),
    category: 'Desi Food',
    day_id: '1',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    menu: [
      {
        id: '1',
        name: 'Roti',
        quantity: '3',
      },
      {
        id: '2',
        name: 'Khamiri Roti',
        quantity: '3',
      },
    ],
  },

  {
    key: '9',
    name: 'Juice',
    image: require('../assets/juice.jpg'),
    category: 'Drink',
    day_id: '1',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    menu: [
      {
        id: '1',
        name: 'Apple Juice',
        quantity: '1',
      },
      {
        id: '2',
        name: 'Orange Juice',
        quantity: '1',
      },
    ],
  },

  {
    key: '10',
    name: 'Salad',
    image: require('../assets/salad.jpg'),
    category: 'Salad',
    day_id: '1',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },

  // day 2 menu
  {
    key: '2',
    name: 'Kari',
    image: require('../assets/kari.jpg'),
    category: 'Desi Food',
    day_id: '2',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    menu: [
      {
        id: '1',
        name: 'Roti',
        quantity: '3',
      },
      {
        id: '2',
        name: 'Khamiri Roti',
        quantity: '3',
      },
    ],
  },

  {
    key: '9',
    name: 'Juice',
    image: require('../assets/juice.jpg'),
    category: 'Drink',
    day_id: '2',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    menu: [
      {
        id: '1',
        name: 'Apple Juice',
        quantity: '1',
      },
      {
        id: '2',
        name: 'Orange Juice',
        quantity: '1',
      },
    ],
  },

  {
    key: '10',
    name: 'Salad',
    image: require('../assets/salad.jpg'),
    category: 'Salad',
    day_id: '2',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },

  // day 3 menu
  {
    key: '3',
    name: 'Sandwich',
    image: require('../assets/3.jpg'),
    category: 'Fast Food',
    day_id: '3',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    menu: [
      {
        id: '1',
        name: 'Roti',
        quantity: '3',
      },
      {
        id: '2',
        name: 'Khamiri Roti',
        quantity: '3',
      },
    ],
  },
  {
    key: '4',
    name: 'Salad',
    image: require('../assets/1.jpg'),
    category: 'Healthy',
    day_id: '4',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    menu: [
      {
        id: '1',
        name: 'Roti',
        quantity: '3',
      },
      {
        id: '2',
        name: 'Khamiri Roti',
        quantity: '3',
      },
    ],
  },
  {
    key: '5',
    name: 'Sushi',
    image: require('../assets/2.jpg'),
    category: 'Japanese',
    day_id: '5',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    menu: [
      {
        id: '1',
        name: 'Roti',
        quantity: '3',
      },
      {
        id: '2',
        name: 'Khamiri Roti',
        quantity: '3',
      },
    ],
  },
  {
    key: '6',
    name: 'Pasta',
    image: require('../assets/3.jpg'),
    category: 'Italian',
    day_id: '6',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    menu: [
      {
        id: '1',
        name: 'Roti',
        quantity: '3',
      },
      {
        id: '2',
        name: 'Khamiri Roti',
        quantity: '3',
      },
    ],
  },
  {
    key: '0',
    name: 'Ice-Cream',
    image: require('../assets/1.jpg'),
    category: 'Fast Food',
    day_id: '0',
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    menu: [
      {
        id: '1',
        name: 'Roti',
        quantity: '3',
      },
      {
        id: '2',
        name: 'Khamiri Roti',
        quantity: '3',
      },
    ],
  },
  // Add more food items as needed
];

export default data;
