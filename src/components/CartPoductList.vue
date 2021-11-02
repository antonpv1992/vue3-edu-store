<template>
    <table class="table cart-table">
        <CartProductHeader/>
        <tbody>
            <CartProductItem v-for="(product, index) in productsItems"
                :key="product.id"
                :id="product.id"
                :index="index"
                :title="product.title"
                :quantity="product.count"
                :price="product.price"
                :image="product.image"
                :alt="product.alt"
                @plusItem="plus($event)"
                @minusItem="minus($event)"
            />
        </tbody>
        <CartProductFooter/>
    </table>
</template>

<script>
import CartProductItem from "./CartProductItem";
import CartProductHeader from "./CartProductHeader";
import CartProductFooter from "./CartProductFooter";
export default {
    components: {
        CartProductItem, CartProductHeader, CartProductFooter
    },
    methods: {
        plus(index) {
            let currentProduct = this.$root.cartProducts[index];
            currentProduct.count++;
            this.$root.cartProducts[index].splice(index, 1, currentProduct)
        },
        minus(index) {
            let currentProduct = this.$root.cartProducts[index];
            if(--currentProduct.count <= 0){
                currentProduct.count = 0;
            } else {
                currentProduct.count--;
            }
            this.$root.cartProducts[index].splice(index, 1, currentProduct
            )
        }
    },
    computed: {
        productsItems(){
            return this.$root.cartProducts;
        }
    }
}

</script>

<style>

</style>