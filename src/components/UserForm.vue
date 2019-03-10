<template>
    <div class="col-12">
        <div class="col-12">
            <div  v-if="errors.length" class="clo-12">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>

            </div>
            <form
                    @submit="submitForm"
                    novalidate
            >
                <div class="form-group"><label for="email">Email *</label>
                    <input
                            v-model="email"
                            type="email"
                            id="email"
                            name="email"
                            class="form-control">
                </div>
                <!-- /.form-group -->
                <div v-if="confEmail" class="form-group"><label for="confirmEmail">Confirm Email *</label>
                    <input
                            v-model="confirmEmail"
                            type="email"
                            name="confirmEmail"
                            id="confirmEmail"
                            class="form-control">
                    <!-- /.form-control --></div>
                <!-- /.form-group -->
                <div class="form-group"><label for="password">Password</label>
                    <input
                            v-model="password"
                            type="password"
                            name="password"
                            id="password"
                            class="form-control">
                    <!-- /.form-control --></div>
                <!-- /.form-group -->

                <button type="submit" class="btn btn-primary">Join</button>
            </form>
        </div>
    </div>
    <!-- /.col-12 -->
</template>

<script>

    export default {

        name: 'UserForm',
        props: {
          confEmail: Boolean,

        },
        data() {
            return {
                email: 'joe.appleton@solent.ac.uk',
                confirmEmail: 'joe.appleton@solent.ac.uk',
                password: 'password',
                errors: []
            }
        },

        methods: {
            submitForm: function (e) {
                e.preventDefault();
                this.errors = [];
                if (this.email && (this.confirmEmail === this.email || !this.confEmail) && this.password) {
                    this.$emit('form-submitted', {email: this.email, password: this.password} )
                    return true;
                }

                if (!this.email) {
                    this.errors.push('please enter a email');
                }

                if (this.email != this.confirmEmail && this.confEmail) {
                    this.errors.push('emails must match');
                }

                if(!this.password) {
                    this.errors.push('please enter a password');
                }


            }
        }
    };


</script>


<style scoped>

    h1 {
        font-size: 1.75rem;
    }

</style>
