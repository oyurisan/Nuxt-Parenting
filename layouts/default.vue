<template>
  <div>
    <div class="tham tham-e-squeeze tham-w-6">
      <div class="tham-box">
        <div class="tham-inner" />
      </div>
    </div>

    <div class="dropdown">
      <div>Menu</div>
      <div class="menu">
        <div>Item1</div>
        <div>Item2</div>
        <div>Item3</div>
      </div>
    </div>

    <Nav />
    <Nuxt />
  </div>
</template>


<script>
import Nav from '../components/Nav'
export default {
  components: {
    Nav,
  },

  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style>
.dropdown {
  position: relative;
}

.menu {
  position: absolute;
  visibility: hidden;
}

.dropdown:hover .menu {
  visibility: visible;
}


</style>