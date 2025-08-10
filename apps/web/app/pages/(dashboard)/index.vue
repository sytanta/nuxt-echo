<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

const { data } = useLazyFetch('/api/hello')

watchEffect(() => console.log('111111111111', data.value))
</script>

<template>123</template>