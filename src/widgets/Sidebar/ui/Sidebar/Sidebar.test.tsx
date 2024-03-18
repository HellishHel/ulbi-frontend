import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "widgets/Sidebar";
import { componentRender } from "shared/config/tests/componentRender/componentRender";

describe("Sidebar", () => {
  test("toBeInTheDocument", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    screen.debug();
  });

  test("toggle", () => {
    componentRender(<Sidebar />);

    const toggleBtn = screen.getByTestId("sidebar-toggle");

    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
