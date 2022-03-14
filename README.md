## Set Request Header through `.env` file

`env.js` lists required environment variable

```js
export const endpoint = process.env.END_POINT;
export const userAgent = process.env.USER_AGENT;
export const csrfToken = process.env.CSRF_TOKEN;
export const origin = process.env.ORIGIN;
export const referer = process.env.REFERER;
export const cookie = process.env.COOKIE;
export const authority = process.env.AUTHORITY;
```
