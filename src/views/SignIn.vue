<template>
    <div class="col-12">
        <h1>Sign In</h1>
        <UserForm @form-submitted="signIn"/>

    </div>
    <!-- /.col-12 -->
</template>

<script>

    import UserForm from  '../components/UserForm'

    export default  {

        name: 'SignIn',
        components: {
            UserForm
        },

        methods: {
            signIn(user) {
                this.firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                    .then(r =>  this.$router.push('/dash'))
                    .catch(e => alert(e.message))
                   
            }
        }

    }



</script>
