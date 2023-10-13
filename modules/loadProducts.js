import coatModel from "../api/models/coatModel.js"
import pantModel from "../api/models/pantModel.js"
import shirtModel from "../api/models/shirtModel.js"

export const loadCoats = async (grid) => {
    let coats = await coatModel.getAll();
    coats.forEach(c => {
        grid.insertAdjacentHTML("beforeend", /*html*/`
        <product-component img="${c.imagen}" price="${c.precio}" nameProduct="${c.nombre}" idBtn="${c.id}" category="abrigo"></product-component>
        `)
    });
}

export const loadShirts = async (grid) => {
    let shirts = await shirtModel.getAll();
    shirts.forEach(c => {
        grid.insertAdjacentHTML("beforeend", /*html*/`
        <product-component img="${c.imagen}" price="${c.precio}" nameProduct="${c.nombre}" idBtn="${c.id}" category="camiseta"></product-component>
        `)
    });
}


export const loadPants = async (grid) => {
    let pants = await pantModel.getAll();
    pants.forEach(c => {
        grid.insertAdjacentHTML("beforeend", /*html*/`
        <product-component img="${c.imagen}" price="${c.precio}" nameProduct="${c.nombre}" idBtn="${c.id}" category="pantalon"></product-component>
        `)
    });
}