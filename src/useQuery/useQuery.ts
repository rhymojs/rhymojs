/* eslint-disable quotes */

import axios from "axios";

/**
 * Sends a request to a provided URL.
 */
async function useQuery<ReturnValue = unknown>(
  url: string
): Promise<ReturnValue> {
  // provide a regex to find if url is valid or not - even accepts localhost:port
  const urlRegex = new RegExp("/^(?:w+:)?//([^s.]+.S{2}|localhost[:?d]*)S*$/");

  if (urlRegex.test(url)) throw 'The property "url" is not a valid url.';

  const { data } = await axios.get(url);

  return data;
}

export default useQuery;
