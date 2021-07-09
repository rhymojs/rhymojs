import { useGeolocation as getGeolocation } from "../lib";

describe("getGeolocation", () => {
  it("properly returns data", async () => {
    const geolocation = await getGeolocation();

    expect(typeof geolocation).toBe("string");
  });

  it("returns an ip", async () => {
    const geolocation = await getGeolocation();

    expect(geolocation.length).toBeGreaterThanOrEqual(13);
  });
});
