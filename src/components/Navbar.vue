<template>
    <nav class="navbar navbar-light bg-white border-bottom sticky-top">
        <div class="container">
            <a class="navbar-brand mx-2" href="#">
                Vue Store
            </a>
            <div class="navbar-nav">
                <a class="nav-link p-0" href="#">
                    <CartButton/>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
import CartButton from "./CartButton";
export default {
    components: {
        CartButton
    }
}
</script>

<style>

</style>