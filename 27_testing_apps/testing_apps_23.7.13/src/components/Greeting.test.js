import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("Tests hello world on the screen", () => {
    // Write tests using the three As
    // 1. Arrange
    // render the greeting component
    render(<Greeting />);
    // 2. Act
    // Peform the main action

    // 3. Assert
    // Look in virtual DOM and test if hello world exists
    const helloWorldElement = screen.getByText("Hello World", { exact: true }); //casing matter with exact: true
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Tests it's greet see you before when changeText state is false", () => {
    render(<Greeting />);
    const itsGreatToSeeYouElement = screen.getByText("It's great to see you!", {
      exact: true,
    });
    expect(itsGreatToSeeYouElement).toBeInTheDocument();
  });

  test("Tests if text changes when changeText state is true", () => {
    // 1. Arrange
    render(<Greeting />);
    // 2. Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // 3. Assert
    const changedTextElement = screen.getByText("Changed!");
    expect(changedTextElement).toBeInTheDocument();
  });

  test("Tests that paragraph text is not in DOM after click", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const itsGreatToSeeYouElement = screen.queryByText(
      "It's great to see you!",
      {
        exact: true,
      }
    );
    expect(itsGreatToSeeYouElement).toBeNull();
  });
});
