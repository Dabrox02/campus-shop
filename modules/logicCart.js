import cartModel from "../api/models/cartModel.js";
import coatModel from "../api/models/coatModel.js"
import pantModel from "../api/models/pantModel.js"
import shirtModel from "../api/models/shirtModel.js"
import { swalAlert } from "../components/swal-alert/swal-alert-component.js"

const getElementClicked = async (btn) => {
    let idElement = Number(btn.dataset.add);
    let category = btn.dataset.category;
    if (category === "abrigo") return await coatModel.getOne(idElement);
    if (category === "pantalon") return await pantModel.getOne(idElement);
    if (category === "camiseta") return await shirtModel.getOne(idElement);
}

export const addElementClicked = async (btn) => {
    let category = `${btn.dataset.category}Id`;
    let idElement = Number(btn.dataset.add);
    let element = await getElementClicked(btn);
    if (element) {
        let cartAll = await cartModel.getAll();
        let elementPost = { [category]: idElement, cantidad: 1 };
        let elementPut = {};
        cartAll.forEach(async (c) => {
            let products = Object.entries(c).filter((element) => element[0].includes("Id"))[0];

            if (products[0] === category && products[1] === idElement) {
                c.cantidad = c.cantidad + 1;
                elementPut = { ...c };
            }
        });

        if (Object.entries(elementPut).length !== 0) {
            let res = await cartModel.putOne(elementPut);
            if (res.status) {
                swalAlert({ type: "error", title: "No se pudo agregar", time: "2000" });
            } else {
                swalAlert({ type: "success", title: "Agregado con exito", time: "2000" });
            }
        } else {
            let res = await cartModel.postOne(elementPost);
            if (res.status) {
                swalAlert({ type: "error", title: "No se pudo agregar", time: "2000" });
            } else {
                swalAlert({ type: "success", title: "Agregado con exito", time: "2000" });
            }
        }

    } else {
        swalAlert({ type: "error", title: "No se pudo agregar", time: "2000" });
    }
}


export const deleteAllCart = async () => {
    let cartAll = await cartModel.getAll();
    if (!cartAll.status) {
        await Promise.all(cartAll.forEach(async (c) => {
            await cartModel.delOne(c.id);
        }))
        window.location.reload();
    }
}

export const deleteOneCart = async (btn) => {
    let id = Number(btn.dataset.del);
    let res = await cartModel.delOne(id);
    if (res.status) {
        swalAlert({ type: "error", title: "No se pudo eliminar del carrito", time: "2000" });
    } else {
        swalAlert({ type: "success", title: "Eliminado del carrito", time: "2000" });
    }
    window.location.reload();
}

export const editQuantity = async (btn) => {
    let id = Number(btn.dataset.id);
    let newValor = Number(btn.value);
    let res = await cartModel.putOne({
        id, cantidad: newValor
    })
    if (!res.status) {
        swalAlert({ type: "success", title: "Nueva cantidad agregada", time: "2000" });
    } else {
        swalAlert({ type: "error", title: "No se pudo agregar la nueva cantidad", time: "2000" });
    }
    window.location.reload();
}

export const getTotalCart = async () => {
    let cart = await cartModel.getAll();
    if (!cart.status) {
        let cartAll = await Promise.all(cart.map(async (e) => {
            let product = {}
            let productKey = Object.entries(e).filter((element) => element[0].includes("Id"))[0];
            if (productKey[0] === "pantalonId") { product = { ...await pantModel.getOne(Number(productKey[1])) } }
            if (productKey[0] === "abrigoId") { product = { ...await coatModel.getOne(Number(productKey[1])) } }
            if (productKey[0] === "camisetaId") { product = { ...await shirtModel.getOne(Number(productKey[1])) } }
            return { ...e, product };
        }))
        let subtotal = cartAll.map((e) => Number(e.cantidad) * Number(e.product.precio));
        return subtotal.reduce((ac, cr) => ac + cr);
    }
    return 0;
}