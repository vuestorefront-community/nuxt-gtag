import { isBrowser } from './isBrowser';

export const logger = (text, shouldLog = true) => {
  if (!isBrowser() || process.env.NODE_ENV === 'production') {
    return;
  }

  if (!shouldLog) {
    return;
  }

  console.log(
    `%c [Nuxt-GTag] %c:`,
    `background:#4385F4; padding: 2px; border-radius: 0 2px 2px 0;  color: #fff;`,
    'background: transparent;',
    text,
  );
};
