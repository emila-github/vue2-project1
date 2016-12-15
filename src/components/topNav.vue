<template>
  <div class="header">
    <img src="../assets/logo.png" width="50px;"  height="50px;" >{{header}}
    <ul>
      <li><router-link to="/">sideNav</router-link></li>
      <li><router-link to="/sideNav2">sideNav2</router-link></li>
      <li><a href="#" target="_blank">header</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      header: 'header'
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
