<template>
  <div>
    <div>
      <textarea
        v-model.trim="message"
        class="textarea"
        cols="30"
        rows="5"
        name="Memo"
        placeholder=" メモ"
        maxlength="500"
      />
      <p>{{ message.length }}/500 文字</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
}
</script>

<style>
.textarea {
  border: 1px solid rgb(136, 80, 80);
}
</style>