import useQuery from "../useQuery";

interface Geolocation {
  ip: string;
}

const useGeolocation = async (): Promise<string> => {
  const { ip }: Geolocation = await useQuery(
    "https://api.ipify.org/?format=json"
  );

  return ip;
};

export default useGeolocation;
