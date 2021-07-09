/* eslint-disable quotes */

import { useQuery as query } from "../lib";

describe("useQuery", () => {
  it("properly fetches data", async () => {
    const data = await query<Record<string, never>>(
      "https://randomuser.me/api"
    );

    expect(typeof data).toBe("object");
  });
});
