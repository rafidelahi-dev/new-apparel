import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
  useToast,
  HStack,
  VStack,
  Alert,
  AlertIcon,
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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  SimpleGrid,
  Center,
} from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import './App.css'
import ProductCard from './ProductCard'

const products = [
  {
    name: "ComfortFit Men's Casual Pants",
    imageSrc:
      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    description:
      "Introducing our ComfortFit Men's Casual Pants, designed to elevate your everyday style with unmatched comfort and versatility. Whether you're heading to the office, a weekend  brunch, or a casual night out, these pants are your perfect  companion.",
  },
  {
    name: "ActiveFlex Men's Half Pants",
    imageSrc:
      'https://media.istockphoto.com/id/1163910106/photo/gray-sport-mens-shorts-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=rPLRO-KdBvaN8jXlgYNRyX2GQcQkrXs4W1AfDuTBfIY=',
    description:
      "Introducing our ActiveFlex Men's Half Pants, the perfect choice for those seeking style, comfort, and freedom of movement during warmer days. Whether you're hitting the gym, going for a run, or simply enjoying outdoor activities, these half pants are designed to keep you cool and comfortable.",
  },
  {
    name: "UrbanFit Men's Jogger Pants",
    imageSrc:
      'https://media.istockphoto.com/id/1322763090/photo/blank-joggers-mockup-front-and-side-views.jpg?s=612x612&w=0&k=20&c=blJ5fXFmZGp9CQ1OK5tBCMdi60hLlrqcM295W8XNxLg=',
    description:
      "Discover ultimate comfort and style with our UrbanFit Men's Jogger Pants. Designed to provide a perfect blend of relaxation and fashion, these joggers are the ideal choice for staying comfortable during casual outings or lounging at home.",
  },
  {
    name: "RuggedFlex Men's Cargo Pants",
    imageSrc:
      'https://images.unsplash.com/photo-1584302052177-2e90841dad6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZ28lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    description: "Introducing our RuggedFlex Men's Cargo Pants, the perfect blend of functionality and style for your active lifestyle. These cargo pants are designed to withstand the demands of both outdoor adventures and everyday wear, while keeping you well-prepared and on-trend.",
  },
]

