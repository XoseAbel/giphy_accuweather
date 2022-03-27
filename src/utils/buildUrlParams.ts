const buildUrlParams = (params: UrlParams) =>
  Object.entries(params)
    .map((param) => `&${param[0]}=${param[1]}`)
    .join('');

export default buildUrlParams;

export type UrlParams = { [key: string]: string | number };
