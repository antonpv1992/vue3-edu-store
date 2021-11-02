<template>
    <form class="row g-3 mb-3">
        <h5>Billing details</h5>
        <div class="col-md-6">
            <label for="firstName" class="form-label">First Name</label>
            <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="First Name">
        </div>
        <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Last Name">
        </div>
        <div class="col-12">
            <label for="city" class="form-label">City</label>
            <input v-model="city" type="text" class="form-control" id="city" placeholder="City">
        </div>
        <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input v-model="address" type="text" class="form-control" id="address" placeholder="Address">
        </div>
        <div class="col-md-6">
            <label for="email" class="form-label">Email Address</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Email Address">
        </div>
        <div class="col-md-6">
            <label for="phone" class="form-label">Phone</label>
            <input v-model="phone" type="text" class="form-control" id="phone" placeholder="+38(099) 999-99-99">
        </div>
        <div class="col-12 d-flex justify-content-end">
            <button type="click" class="btn btn-success" @click="placeOrder">
            Place Order
            </button>
        </div>
    </form>
</template>

<script>
export default {
    data: () => ({
        firstName: '',
        lastName: '',
        city: '',
        address: '',
        email: '',
        phone: ''
    }),
    methods: {
        placeOrder() {
            console.log("Poducts: \n");
            this.$root.cartProducts.forEach(product => {
                console.log(
                    "\nid - " + product.id + 
                    "\nalt - " + product.alt +
                    "\ntitle - " + product.title +
                    "\ncategory - " + product.category +
                    "\nprice - " + product.price +
                    "\nimage - " + product.image +
                    "\ncount - " + product.count
                    );
            });
            console.log(
                "\ncustomer:\n" + 
                "\nfirstName - " + this.firstName +
                "\nlastName - " + this.lastName +
                "\ncity - " + this.city +
                "\naddress - " + this.address +
                "\nemail - " + this.email +
                "\nphone - " + this.phone
            );
            this.cleanFields();
            this.$root.cleanCart();
        },  
        cleanFields() {
            this.firstName = "";
            this.lastName = "";
            this.city = "";
            this.address = "";
            this.email = "";
            this.phone = "";
        }  
    }
}
</script>

<style>

</style>