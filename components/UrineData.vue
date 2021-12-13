<template>
  <div class="urineD">
    <div class="urineBar">URINE MEMO</div>
    <table class="data">
      <tr>
        <th>日付</th>
        <th>メモ</th>
        <th>{{ kara }}</th>
      </tr>
      <tr v-for="urineItem in this.getAllData.urine" :key="urineItem.id">
        <td>
          <div>{{ urineItem.urinedate }}</div>
        </td>
        <td>
          <div>{{ urineItem.urinememo }}</div>
        </td>
        <td>
          <div>
            <button @click="clear(urineItem.id)">
              <img
                :src="require(`~/assets/trush.png`)"
                width="25px"
                height="25px"
              />
            </button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      kara: '',
    }
  },

  computed: {
    user() {
      return this.$store.getters.user
    },
    ...mapGetters(['getAllData']),
  },

  methods: {
    clear(i) {
      this.$store.dispatch('deleteSelectData', i)
    },
  },
}
</script>

 <style lang="scss">
.urineD {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.data {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: antiquewhite;
  width: 90%;

  border-collapse: collapse;
  padding: 0;
  box-shadow: 0 0 10px -6px #00000073;
  tr {
    background-color: #fff;
  }
  th,
  td {
    padding: 20px 0;
    border-bottom: 1px solid #eee;
  }
  th {
    width: 20%;
    padding: 10px 0;
    font-size: 16px;
    padding: 15px;
    background-color: #f8cece;
    color: #632020;
  }
  tr {
    text-align: center;
    width: 20%;
    padding: 20px 0;
    background-color: #fff;
    color: #3a3a3a;
  }
  tr:hover {
    background-color: #fffcf607;
  }
}

.urineBar {
  color: #e49999;
  font-size: 150%;
  margin-bottom: -1%;
  font-weight: 700;
}
</style>