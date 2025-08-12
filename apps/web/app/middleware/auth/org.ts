import type {
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from "vue-router";
import { sendRedirect } from "h3";

async function orgMiddleware(
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric
) {
  if (import.meta.server) {
    const event = useRequestEvent();
    const searchParams =
      event && event?.path !== "/"
        ? new URLSearchParams({ redirect_url: event.path })
        : "";
    const searchString = searchParams ? `?${searchParams.toString()}` : "";

    const { userId, organizationId } = event?.context?.auth();

    if (event && !userId)
      await sendRedirect(event, `/sign-in${searchString}`, 303);
    if (event && !organizationId)
      await sendRedirect(event, `/organization-select${searchString}`, 303);
  } else {
    const searchParams =
      to.path !== "/" ? new URLSearchParams({ redirect_url: to.path }) : "";
    const searchString = searchParams ? `?${searchParams.toString()}` : "";

    const { isSignedIn, orgId } = useAuth();

    if (!isSignedIn)
      return navigateTo(`/sign-in${searchString}`, { redirectCode: 303 });
    if (!orgId)
      return navigateTo(`/organization-select${searchString}`, {
        redirectCode: 303,
      });
  }
}

export default orgMiddleware;
