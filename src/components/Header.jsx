import { Box, chakra, Flex, Heading, HStack, Icon, Image, Input, InputGroup, InputLeftElement, } from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import React from 'react';
import { setIsAutorizedAC } from '../redux/auth_reducer';
import { connect } from 'react-redux';
import HeaderUserInfo from './HeaderUserInfo';
// Icons
import kitsuneLogo from '../assets/kitsune-logo.svg'
import {
    FiSearch,
} from 'react-icons/fi'
import { Link } from 'react-router-dom';

function Header(props) {

    const ref = React.useRef();
    const [y, setY] = React.useState(0);
    const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

    const { scrollY } = useViewportScroll();
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);

    const userEmail = props.authData.userEmail

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
                            <Link to="/"> {/* Может быть очень больно если проект не закеширован у пользователя */}
                                <HStack spacing={4}>
                                    <Image 
                                        src={kitsuneLogo} 
                                        alt='KitSune' 
                                        w={{ base: "12", md: '12', lg: "16" }} 
                                        maxW='none' 
                                    />
                                    <Heading 
                                        lineHeight='31px'
                                        fontFamily="Space Grotesk"
                                        fontStyle='normal'
                                        fontSize='24px' 
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
                            maxW="375px"
                            px={{ base: '24px', sm: '32px', md: 'calc(16px + 24 * ((100vw - 320px) / 950))' }}
                        >
                            <InputGroup color='white'>
                                <InputLeftElement
                                    fontSize={18}
                                    pointerEvents='none'
                                    children={<Icon as={FiSearch} />}
                                />
                                <Input
                                    
                                    type='text'
                                    placeholder='Найти'
                                    variant='flushed'
                                    textAlign='center'
                                    fontFamily='Roboto'
                                    color='white'
                                    borderBottom="1px solid white"
                                    _placeholder={{ color: 'white' }}
                                    isTruncated
                                    pl='3'
                                />
                            </InputGroup>
                        </Flex>

                        <Flex
                            ml={!props.isAuth ? {base: '0', lg:'120px'} : {base: '0', lg:'0'}}
                            justify="flex-end"
                            align="center"
                        >
                            <HeaderUserInfo
                                setIsAuth={props.setIsAuth}
                                isUserAuth={props.isAuth}
                                userEmail={userEmail}
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
        isAuth: state.auth.is_authorized,
        authData: state.auth
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
