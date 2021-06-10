import useGeolocation from "./useGeolocation";

describe("useGeolocation", () => {
  it("returns an ip", async () => {
    const geolocation = await useGeolocation();

    expect(geolocation.length).toEqual(14);
  });

  it("returns data", async () => {
    const geolocation = await useGeolocation();

    expect(geolocation).toBeTruthy();
  });
});
