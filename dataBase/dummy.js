const data = [
  {
    id: 1,
    restaurantName: 'Taraba Suya',
    location: 'Sabon Gari',
    ratings: 4.7,
    deliveryTime: '20-35',

    previewImage: require('../assets/images/chicken-suya-3.jpg'),
    foodMenus: [
      {
        id: 1,
        menuName: 'Roasted Chicken',
        price: '1500',

        otherImages: {
          image1: require('../assets/images/chicken-suya-3.jpg'),
          image2: require('../assets/images/chickensuya-1.jpg'),
          image3: require('../assets/images/chickensuya-2.jpg'),
        },
      },
      {
        id: 2,
        menuName: 'Tsire',
        price: '200',

        otherImages: {
          image1: require('../assets/images/tsire-suya-2.jpg'),
          image2: require('../assets/images/tsire-suya-3.jpg'),
          image3: require('../assets/images/tsire-suya-4.jpg'),
        },
      },
    ],
    contactDetails: {
      mobile: null,
    },
  },

  {
    id: 2,
    restaurantName: 'Amarya Restaurant',
    location: 'Sabon Gari',
    deliveryTime: '15-20',
    ratings: '4.3',
    previewImage: require('../assets/images/jollof-rice-2.jpg'),
    foodMenus: [
      {
        id: 1,
        menuName: 'Jollof Rice',
        price: '250',

        otherImages: {
          image1: require('../assets/images/jollof-rice-2.jpg'),
          image2: require('../assets/images/jollof-rice-3.jpg'),
          image3: require('../assets/images/jollof-rice-4.jpg'),
        },
      },
      {
        id: 2,
        menuName: 'Tuwon Semo',
        price: '200',

        previewImage: require('../assets/images/tuwo-semovita-1.jpg'),
        otherImages: {
          image1: require('../assets/images/tuwo-semovita-1.jpg'),
          image2: require('../assets/images/tuwon-semo_with_eguisi.jpg'),
        },
      },
    ],
    contactDetails: {
      mobile: null,
    },
  },

  {
    id: 3,
    restaurantName: 'Tasty Restaurant',
    location: 'Tudun Wada',
    deliveryTime: '20-30',
    ratings: 4.4,
    previewImage: require('../assets/images/jollof-rice-1.jpg'),
    foodMenus: [
      {
        id: 1,
        menuName: 'Jollof Rice',
        price: '250',

        otherImages: {
          image1: require('../assets/images/jollof-rice-2.jpg'),
          image2: require('../assets/images/jollof-rice-3.jpg'),
          image3: require('../assets/images/jollof-rice-4.jpg'),
        },
      },
      {
        id: 2,
        menuName: 'Tuwon Amala',
        price: '200',

        previewImage: require('../assets/images/amala_with_vegetable.jpg'),
        otherImages: {
          image1: require('../assets/images/amala_with_okra_and_stew.jpg'),
          image2: require('../assets/images/amalaokra.jpg'),
          image3: require('../assets/images/amala_with_kalkashi.jpg'),
        },
      },
    ],
    contactDetails: {
      mobile: null,
    },
  },

  {
    id: 4,
    restaurantName: 'Sereora Restaurant',
    location: 'Kinkinau',
    deliveryTime: '10-20',
    ratings: 4.6,
    previewImage: require('../assets/images/white-rice-3.jpg'),
    foodMenus: [
      {
        id: 1,
        menuName: 'white Rice',
        price: '300',

        otherImages: {
          image1: require('../assets/images/white-rice-1.jpg'),
          image2: require('../assets/images/white-rice-4.jpg'),
          image3: require('../assets/images/white-rice-3.jpg'),
        },
      },
      {
        id: 2,
        menuName: 'Tuwon Semo',
        price: '250',

        previewImage: require('../assets/images/tuwo-semovita-1.jpg'),
        otherImages: {
          image1: require('../assets/images/tuwo-semovita-1.jpg'),
          image2: require('../assets/images/tuwon-semo_with_eguisi.jpg'),
        },
      },
    ],
    contactDetails: {
      mobile: null,
    },
  },
];
export default data;
