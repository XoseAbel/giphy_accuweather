import buildUrlParams, { UrlParams } from 'src/utils/buildUrlParams';
import { ApiError } from './throwErrors/ApiErrors';

const connectWithApi = async (
  url: string,
  methodSelected: string,
  params: UrlParams,
  signal?: AbortSignal
) => {
  const urlAdditionalParams = buildUrlParams(params);
  let finishedUrl = `${url}${urlAdditionalParams}`;
  try {
    const result = await fetch(finishedUrl, {
      method: methodSelected,
      signal: signal,
    });

    if (!result.ok) {
      throw new ApiError(result.status);
    }
    const resultJson = await result.json();
    return resultJson;
  } catch (e) {
    let error = e instanceof ApiError ? e : new ApiError(500);
    throw error;
  }
};

export { connectWithApi };
