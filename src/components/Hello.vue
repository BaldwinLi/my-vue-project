<template>
  <div class="hello">
    <p>{{msg}}</p>
    <div>
      <input v-model="msg">
      </div>
    <span v-text="msg"></span>
    <button @click="sayHello()">sayHello</button>
    <div>
      <a :href="url" target="_blank">go to bing</a>
    </div>

    {{bool | capitalize}}
  </div>
</template>

<script>
import Component from 'vue-class-component'

@Component
export default class Hello extends window.Vue {
  name = 'hello';
  url = 'http://cn.bing.com';
  bool = 0;
  data () {
    return {msg: 'Welcome to Your Vue.js App'}
  }

  sayHello () {
    this.msg = 'click success!'
  }

  // capitalize (value) {
  //   return value ? 'true' : 'false'
  // }
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
