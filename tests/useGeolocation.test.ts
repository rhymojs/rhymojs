import { useGeolocation as getGeolocation } from "../lib";

// milisecond format
beforeAll(() => jest.setTimeout(6 * 1000));

describe("getGeolocation", () => {
  it("properly returns data", async () => {
    const geolocation = await getGeolocation();

    expect(typeof geolocation).toBe("string");
  });

  it("returns an ip", async () => {
    const geolocation = await getGeolocation();

    // after researching in stackoverflow for 40 minutes, I can say this is the fastest and strictest way of validating ip's
    // feel free to replace the regex below if you found a better solution
    const IpRegex = new RegExp(
      "^(?:(25[0-5]|(?:2[0-4]|1[0-9]|[1-9]|)[0-9])(.(?!$)|$)){4}$"
    );

    expect(IpRegex.test(geolocation)).toEqual(true);
  });
});
