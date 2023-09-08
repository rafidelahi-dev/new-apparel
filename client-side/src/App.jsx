import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  ButtonGroup,
  IconButton,
  Collapse,
  Stack,
  HStack,
  VStack,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Divider,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Add an event listener to detect scroll
    window.addEventListener('scroll', handleScroll)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    // Check if the user has scrolled down, and set isScrolled accordingly
    if (window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Navbar */}
      <Flex
        position='fixed'
        top='0'
        left='0'
        right='0'
        alignItems='center'
        justifyContent='space-between'
        padding='1rem'
        backgroundColor={
          isScrolled ? 'rgba(150, 150, 150, 0.9)' : 'rgba(10, 150, 130, 0.9)'
        }
        backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
        transition='background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out'
        zIndex={100}
      >
        <Box>
          <Image
            borderRadius='full'
            boxSize='60px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
          />
        </Box>
        <Stack in={!isMenuOpen} direction={['column', 'row']} spacing='24px'>
          <Button colorScheme='facebook'>Home</Button>
          <Button colorScheme='facebook'>About</Button>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Products
            </MenuButton>
            <MenuList>
              <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'} mb={2}>
                Pants
              </MenuItem>
              <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'} mb={2}>
                Shorts
              </MenuItem>
              <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'} mb={2}>
                Joggers
              </MenuItem>
              <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'}>
                CargoPants
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <IconButton
          aria-label='Hamburger Menu'
          icon={<HamburgerIcon />}
          display={['block', 'block', 'none']}
          onClick={toggleMenu}
        />
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isMenuOpen} animateOpacity>
        <Box
          position='fixed'
          top='60px'
          right='0'
          width='100%'
          backgroundColor='rgba(255, 255, 255, 0.9)'
          padding='1rem'
          zIndex={99}
        >
          <VStack spacing='1rem'>
            <Button colorScheme='facebook'>Home</Button>
            <Button colorScheme='facebook'>About</Button>
            <Button colorScheme='facebook'>Product</Button>
          </VStack>
        </Box>
      </Collapse>

      {/* Content */}
      <Box marginTop='5rem' padding='2rem' display='flex'>
        {/* Your content goes here */}
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />

            <Stack mt='6' spacing='3'>
              <Heading size='md'> Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontsize='2xl'>
                {' '}
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy Now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to Cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://media.istockphoto.com/id/1163910106/photo/gray-sport-mens-shorts-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=rPLRO-KdBvaN8jXlgYNRyX2GQcQkrXs4W1AfDuTBfIY='
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />

            <Stack mt='6' spacing='3'>
              <Heading size='md'> Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontsize='2xl'>
                {' '}
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy Now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to Cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://media.istockphoto.com/id/1322763090/photo/blank-joggers-mockup-front-and-side-views.jpg?s=612x612&w=0&k=20&c=blJ5fXFmZGp9CQ1OK5tBCMdi60hLlrqcM295W8XNxLg='
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />

            <Stack mt='6' spacing='3'>
              <Heading size='md'> Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontsize='2xl'>
                {' '}
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy Now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to Cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://images.unsplash.com/photo-1584302052177-2e90841dad6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZ28lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />

            <Stack mt='6' spacing='3'>
              <Heading size='md'> Living room Sofa</Heading>
              <Text>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
              <Text color='blue.600' fontsize='2xl'>
                {' '}
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                Buy Now
              </Button>
              <Button variant='ghost' colorScheme='blue'>
                Add to Cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>

      {/* Footer */}
      <Box
        backgroundColor='gray.200'
        padding='2rem'
        textAlign='center'
        borderTop='1px solid #ddd'
        marginTop='2rem'
        overflowX='hidden'
        width='100vw'
        height='300px'
      >
        <VStack spacing={2}>
          <Text fontSize='lg' fontWeight='bold' color='gray.700'>
            New Apparel
          </Text>
          <Divider borderColor={'gray.400'} />
          <Text fontSize={'sm'} color={'gray.400'}>
            &copy; {new Date().getFullYear()} All rights reserved
          </Text>
          <Link href='#' color='blue.500'>
            Privacy Policy
          </Link>
          <Link href='#' color='blue.500'>
            Terms & Condition
          </Link>
        </VStack>
      </Box>
    </>
  )
}

export default App
