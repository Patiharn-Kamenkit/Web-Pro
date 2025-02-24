<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
var name = 'Vue 3'
var age  = 20
</script>

<template>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button><br>
    {{ name }} <br>
    {{ age+4 }}
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
