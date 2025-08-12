<script setup lang="ts">
import orgMiddleware from '~/middleware/auth/org';

definePageMeta({
  layout: 'dashboard',
  middleware: [orgMiddleware]
})
</script>

<template>
  <OrgManager />
</template>