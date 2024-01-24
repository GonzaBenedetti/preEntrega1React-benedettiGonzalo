const products = [
    {
      id: "1",
      nombre: 'Laptop HP Pavilion',
      precio: 799.99,
      categoria: 'electronicos',
      imagen: '../public/img/laptop-hp-pavilion.jpg',
      stock: 20
    },
    {
      id: "2",
      nombre: 'Camiseta de Algodón',
      precio: 19.99,
      categoria: 'ropa',
      imagen: '../public/img/camiseta-algodon-hombre.jpg',
      stock: 50
    },
    {
      id: "3",
      nombre: 'Set de Utensilios de Cocina',
      precio: 49.99,
      categoria: 'hogar',
      imagen: '../public/img/set-de-utensilios-de-cocina.jpg',
      stock: 30
    },
    {
      id: "4",
      nombre: 'Aspiradora Robótica',
      precio: 299.99,
      categoria: 'electrodomesticos',
      imagen: '../public/img/aspiradora-robotica.jpg',
      stock: 15
    },
    {
      id: "5",
      nombre: 'Zapatillas Deportivas Nike',
      precio: 89.99,
      categoria: 'ropa',
      imagen: '../public/img/zapatillas-deportivas-nike.jpg',
      stock: 25
    },
    {
      id: "6",
      nombre: 'Juego de Construcción para Niños',
      precio: 39.99,
      categoria: 'juguetes',
      imagen: '../public/img/juego-de-construccion-1.jpg',
      stock: 40
    },
    {
      id: "7",
      nombre: 'Raqueta de Tenis Profesional',
      precio: 129.99,
      categoria: 'deportes',
      imagen: '../public/img/raqueta-de-tenis-profesional.jpg',
      stock: 10
    },
    {
      id: "8",
      nombre: 'Cámara Mirrorless Sony',
      precio: 899.99,
      categoria: 'electronicos',
      imagen: '../public/img/camara-mirrorless-sony.jpg',
      stock: 5
    },
    {
      id: "9",
      nombre: 'Juego de Sábanas de Lujo',
      precio: 69.99,
      categoria: 'hogar',
      imagen: '../public/img/juego-de-sabanas-de-lujo.jpg',
      stock: 30
    },
    {
      id: "10",
      nombre: 'Bolso de Cuero Elegante',
      precio: 129.99,
      categoria: 'moda',
      imagen: '../public/img/bolso-de-cuero-elegante.jpg',
      stock: 20
    },
    {
      id: "11",
      nombre: 'Reloj de Pulsera con Diamantes',
      precio: 499.99,
      categoria: 'accesorios',
      imagen: '../public/img/reloj-pulsera-con-diamantes.jpg',
      stock: 15
    },
    {
      id: "12",
      nombre: 'Bicicleta de Montaña Profesional',
      precio: 549.99,
      categoria: 'deportes',
      imagen: '../public/img/bicicleta-profesional-de-montaña.jpg',
      stock: 8
    }
  ];

// Retorna los productos
export const getProduct = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })
}

// Retorna un producto
export const getAProduct = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id);
            resolve(product)
        }, 2000)
    })
}

// Retorna categoria de productos
export const getProductCategory = (idCategory) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productsCategory = products.filter(prod => prod.categoria === idCategory);
            resolve(productsCategory)
        }, 2000)
    })
}