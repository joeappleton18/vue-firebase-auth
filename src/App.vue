<template>
  <div class="container">
    <div v-if="!loading" class="row">
      <div class="col-12">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/join" class="nav-link">Join</router-link>
          </li>
          <li v-if="!user" class="nav-item">
            <router-link to="/sign-in" class="nav-link">Sign In</router-link>
          </li>

          <li v-if="user" class="nav-item">
            <a @click="signOut" class="nav-link" href="#">Sign Out ({{user.email}})</a>
          </li>
          <li v-if="user" class="nav-item">
            <router-link to="/dash" class="nav-link">Dash</router-link>
          </li>
        </ul>
      </div>
      <!-- /.col-12 -->
    </div>
    <!-- /.row -->
    <div class="row">
      <router-view/>
    </div>

    <!-- /.col-12 -->
  </div>
  <!-- /.row -->
</template>

<script>
import AuthStore from "./stores/AuthStore";
import { fb } from "./config/FireBase";

export default {
  data() {
    return {
      user: "",
      loading: true
    };
  },
  mounted: function() {
    this.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        AuthStore.setAuthorisedAction(user);
        this.$router.push("/dash");
      } else {
        AuthStore.clearAuthorisedAction();
      }
      this.user = AuthStore.state.user;
      this.loading = false;
    });
  },

  methods: {
    signOut: function() {
      fb.auth()
        .signOut()
        .then(r => {
          this.$router.push("/sign-in");
        });
    }
  }
};
</script>



