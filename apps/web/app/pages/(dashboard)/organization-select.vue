<script setup lang="ts">
import authMiddleware from '~/middleware/auth/auth';

definePageMeta({
  layout: 'dashboard',
  middleware: [authMiddleware]
})
</script>

<template>
  <OrgSelect></OrgSelect>
</template>