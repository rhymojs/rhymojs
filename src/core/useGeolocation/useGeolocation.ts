import useQuery from "../useQuery";

interface Geolocation {
  ip: string;
}

/**
 * Returns the IP address of the user.
 * @version v0.1.2
 * @see https://rhymojs.com/docs/useGeolocation/
 */
const useGeolocation = async (): Promise<string> => {
  const { ip }: Geolocation = await useQuery(
    "https://api.ipify.org/?format=json"
  );

  return ip;
};

export default useGeolocation;
