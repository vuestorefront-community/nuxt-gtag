import { nextTick, useNuxtApp } from '#imports';
// eslint-disable-next-line import/no-extraneous-dependencies
import { isFunction } from '@vue/shared';
import { createDataLayer } from './createDataLayer';
import { trackRoute } from './trackRoute';
import { Options, RouteLocationNormalized } from '../../module';

export const routerTrackConfig = async (options: Options) => {
  const isRouteExcluded = (
    route:
      | Partial<{
          path: string;
          name: string;
          [key: string]: unknown;
        }>
      | RouteLocationNormalized,
  ) => {
    const { pageViewExcludedRoutes } = options;
    const isExcludedRoute = (
      r:
        | Partial<{
            path: string;
            name: string;
            [key: string]: unknown;
          }>
        | string
        | RouteLocationNormalized,
      // eslint-disable-next-line consistent-return
    ) => {
      if (typeof r === 'string') {
        return (
          pageViewExcludedRoutes.includes(String(route.path)) ||
          pageViewExcludedRoutes.includes(String(route.name))
        );
      }
      if (typeof r === 'object') {
        return pageViewExcludedRoutes.find(
          (o) =>
            typeof o === 'object' &&
            (o.name === route.name || o.path === route.path),
        );
      }
    };

    return isExcludedRoute(route);
  };

  const router = useNuxtApp()?.$router;

  await router.isReady();

  await nextTick(() => {
    const { currentRoute } = router;

    createDataLayer(options);

    if (isRouteExcluded(currentRoute.value)) {
      return;
    }

    trackRoute(currentRoute.value, undefined, options);
  });

  router.afterEach(async (to, from) => {
    await nextTick(() => {
      if (isRouteExcluded(to)) {
        return;
      }

      if (isFunction(options.onBeforeTrack)) {
        options.onBeforeTrack(to, from);
      }

      trackRoute(to, from, options);

      if (isFunction(options.onAfterTrack)) {
        options.onAfterTrack(to, from);
      }
    });
  });
};
