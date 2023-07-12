import { SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";

export function CharacterSearchbar(props: InputProps) {
  return (
    <InputGroup maxW="480px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input {...props} type="text" placeholder="Search characters by name" />
    </InputGroup>
  );
}
