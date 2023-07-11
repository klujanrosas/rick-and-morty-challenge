import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CharacterListPagination } from "./index";
import type { CharacterListPaginationProps } from "./types";

beforeEach(() => {
  vi.clearAllMocks();
});

test("only invokes prev when there's a corresponding page", async () => {
  const props = {
    count: 100,
    page: 2,
    next: null,
    prev: null,
    pages: 10,
    onPageChange: vi.fn(),
  };
  const utils = render(<CharacterListPagination {...props} />);

  const prevButton = screen.getByLabelText("Previous Page");

  await userEvent.click(prevButton);
  expect(props.onPageChange).not.toHaveBeenCalled();
  utils.rerender(<CharacterListPagination {...props} prev={1} />);
  await userEvent.click(prevButton);
  expect(props.onPageChange).toHaveBeenCalledOnce();
});

test("only invokes next when there's a corresponding page", async () => {
  const props = {
    count: 100,
    page: 9,
    next: null,
    prev: null,
    pages: 10,
    onPageChange: vi.fn(),
  };
  const utils = render(<CharacterListPagination {...props} />);

  const nextButton = screen.getByLabelText("Next Page");

  await userEvent.click(nextButton);
  expect(props.onPageChange).not.toHaveBeenCalled();

  utils.rerender(<CharacterListPagination {...props} next={10} />);

  await userEvent.click(nextButton);
  expect(props.onPageChange).toHaveBeenCalledWith(10);
});
