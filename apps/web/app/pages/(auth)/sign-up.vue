<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
</script>

<template>
  <SignUp sign-in-url="/sign-in" fallback-redirect-url="/" />
</template>