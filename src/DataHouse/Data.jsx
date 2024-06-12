

export const Menu = [
    {
        id: 1,
        name: "Home",
        link : "home"
    },
    {
        id: 2,
        name: "Top Rated",
        link : "service"
    },
    {
        id: 3,
        name: "Kids Wear",
        link : "kids"
    },
    {
        id: 4,
        name: "Mens Wear",
        link : "mens"
    },
]


export const DropDown = [
    {
        name : "Trending Products",
        link: "trand"
    },
    {
        name : "Trending Products",
        link: "trand"
    },
    {
        name : "Best Selling",
        link: "best"
    },
]


export function herodata(image1, image2, image3, image4){
    const hero = [
        {
            id : 1,
            img: image1,
            title: "upto 50% off on all mens wear",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae minima totam placeat. Aliquam, voluptatem doloremque vero minus animi doloribus libero mollitia suscipit, fuga ipsa eius! Aliquid nam voluptates beatae neque ipsum ut illo. Ad, aperiam repellendus rerum iusto nihil quasi?"
        },
        {
            id : 2,
            img: image2,
            title: "70% off on all products sale",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae minima totam placeat. Aliquam, voluptatem doloremque vero minus animi doloribus libero mollitia suscipit, fuga ipsa eius! Aliquid nam voluptates beatae neque ipsum ut illo. Ad, aperiam repellendus rerum iusto nihil quasi?"
        },
        {
            id : 3,
            img: image3,
            title: "30% off on all woman's products",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae minima totam placeat. Aliquam, voluptatem doloremque vero minus animi doloribus libero mollitia suscipit, fuga ipsa eius! Aliquid nam voluptates beatae neque ipsum ut illo. Ad, aperiam repellendus rerum iusto nihil quasi?"
        },
        {
            id : 4,
            img: image4,
            title: "upto 60% off on all hot products",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae minima totam placeat. Aliquam, voluptatem doloremque vero minus animi doloribus libero mollitia suscipit, fuga ipsa eius! Aliquid nam voluptates beatae neque ipsum ut illo. Ad, aperiam repellendus rerum iusto nihil quasi?"
        },
        
    ]
    return hero;
}

export function productsData(Img1, Img2, Img3, Img4){
    const ProductsData = [
        {
          id: 1,
          img: Img1,
          title: "Women Ethnic",
          rating: 5.0,
          color: "white",
          aosDelay: "0",
        },
        {
          id: 2,
          img: Img2,
          title: "Women western",
          rating: 4.5,
          color: "Red",
          aosDelay: "200",
        },
        {
          id: 3,
          img: Img3,
          title: "Goggles",
          rating: 4.7,
          color: "brown",
          aosDelay: "400",
        },
        {
          id: 4,
          img: Img4,
          title: "Printed T-Shirt",
          rating: 4.4,
          color: "Yellow",
          aosDelay: "600",
        },
        {
          id: 5,
          img: Img2,
          title: "Fashin T-Shirt",
          rating: 4.5,
          color: "Pink",
          aosDelay: "800",
        },
      ];
    return ProductsData
}



export function TopProData(Img1, Img2, Img3){
    const ProductsData = [
        {
          id: 1,
          img: Img1,
          title: "Casual Wear",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 2,
          img: Img2,
          title: "Printed shirt",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: 3,
          img: Img3,
          title: "Women shirt",
          description:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ];
      return ProductsData;
}