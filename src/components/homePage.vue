<template>
  <div class="homepage">
    <p>{{msg}}</p>
    <div>
      <input v-model="msg">
    </div>
    <div>{{tip}}</div>
    <span v-text="msg"></span>
    <button @click="sayHello()">sayHello</button>
    
    <div>
      <a :href="url" target="_blank">go to bing</a>
    </div>
    {{plus}}
    {{bool | capitalize}}
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  data () {
    return {
      msg: 10,
      url: 'http://cn.bing.com',
      bool: 0,
      tip: 'Please input text.'
    }
  },
  methods: {
    sayHello: function () {
      this.msg++
    },
    fireTyping: debounce(function () {
      this.tip = 'Please input text.'
    //   this.msg++
    }, 500)
  },
  watch: {
    msg: function () {
      this.tip = 'Typeing...'
      this.fireTyping()
    }
  },
  computed: {
    plus: function () {
      return this.msg + 10
    }
  },
  filters: {
    capitalize: function (value) {
      return value ? 'true' : 'false'
    }
  }
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
