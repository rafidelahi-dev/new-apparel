import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const ProductCard = ({name, imageSrc, description}) => {
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
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={imageSrc}
          alt='pants'
          borderRadius='lg'
          objectFit={'cover'}
          height={64}
          width={'100%'}
        />

        <Stack mt='6' spacing='3'>
          <Heading size='md'> {name} </Heading>
          <Text>{description}</Text>
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
              onClick={() => {
                addToCart('Hello')
              }}
            >
              {isAddedToCart ? `Added` : `Add to Cart`}
            </Button>
          </ButtonGroup>
          <Popover isLazy>
            <PopoverTrigger>
              <Button width='130px'>Product Details</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody>
                <b>Material:</b> 100% Cotton Ripstop Fabric <b>Closure:</b>
                Zipper and Button <b>Pockets:</b> Multiple cargo pockets, two
                back pockets <b>Fit:</b> Relaxed Fit <b>Available Sizes:</b>
                S, M, L, XL, XXL <b>Care Instructions:</b> Machine wash cold,
                tumble dry low
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </CardFooter>
    </Card>
  )
}

export default ProductCard