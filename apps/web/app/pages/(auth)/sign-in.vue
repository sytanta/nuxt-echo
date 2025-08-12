<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <SignIn sign-up-url="/sign-up" fallback-redirect-url="/" />
</template>