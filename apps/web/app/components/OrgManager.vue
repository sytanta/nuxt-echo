<script setup lang="ts">
const { orgId } = useAuth()

watchEffect(() => {
  if (!orgId.value) navigateTo('/organization-select')
})
</script>

<template>
  <OrganizationSwitcher />
</template>