function App() {
  const [count, setCount] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const toast = useToast()

  const addToCart = async (userData) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/addtocart',
        userData
      )

      // Handle successful addition to cart
      console.log('Added to cart:', response.data)
      setIsAddedToCart(true) // Show success message
      toast({
        title: 'Added to Cart',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    } catch (error) {
      // Handle error
      console.error('Cart error:', error)
    }
  }

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
        maxWidth='100vw'
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
        <Stack
          in={!isMenuOpen}
          direction={['column', 'row']}
          spacing='24px'
          display={{ base: 'none', md: 'flex', lg: 'flex' }}
        >
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
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Products
                </MenuButton>
                <MenuList>
                  <MenuItem
                    as={Button}
                    color={'rgba(10, 150, 130, 0.9)'}
                    mb={2}
                  >
                    Pants
                  </MenuItem>
                  <MenuItem
                    as={Button}
                    color={'rgba(10, 150, 130, 0.9)'}
                    mb={2}
                  >
                    Shorts
                  </MenuItem>
                  <MenuItem
                    as={Button}
                    color={'rgba(10, 150, 130, 0.9)'}
                    mb={2}
                  >
                    Joggers
                  </MenuItem>
                  <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'}>
                    CargoPants
                  </MenuItem>
                </MenuList>
              </Menu>
            </VStack>
          </Box>
        </Collapse>
      </Flex>
      {/* Content */}
      <Center maxWidth='100vw'>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          marginTop='5rem'
          padding='4'
          gap={2}
        >

          {products.map((product) => {
            return  <ProductCard name={product.name} imageSrc={product.imageSrc} description={product.description}/>
          })}
          {/* Your content goes here */}
          {/* <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhbnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                objectFit={'cover'}
                height={64}
                width={'100%'}
              />

              <Stack mt='6' spacing='3'>
                <Heading size='md'> ComfortFit Men's Casual Pants </Heading>
                <Text>
                  Introducing our ComfortFit Men's Casual Pants, designed to
                  elevate your everyday style with unmatched comfort and
                  versatility. Whether you're heading to the office, a weekend
                  brunch, or a casual night out, these pants are your perfect
                  companion.
                </Text>
                <Text color='blue.600' fontsize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Stack>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy Now
                  </Button>
                  <Button
                    variant='ghost'
                    colorScheme='blue'
                    onClick={() => {addToCart('Hello')}}
                  >
                    Add to Cart
                  </Button>
                </ButtonGroup>
                <Popover isLazy>
                  <PopoverTrigger>
                    <Button width='130px'>Product Details</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <b>Material:</b> 100% Cotton Ripstop Fabric{' '}
                      <b>Closure:</b>
                      Zipper and Button <b>Pockets:</b> Multiple cargo pockets,
                      two back pockets <b>Fit:</b> Relaxed Fit{' '}
                      <b>Available Sizes:</b>
                      S, M, L, XL, XXL <b>Care Instructions:</b> Machine wash
                      cold, tumble dry low
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Stack>
            </CardFooter>
            {}
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://media.istockphoto.com/id/1163910106/photo/gray-sport-mens-shorts-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=rPLRO-KdBvaN8jXlgYNRyX2GQcQkrXs4W1AfDuTBfIY='
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                objectFit={'cover'}
                height={64}
                width={'100%'}
              />

              <Stack mt='6' spacing='3'>
                <Heading size='md'> ActiveFlex Men's Half Pants </Heading>
                <Text>
                  Introducing our ActiveFlex Men's Half Pants, the perfect
                  choice for those seeking style, comfort, and freedom of
                  movement during warmer days. Whether you're hitting the gym,
                  going for a run, or simply enjoying outdoor activities, these
                  half pants are designed to keep you cool and comfortable.
                </Text>
                <Text color='blue.600' fontsize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Stack>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy Now
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                    Add to Cart
                  </Button>
                </ButtonGroup>
                <Popover isLazy>
                  <PopoverTrigger>
                    <Button width='130px'>Product Details</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <b>Material:</b> 100% Cotton Ripstop Fabric{' '}
                      <b>Closure:</b>
                      Zipper and Button <b>Pockets:</b> Multiple cargo pockets,
                      two back pockets <b>Fit:</b> Relaxed Fit{' '}
                      <b>Available Sizes:</b>
                      S, M, L, XL, XXL <b>Care Instructions:</b> Machine wash
                      cold, tumble dry low
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Stack>
            </CardFooter>
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://media.istockphoto.com/id/1322763090/photo/blank-joggers-mockup-front-and-side-views.jpg?s=612x612&w=0&k=20&c=blJ5fXFmZGp9CQ1OK5tBCMdi60hLlrqcM295W8XNxLg='
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                objectFit={'cover'}
                height={64}
                width={'100%'}
              />

              <Stack mt='6' spacing='3'>
                <Heading size='md'>UrbanFit Men's Jogger Pants</Heading>
                <Text>
                  Discover ultimate comfort and style with our UrbanFit Men's
                  Jogger Pants. Designed to provide a perfect blend of
                  relaxation and fashion, these joggers are the ideal choice for
                  staying comfortable during casual outings or lounging at home.
                </Text>
                <Text color='blue.600' fontsize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Stack>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy Now
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                    Add to Cart
                  </Button>
                </ButtonGroup>
                <Popover isLazy>
                  <PopoverTrigger>
                    <Button width='130px'>Product Details</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <b>Material:</b> 100% Cotton Ripstop Fabric{' '}
                      <b>Closure:</b>
                      Zipper and Button <b>Pockets:</b> Multiple cargo pockets,
                      two back pockets <b>Fit:</b> Relaxed Fit{' '}
                      <b>Available Sizes:</b>
                      S, M, L, XL, XXL <b>Care Instructions:</b> Machine wash
                      cold, tumble dry low
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Stack>
            </CardFooter>
          </Card>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1584302052177-2e90841dad6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZ28lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                objectFit={'cover'}
                height={64}
                width={'100%'}
              />

              <Stack mt='6' spacing='3'>
                <Heading size='md'>RuggedFlex Men's Cargo Pants</Heading>
                <Text>
                  Introducing our RuggedFlex Men's Cargo Pants, the perfect
                  blend of functionality and style for your active lifestyle.
                  These cargo pants are designed to withstand the demands of
                  both outdoor adventures and everyday wear, while keeping you
                  well-prepared and on-trend.
                </Text>
                <Text color='blue.600' fontsize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Stack>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy Now
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                    Add to Cart
                  </Button>
                </ButtonGroup>
                <Popover isLazy>
                  <PopoverTrigger>
                    <Button width='130px'>Product Details</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverCloseButton />
                    <PopoverBody>
                      <b>Material:</b> 100% Cotton Ripstop Fabric
                      <b>Closure:</b>
                      Zipper and Button <b>Pockets:</b> Multiple cargo pockets,
                      two back pockets <b>Fit:</b> Relaxed Fit{' '}
                      <b>Available Sizes:</b>
                      S, M, L, XL, XXL <b>Care Instructions:</b> Machine wash
                      cold, tumble dry low
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Stack>
            </CardFooter>
          </Card> */}
        </SimpleGrid>
      </Center>

      {/* Footer */}
      <Stack
        maxWidth='100vw'
        backgroundColor='gray.200'
        textAlign='center'
        borderTop='1px solid #ddd'
        marginTop='2rem'
        overflowX='hidden'
        height='300px'
        padding='2rem'
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
      </Stack>
    </>
  )
}

export default App
