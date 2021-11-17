const PRODUCTS = [
    {
        id: 1,
        name: 'Excalibur',
        price: 350,
        image: require('../assets/products/Aa.jpg'),
        description: 'A two-edged sword meant for only the worthy.Color: Silver. Size: 80 inches, 120 inches. There is no PROMOTION'
    },
    {
        id: 2,
        name: 'Opko Tie of David',
        price: 600,
        image: require('../assets/products/dd.jfif'),
        description: 'Used in killing giants. Color: Black and Brown. Size: 15 inches, 30 inches. There is no PROMOTION'
    },
    {
        id: 3,
        name: 'Yaa Asantewaa',
        price: 200,
        image: require('../assets/products/ff.jpg'),
        description: 'Used in winning wars. Color: Brown. Size: 70 inches, 100 inches. There is no PROMOTION'
    },
    {
        id: 4,
        name: 'Togbe Tsali Opko Tie',
        price: 450,
        image: require('../assets/products/yy.jpg'),
        description: 'Used in maiming birds. Color: Black, Green, Orange and Blue. Size: 24 inches, 30 inches. There is no PROMOTION'
    },
    {
        id: 5,
        name: 'Terminator',
        price: 350,
        image: require('../assets/products/bb.jpg'),
        description: 'Used for rescue missions. Color: Black. Size: 700 inches, 1000 inches. There is no PROMOTION'
    },
    {
        id: 6,
        name: 'Cain Mace',
        price: 500,
        image: require('../assets/products/mm.jpg'),
        description: 'Used for self defense against wild beast. Color: Silver. Size: 100 inches, 150 inches. There is no PROMOTION'
    },
    {
        id: 7,
        name: 'Skelewu Langalanga',
        price: 530,
        image: require('../assets/products/ww.jpg'),
        description: 'For long range fighting. Color: Silver and Black. Size: 200 inches, 300 inches. There is no PROMOTION'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

