// eslint-disable-next-line import/no-extraneous-dependencies
import { isFunction } from '@vue/shared';
import { pageView } from './fn/pageView';
import type { Options, RouteLocationNormalized } from '../../types';

export const trackRoute = (
  to: RouteLocationNormalized,
  from?: RouteLocationNormalized,
  options?: Options,
) => {
  const { pageViewTemplate, pageViewSkipSamePath } = options;

  if (pageViewSkipSamePath && to?.path === from?.path) {
    return;
  }

  let template = to;

  if (isFunction(pageViewTemplate)) {
    template = pageViewTemplate(to, from);
  }

  pageView(template);
};
