<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button type="success" @click="changeName">成功按钮</el-button>
   {{$store.state.number}}
  </div>
</template>

<script>

// import {mapState} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
   changeName () {
    this.$store.commit('increment',12)
   }
  },
  computed: ({
      getNum:state=>this.$store.state.number //理解为传入state对象，修改state.count属性
   })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
