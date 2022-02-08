import { Box, chakra, Flex, Heading, HStack, Icon, Image, Input, InputGroup, InputLeftElement, Link, } from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons'
import { setIsAutorizedAC } from '../redux/auth_reducer';
import { connect } from 'react-redux';
import HeaderUserInfo from './HeaderUserInfo';
// Icons
import kitsuneLogo from '../assets/kitsune-logo.svg'
import testAvatar from '../assets/avatar.png';

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
                    <Flex 
                        w="full" 
                        h="full" 
                        align="center" 
                        justify="space-between"
                    >
                        <Flex align="center">
                            <Link href="/"> {/* Может быть очень больно если проект не закеширован у пользователя */}
                                <HStack spacing={4}>
                                    <Image 
                                        src={kitsuneLogo} 
                                        alt='KitSune' 
                                        w={{ base: "8", lg: "12" }} 
                                        maxW='none' 
                                    />
                                    <Heading 
                                        fontSize='2xl' 
                                        color='white' 
                                        fontWeight='400' 
                                        display={{ base: 'none', lg: 'inherit' }}
                                    >
                                        KitSune
                                    </Heading>
                                </HStack>
                            </Link>

                        </Flex>

                        <Flex
                            w='full'
                            maxW='600px'
                            px={{ base: '24px', sm: '32px', md: 'calc(16px + 24 * ((100vw - 320px) / 950))' }}
                        >
                            <InputGroup color='white'>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<Icon as={SearchIcon} />}
                                />
                                <Input
                                    type='text'
                                    placeholder='Найти'
                                    variant='flushed'
                                    textAlign='center'
                                    color='white'
                                    _placeholder={{ color: 'white' }}
                                    isTruncated
                                    pl='10'
                                />
                            </InputGroup>
                        </Flex>

                        <Flex
                            justify="flex-end"
                            align="center"
                        >
                            <HeaderUserInfo
                                isUserAuth={props.isAuth}
                                userEmail={userEmail}
                                userIcon={testAvatar}
                            />
                        </Flex>
                    </Flex>
                </chakra.div>
            </chakra.header>
        </Box>
    );
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.is_authorized
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setIsAuth: (isAuth) => {
            dispatch(setIsAutorizedAC(isAuth));
        },
    }
}
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
