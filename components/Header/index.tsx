import Logo from "../../public/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";

interface HeaderProps {
  botao: string;
}

function Header({ botao }: HeaderProps) {
  return (
    <Flex
      height="100px"
      w="1440px"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Box position="fixed" right="90%" top="30%">
        {botao === "sim" ? (
          <Link href="/" passHref>
            <Icon as={ArrowLeftIcon} cursor="pointer" />
          </Link>
        ) : (
          ""
        )}
      </Box>
      <Box>
        <Image src={Logo} alt="Trip Advisor Logo" />
      </Box>
    </Flex>
  );
}

export default Header;
