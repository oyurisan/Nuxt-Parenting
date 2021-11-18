<template>
  <div class="memo-container">
    <div>
      <input type="date" name="Date" />
    </div>
    <div>
      <input type="time" name="Time" />
    </div>
    <div>
      <textarea
        cols="30"
        rows="5"
        style="border: 1px solid rgb(136, 80, 80)"
        name="Memo"
      />
    </div>

    <div>
      <button>保存</button>
      <button>消去</button>
    </div>
  </div>
</template>

<style>
.memo-container {
  text-align: center;
  margin: 5%;
}
</style>