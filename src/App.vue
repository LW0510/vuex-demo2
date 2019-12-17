<template>
  <div id="app">
    <button @click="increment">增加</button>
    <button>减少</button>
    <button @click="incrementAsync">异步增加</button>
    <p>当前数字为：{{count}}</p>

    <!-- <router-view/> -->
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'App',
  data(){
    return {

    }
  },
  // 方式一:通过this.$store访问
  // computed:{
  //   count:function(){
  //     return this.$store.state.count;
  //   }
  // },
  computed:mapGetters([
    'count'
  ]),
  methods:mapActions([
    'increment',
    'incrementAsync'
  ])
}
</script>

<style>

</style>
