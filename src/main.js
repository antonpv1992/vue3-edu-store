import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";

const app = createApp({
    data: () => ({
        cartProducts: []
    }),
    methods: {
        addProductToCart(product) {
            this.cartProducts.push(product);
        },
        cleanCart() {
            this.cartProducts = [];
        }
    }
});
app.component('product-list', ProductList);
app.component('navbar', Navbar);
app.component('cart-modal', CartModal);
app.mount("#app");
