<script setup>
const count = ref(0);
</script>

<template>
  <div>
    <button @click="count++">test</button>
    <p>Count is {{ count }}</p>
  </div>
</template>
