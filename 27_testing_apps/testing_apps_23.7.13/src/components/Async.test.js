import { screen, render } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("tests if posts are being rendered", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'p1', title: 'First Post'}]
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 2000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});
