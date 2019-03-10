<template>
    <div class="col-12">
        <h1 class="text-center text-info">Join</h1>
        <UserForm :confEmail="true" @form-submitted="processUser"/>
        <ul v-if="errors">
            <li v-for="error in errors">{{error}}</li>
        </ul>


    </div>
</template>

<script>
    import '../components/UserForm'
    import UserForm from "../components/UserForm";

    export default {

        name: 'Join',
        components: {UserForm},
        data() {
            return {
                errors: []
            }

        },
        methods: {
            processUser: function (user) {
                this.firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then(r => {

                    })
                    .catch(e => {
                        this.errors.push(e.message)
                    });
            }
        }
    };


</script>


<style scoped>

    h1 {
        font-size: 1.75rem;
    }

</style>
