const productList = [
    {
      id: '123',
      title: "Blue Drum Set",
      description: 'good drums',
      brand: 'Yamaha',
      price: 599,
      image: 'https://www.yamaha.com/yamahavgn/PIM/Images/19027_12073_1_1200x1200_80813f268e73483818697e99937dbd59.jpg',
    },
    {
      id: '234',
      title: "Red Drum Set",
      description: 'good drums',
      brand: 'Yamaha',
      price: 599,
      image: 'https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg',
    },
  ];
  

export const fetchProducts =  () => new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(productList)
      } catch (error) {
        reject(error)
      }
    }, 1000);
  })
  
  
  
  
  