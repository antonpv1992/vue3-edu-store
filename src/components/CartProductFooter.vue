<template>
    <tfoot>
        <tr class="fw-bold px-4">
            <td class="text-end">
            Total:
            </td>
            <td class="text-center">{{ totalQuantity }}</td>
            <td class="text-end">{{`${ totalPrice }$`}}</td>
        </tr>
    </tfoot>
</template>

<script>
export default {
    computed: {
        totalQuantity(){
            return this.$root.cartProducts.reduce((sum, product) => {
                sum += product.count;
                return sum;
            }, 0);
        },
        totalPrice(){
             return this.$root.cartProducts.reduce((sum, product) => {
                sum += (product.price * product.count);
                return sum;
            }, 0);
        }
    }
}
</script>

<style>

</style>