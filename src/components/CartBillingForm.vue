<template>
    <form class="row g-3 mb-3">
        <h5>Billing details</h5>
        <div class="col-md-6">
            <label for="firstName" class="form-label">First Name</label>
            <input v-model="firstName" type="text" class="form-control" id="firstName" placeholder="First Name">
            <span v-if="isFirstValid">Invalid!</span>
        </div>
        <div class="col-md-6">
            <label for="lastName" class="form-label">Last Name</label>
            <input v-model="lastName" type="text" class="form-control" id="lastName" placeholder="Last Name">
            <span v-if="isLastValid">Invalid!</span>
        </div>
        <div class="col-12">
            <label for="city" class="form-label">City</label>
            <input v-model="city" type="text" class="form-control" id="city" placeholder="City">
            <span v-if="isCityValid">Invalid!</span>
        </div>
        <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input v-model="address" type="text" class="form-control" id="address" placeholder="Address">
            <span v-if="isAddressValid">Invalid!</span>
        </div>
        <div class="col-md-6">
            <label for="email" class="form-label">Email Address</label>
            <input v-model="email" type="email" class="form-control" id="email" placeholder="Email Address">
            <span v-if="isEmailValid">Invalid!</span>
        </div>
        <div class="col-md-6">
            <label for="phone" class="form-label">Phone</label>
            <input v-model="phone" type="text" class="form-control" id="phone" placeholder="+38(099) 999-99-99">
            <span v-if="isPhoneValid">Invalid!</span>
        </div>
        <div class="col-12 d-flex justify-content-end">
            <button :disabled="submitBtn" type="click" class="btn btn-success" @click="placeOrder">
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
        phone: '',
        isFirstValid: false,
        isLastValid: false,
        isCityValid: false,
        isAddressValid: false,
        isEmailValid: false,
        isPhoneValid: false,
        submitBtn: true
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
    }, 
    watch: {
        firstName(newValue) {
            this.isFirstValid = true;
            if(newValue.length > 20) {
                this.isFirstValid = false;
            }
        },
        lastName(newValue) {
            this.isLastValid = true;
            if(newValue.length > 25) {
                this.isLastValid = false;
            }
        },
        city(newValue) {
            this.isCityValid = true;
            console.log(newValue.length);
            const regExp = /^[A-Za-z]+$/;
            if((!regExp.test(newValue)) || (newValue.length === 0) || (newValue.length > 50)) {
                this.isCityValid = false;
            }
        },
        address(newValue) {
            this.isAddressValid = true;
            const regExp = /^[A-Za-z.]+$/;
            if((!regExp.test(newValue)) || (newValue.length === 0) || (newValue.length > 60)) {
                this.isAddressValid = false;
            }
        },
        email(newValue) {
            this.isEmailValid = true;
            const regExp = /^[^\s@]+@[^\s@]+\. [^\s@]+$/;
            if((!regExp.test(newValue))) {
                this.isEmailValid = false;
            }
        },
        phone(newValue) {
            this.isPhoneValid = true;
            const regExp = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;
            if((!regExp.test(newValue)) || (newValue.length === 0) || (newValue.length > 18)) {
                this.isPhoneValid = false;
            }
        }
    },
    computed: {
        sabmitBtn() {
            this.submitBtn = (this.isFirstValid && this.isLastValid && this.isCityValid && this.isAddressValid
                    && this.isEmailValid && this.isPhoneValid)
        }
    }
}
</script>

<style>

</style>