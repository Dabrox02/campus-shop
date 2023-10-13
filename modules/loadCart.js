import cartModel from "../api/models/cartModel.js";
import coatModel from "../api/models/coatModel.js"
import pantModel from "../api/models/pantModel.js"
import shirtModel from "../api/models/shirtModel.js"

export const loadCart = async (grid) => {
    let cart = await cartModel.getAll();
    let cartAll = await Promise.all(cart.map(async (e) => {
        let product = {}
        let productKey = Object.entries(e).filter((element) => element[0].includes("Id"))[0];
        if (productKey[0] === "pantalonId") { product = { ...await pantModel.getOne(Number(productKey[1])) } }
        if (productKey[0] === "abrigoId") { product = { ...await coatModel.getOne(Number(productKey[1])) } }
        if (productKey[0] === "camisetaId") { product = { ...await shirtModel.getOne(Number(productKey[1])) } }
        return { ...e, product };
    }))

    cartAll.forEach((cart) => {
        grid.insertAdjacentHTML("beforeend", /*html*/`
        <product-cart-component img="${cart.product.imagen}" nameProduct="${cart.product.nombre}" quantity="${cart.cantidad}" price="${cart.product.precio}" idBtn="${cart.id}"></product-cart-component>
        `)
    })
}

// {
//     "pantalonId": 1,
//     "cantidad": 2,
//     "id": 2,
//     "product": {
//       "nombre": "Pantalon En Dril Licrado Para Hombre.",
//       "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_731406-MCO42646277112_072020-F.webp",
//       "precio": 58900,
//       "id": 1
//     }
//   }