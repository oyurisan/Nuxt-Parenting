<template>
<div class="Nav-main">
  <div class="dropdown">
      <div class="tham tham-e-squeeze tham-w-6">
      <div class="tham-box">
        <div class="tham-inner" />
      </div>
    </div>
      <div class="menu">
        <div><nuxt-link to="/">Home</nuxt-link></div>
        <div><nuxt-link to="/SignUp">Sign Up</nuxt-link></div>
        <div><nuxt-link to="/profile">My Page</nuxt-link></div>
      </div>
    </div>
    <div>Hellow World!!!</div>
    <div>Navピースだよ!!!</div>

</div>
</template>
<script>
// import firebase from '~/plugins/firebase'

export default{

    methods: {
    },
}
</script>

<style>
.Nav-main {
    width: 100%;
    background-color: rgb(158, 116, 116);
    text-align: center;
    padding: 5%;
}



.dropdown {
  position: relative;
  width: 8%;
}

.menu {
  position: absolute;
  visibility: hidden;
}

.dropdown:hover .menu {
  visibility: visible;
}


</style>