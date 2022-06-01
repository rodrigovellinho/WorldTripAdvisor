import Link from "next/link";
import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== "/";
  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1168px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={ArrowLeftIcon}
                cursor="pointer"
                fontSize={[10, 20]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          w={["81px", "184px"]}
          src="/assets/Logo.svg"
          alt="Trip Advisor Logo"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}

export default Header;
