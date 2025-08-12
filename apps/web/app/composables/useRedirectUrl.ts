export const useRedirectUrl = () => {
  const route = useRoute();
  return computed(() => route.params["redirect_url"] ?? "/");
};
