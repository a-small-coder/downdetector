import { Box, chakra, Flex, Heading, HStack, Icon, Image, Input, InputGroup, InputLeftElement, Link, Text, } from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import React from 'react';
import logo from '../img/mainLogo.png';
import testAvatar from '../img/Avatar.png';
import { SearchIcon } from '@chakra-ui/icons'

function Header(props) {

    const ref = React.useRef();
    const [y, setY] = React.useState(0);
    const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

    const { scrollY } = useViewportScroll();
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);

    const userEmail = "someMail@.mail.ru"

    return (
        <Box pos="relative">
            <chakra.header
                ref={ref}
                shadow={y > height ? "sm" : undefined}
                transition="box-shadow 0.2s"
                w="full"
                overflowY="hidden"
            >
                <chakra.div h="4.5rem" mx="auto">
                    <Flex w="full" h="full" align="center" justify="space-between">
                        <Flex align="center">
                            <Link href="/">
                                <HStack>
                                    <Image src={logo} alt='KitSune' w={{ base: "8", lg: "12" }} maxW='none'/>
                                </HStack>
                            </Link>
                            <Heading fontSize='2xl' color='white' fontWeight='400' ml='4' display={{base: 'none', lg: 'block'}}>
                                KitSune
                            </Heading>
                        </Flex>

                        <Flex
                            w='full'
                            maxW='700px'
                            px={{base: '24px', sm:'32px', md: 'calc(16px + 24 * ((100vw - 320px) / 950))'}}
                        >
                            <InputGroup color='white'>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<Icon as={SearchIcon}/>}
                                />
                                <Input 
                                    type='text' 
                                    placeholder='Поиск финансовых организаций'
                                    variant='flushed'
                                    textAlign='center'
                                    color='white'
                                    isTruncated
                                    pl='10'
                                />
                            </InputGroup>
                        </Flex>

                        <Flex
                            justify="flex-end"
                            align="center"
                        >
                            <HStack spacing={{base: '1', md:'5'}} display="flex">
                                <Text fontSize='2xl' color='white' isTruncated maxW='130px' display={{ base: "none", lg: "block" }}>
                                    {userEmail}
                                </Text>
                                <Image
                                    src={testAvatar}
                                    display="block"
                                    transition="color 0.2s"
                                    minW={{ base: "8", lg: "12" }}
                                    minH={{ base: "8", lg: "12" }}
                                    _hover={{ color: "gray.600" }}
                                />
                            </HStack>
                        </Flex>
                    </Flex>
                </chakra.div>
            </chakra.header>
        </Box>
    );
}
export default Header;