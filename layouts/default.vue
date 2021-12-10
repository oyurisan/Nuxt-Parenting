<template>
  <div>
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

</style>