<script setup>
const count = ref(0);
const config = useRuntimeConfig();
const response = await $fetch('/auth/login', {
  method: 'POST',
  baseURL: config.public.API_BASE_URL,
  credentials: 'include',
  body: {
    username: 'kminchelle',
    password: '0lelplR',
  },
});
</script>

<template>
  <div>
    <button @click="count++">test</button>
    <p>Count is {{ count }}</p>
  </div>
</template>
