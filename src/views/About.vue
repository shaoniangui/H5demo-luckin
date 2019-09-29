<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import todo from '../api/todo'
export default {
  name: 'home',
  created() {
    this.getTodo()
  },
  methods: {
    async getTodo() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        //定义参数对象
        let params = {
          type: 'zc',
          todoId: 1
        }
        let res = await this.$api.todo.todo(params)
        console.log(res)

      } catch (e) {
        console.log('​catch -> e', e)
      }
    }
  }
}
</script>
