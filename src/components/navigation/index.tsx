import Link from "next/link";
import { chakra } from "@chakra-ui/react";

export function Navigation() {
  return (
    <chakra.nav padding="2rem 6rem">
      <Link href="/">Home</Link>
    </chakra.nav>
  );
}
