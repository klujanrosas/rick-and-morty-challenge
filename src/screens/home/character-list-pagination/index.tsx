import { Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { CharacterListPaginationProps } from "./types";

export function CharacterListPagination({
  page,
  onPageChange,
  next,
  prev,
  count,
  pages,
}: CharacterListPaginationProps) {
  return (
    <Flex gap="8px" alignItems="center" alignSelf="flex-end">
      <IconButton
        aria-label="Previous Page"
        onClick={() => {
          if (prev) {
            onPageChange(prev);
          }
        }}
        icon={<ChevronLeftIcon />}
        disabled={!prev}
      />
      <Flex direction="column" textAlign="center">
        <Text>
          Page {page} of {pages}
        </Text>
      </Flex>
      <IconButton
        aria-label="Next Page"
        onClick={() => {
          if (next) {
            onPageChange(next);
          }
        }}
        icon={<ChevronRightIcon />}
        disabled={!next}
      />
      ({count} characters)
    </Flex>
  );
}
