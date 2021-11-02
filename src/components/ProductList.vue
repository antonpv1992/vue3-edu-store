<template>
    <div class="card my-5 shadow">
        <div class="card-body">
            <div class="row">
                <product 
                    v-for="product in products"
                    :key="product.id"
                    :id="product.id"
                    :alt="product.alt"
                    :title="product.title"
                    :category="product.category"
                    :price=product.price
                    :image="product.image"
                    :is_available=product.is_available
                    @add-to-cart="addToCart(product)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Product from "./Product";
export default{
    components: { Product },
    data: () => ({
        products: []
    }),
    methods: {
        async fetchProducts() {
            try {
                const response = await fetch("http://localhost:3000/products");
                this.products = await response.json();
            } catch(e) {
                console.error(e.message);
            }
        },
        addToCart(product) {
            product.count = 1;
            this.$root.addProductToCart(product)
        }
    },
    mounted() {
        this.fetchProducts();
    }
}
</script>

<style>

</style>