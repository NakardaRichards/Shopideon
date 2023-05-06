
const productsArray = [
    {
        id: "price_1N4ZhkIMwkG8b8peKVYV3LjH",
        title: "Coffee",
        price: 4.99,
        image: "/images/coffee.jpg"
      },
      {
        id: "price_1N4ZkcIMwkG8b8pejAS0AKHy",
        title: "Sunglasses",
        price: 9.99,
        image: "/images/sunglasses.jpg"
      },
      {
        id: "price_1N4ZliIMwkG8b8peGnTnRteB",
        title: "Camera",
        price: 39.99,
        image: "../images/camera.jpg"
      }
    ];
function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };