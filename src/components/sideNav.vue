<template>
  <div class="side">
  {{side}}
    <ul>
      <li><router-link to="/foo">Go to Foo</router-link></li>
      <li><router-link to="/hello">Go to Hello</router-link></li>
      <li><router-link to="/helloRouter">Go to HelloRouter</router-link></li>
      <li><router-link to="/user/foo">/user/foo</router-link></li>
      <li><router-link to="/user/bar">/user/bar</router-link></li>
      <li><router-link :to="{name:'userName', params: {id: 'bar'}}">/userName/bar(命名路由)</router-link></li>
      <li><router-link to="/userChild/bar">/userChild/bar</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'side',
  data () {
    return {
      side: 'side'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side{
  float: left;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  clear: both;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
