import { loadCoats, loadShirts, loadPants } from "./modules/loadProducts.js"
import { loadCart } from "./modules/loadCart.js";
import { addElementClicked, deleteOneCart, deleteAllCart, editQuantity } from "./modules/logicCart.js";

const d = document;
const $ = (e) => d.querySelector(e);
const $a = (e) => d.querySelectorAll(e);

export const app = async () => {

    let path = window.location.pathname.split(".")[0];

    if (path === "/index" || path === "/") {
    }

    if (path === "/views/todos") {
        await loadCoats($("#grid-products-cards"));
        await loadPants($("#grid-products-cards"));
        await loadShirts($("#grid-products-cards"));
    }

    if (path === "/views/abrigos") {
        await loadCoats($("#grid-products-cards"));
    }

    if (path === "/views/camisetas") {
        await loadShirts($("#grid-products-cards"));
    }

    if (path === "/views/pantalones") {
        await loadPants($("#grid-products-cards"));
    }

    if (path === "/views/carrito") {
        await loadCart($("#grid-products-cards"));

        d.addEventListener("input", async (e) => {
            if (e.target.matches("input[data-id]")) {
                if (!isNaN(Number(e.target.value)) && Number(e.target.value) >= 1) {
                    await editQuantity(e.target);
                }
            }
        })
    }


    d.addEventListener("click", async (e) => {
        if (e.target.matches("button[data-add]")) {
            await addElementClicked(e.target);
        }

        if (e.target.matches("button[data-del")) {
            await deleteOneCart(e.target)
        }

        if (e.target.matches("button[data-all")) {
            await deleteAllCart();
        }
    })

}