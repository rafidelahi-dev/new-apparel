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
              <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'}>
                Pants
              </MenuItem>
              <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'}>
                Shorts
              </MenuItem>
              <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'}>
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
      <Box marginTop='5rem' padding='2rem'>
        <h1>Hello</h1>
        {/* Your content goes here */}
      </Box>

      {/* Footer */}
      <Box
        backgroundColor='gray.100'
        padding='2rem'
        textAlign='center'
        borderTop='1px solid #ddd'
        marginTop='2rem'
        width='100vh'
      >
        <Text fontSize='lg'>
          © {new Date().getFullYear()} Your Website Name
        </Text>
      </Box>
    </>
  )
}

export default App
