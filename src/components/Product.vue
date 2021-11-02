<template>
    <div class="col-md-6 col-lg-4 py-3">
        <div class="card py-3">
            <img class="card-img-top" :src="image" :alt="alt">
            <div class="card-body">
                <h5 class="card-title">
                    {{ title }}
                </h5>
                <p class="card-subtitle mt-2 mb-3">
                    {{ category }}
                </p>
                <h5 class="fs-3 text-success">
                    {{ `${price} $` }}
                </h5>
                <p class="mt-3">
                    Stock:
                    <strong v-if="is_available" class="text-success">Available</strong>
                    <strong v-else class="text-danger">Sold out</strong>
                </p>
                <button
                    :disabled="!is_available"
                    :class="`btn btn-${is_available ? 'success' : 'danger'} w-100 shadow-none`"
                    @click="$emit('add-to-cart')">
                    Add to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        alt: String, 
        title: String, 
        category:String, 
        price:Number, 
        is_available:Boolean, 
        image:String
    },
    emits: [
        'add-to-cart'
    ],
    data: () => ({
        
    })
}
</script>

<style>

</style>