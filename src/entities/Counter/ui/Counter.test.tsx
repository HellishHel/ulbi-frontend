import { screen, waitFor } from "@testing-library/react";
import { componentRender } from "shared/config/tests/componentRender/componentRender";
import userEvent from "@testing-library/user-event";

import { Counter } from "./Counter";

describe("Counter", () => {
  test("toHaveTextContent", () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId("value-title")).toHaveTextContent("value = 10");
    screen.debug();
  });

  test("increment", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    userEvent.click(screen.getByTestId("increment-btn"));

    await waitFor(() =>
      expect(screen.getByTestId("value-title")).toHaveTextContent("value = 11"),
    );
  });

  test("decrement", async () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    userEvent.click(screen.getByTestId("decrement-btn"));

    await waitFor(() =>
      expect(screen.getByTestId("value-title")).toHaveTextContent("value = 9"),
    );
  });
});
