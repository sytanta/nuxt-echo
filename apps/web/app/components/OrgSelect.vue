<script setup lang="ts">
const redirectUrl = useRedirectUrl()
const { organization, isLoaded } = useOrganization() 
</script>

<template>
  <div class="min-h-screen min-w-screen flex flex-col items-center justify-center">
    <Icon v-if="!isLoaded" name="svg-spinners:8-dots-rotate" size="20px" class="size-5" />
    <OrganizationList v-else-if="!organization" :after-create-organization-url="redirectUrl"
      :after-select-organization-url="redirectUrl" :hide-personal="true" :skip-invitation-screen="true" />
  </div>
</template>