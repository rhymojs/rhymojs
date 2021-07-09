import { useGeolocation as getGeolocation } from "../lib";

describe("getGeolocation", () => {
  it("properly returns data", async () => {
    const geolocation = await getGeolocation();

    expect(typeof geolocation).toBe("string");
  });

  it("returns an ip", async () => {
    const geolocation = await getGeolocation();
    const IpRegex = new RegExp("/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/");
    
    
    expect(IpRegex.test(geolocation)).toEqual(true);
  });
});
