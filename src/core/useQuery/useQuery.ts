/* eslint-disable quotes */

import axios from "axios";

async function useQuery<ReturnValue = unknown>(
  url: string
): Promise<ReturnValue> {
  if (!url.includes("https://") ?? !url.includes("http://"))
    throw 'The property "url" is not a valid url.';

  const { data } = await axios.get(url);

  return data;
}

export default useQuery;
