export const loadExternalScript = async (
  url: string,
  options: Partial<{
    defer: boolean;
    preconnectOrigin: string;
  }> = {},
) => {
  return new Promise((resolve, reject) => {
    if (typeof document === 'undefined') {
      return;
    }

    const head = document.head || document.querySelectorAll('head')[0];
    const script = document.createElement('script');

    script.async = true;
    script.src = url;
    script.defer = options.defer;

    if (options.preconnectOrigin) {
      const link = document.createElement('link');

      link.href = options.preconnectOrigin;
      link.rel = 'preconnect';

      head.append(link);
    }

    head.append(script);

    script.addEventListener('load', resolve);
    script.addEventListener('onerror', reject);
  });
};
