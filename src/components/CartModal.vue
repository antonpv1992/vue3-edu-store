<template>
  <div class="modal fade" id="cartModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="cartModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <CartModalHeader/>
        <div class="modal-body p-4">
          <CartProductList/>
          <CartBillingForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartModalHeader from "./CartModalHeader";
import CartProductList from "./CartPoductList";
import CartBillingForm from "./CartBillingForm";

export default {
    components: {
        CartModalHeader, CartProductList, CartBillingForm
    }
}
</script>

<style>

</style>
