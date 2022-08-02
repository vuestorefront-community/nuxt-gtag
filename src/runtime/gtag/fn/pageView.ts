import { useRoute, useRuntimeConfig } from '#app';
import { joinURL } from 'ufo';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RouteLocationNormalized } from 'vue-router';
import { useNuxtApp } from '#imports';
import { isBrowser } from '../../utils/isBrowser';
import { getOptions } from '../../utils/getOptions';
import { event } from './event';
import {
  GtagEvents,
  PageViewParams,
  PageViewRouteParams,
} from '../../../types';

export const pageView = (
  param:
    | Partial<PageViewParams & PageViewRouteParams>
    | Partial<RouteLocationNormalized>
    | string,
) => {
  if (!isBrowser()) return;

  if (typeof param === 'string')
    event(GtagEvents.pageView, { pageLocation: param });

  if (typeof param === 'object' && (param.path || param.fullPath)) {
    const { pageViewUseFullPath, pageViewPrependBase } = getOptions();
    const route = useRoute();

    const base: string =
      useRuntimeConfig().public.baseURL || window.location.origin;
    const path: string = pageViewUseFullPath ? param.fullPath : param.path;

    const baseParams: PageViewParams = {
      ...(param.name && {
        pageTitle: `${
          route.meta.title || document.title || String(param.name)
        }`,
      }),
      pageLocation: pageViewPrependBase ? joinURL(base, path) : path,
    };

    if (!baseParams?.pageLocation)
      baseParams.pageLocation = window.location.href;

    if (!baseParams?.sendPageView) baseParams.sendPageView = true;

    event(GtagEvents.pageView, baseParams);
  }
};
