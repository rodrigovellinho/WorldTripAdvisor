import Logo from "../../public/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Container, Box, Icon } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

interface HeaderProps {
  botao: string;
}

function Header({ botao }: HeaderProps) {
  return (
    <Container
      height="100px"
      width="100%"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    >
      <Box position="fixed" left="45%" top="30%">
        {botao === "sim" ? (
          <Link href="/" passHref>
            <Icon
              as={ArrowLeftIcon}
              position="fixed"
              right="150%"
              top="40%"
              cursor="pointer"
            />
          </Link>
        ) : (
          ""
        )}
        <Image src={Logo} alt="Trip Advisor Logo" />
      </Box>
    </Container>
  );
}

export default Header;
