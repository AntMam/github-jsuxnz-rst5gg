<script setup>
const count = ref(0);
const config = useRuntimeConfig();
const response = await $fetch('/auth/login', {
  method: 'POST',
  baseURL: config.public.API_BASE_URL,
  credentials: 'include',
  body: {
    email: config.EMAIL,
    password: config.PASSWORD,
  },
});
</script>

<template>
  <div>
    <button @click="count++">test</button>
    <p>Count is {{ count }}</p>
  </div>
</template>
