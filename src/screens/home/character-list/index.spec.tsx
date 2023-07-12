import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nextRouterMock from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

import { CharacterList } from "./index";

test("renders a spinner when loading", () => {
  const props = {
    isLoading: true,
    characters: [],
  };
  render(<CharacterList {...props} />);
  expect(screen.getByTestId("character-list-spinner")).toBeInTheDocument();
});

test("renders a list of characters", async () => {
  render(
    <CharacterList
      characters={[
        {
          id: "1",
          episode: [],
          gender: "male",
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          location: {
            id: "1",
            name: "Earth (Replacement Dimension)",
          },
          name: "Rick Sanchez",
          species: "Human",
          status: "Alive",
        },
        {
          id: "2",
          episode: [],
          gender: "male",
          image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          location: {
            id: "20",
            name: "Earth (Replacement Dimension)",
          },
          name: "Morty Smith",
          species: "Human",
          status: "Alive",
        },
      ]}
      isLoading={false}
    />,
    {
      wrapper: MemoryRouterProvider,
    }
  );
  const rickAnchorEl = screen.getByText("Rick Sanchez").closest("a");
  const mortyAnchorEl = screen.getByText("Morty Smith").closest("a");

  expect(rickAnchorEl).toHaveAttribute("href", "/character/1");
  expect(mortyAnchorEl).toHaveAttribute("href", "/character/2");

  // We can tell the compiler that anchor is not null
  // at this point `expect` would've already thrown an error if it was the case
  await userEvent.click(rickAnchorEl!);

  await waitFor(() => {
    expect(nextRouterMock).toMatchObject({
      asPath: "/character/1",
      pathname: "/character/1",
    });
  });

  await userEvent.click(mortyAnchorEl!);

  await waitFor(() => {
    expect(nextRouterMock).toMatchObject({
      asPath: "/character/2",
      pathname: "/character/2",
    });
  });
});

test("renders empty state if no characters found", async () => {
  render(<CharacterList characters={[]} isLoading={false} />, {
    wrapper: MemoryRouterProvider,
  });

  expect(screen.getByTestId("character-list-empty")).toBeInTheDocument();
});
