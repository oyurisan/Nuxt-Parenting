<template>
    <full-calendar :event="events" />
</template>
<script>
export default {
  async asyncData({ app, params }) {
    const data = await app.$axios.$get(`/api/events/${params.id}`)
    return {
      events: data
    }
  }
}
</script>