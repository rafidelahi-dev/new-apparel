import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

const ProductButton = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} href='#'>
        Products
      </MenuButton>
      <MenuList>
        <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'} mb={2}>
          Pants
          <ChevronRightIcon />
        </MenuItem>
        <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'} mb={2}>
          Shorts
          <ChevronRightIcon />
        </MenuItem>
        <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'} mb={2}>
          Joggers
          <ChevronRightIcon />
        </MenuItem>
        <MenuItem as={Button} color={'rgba(10, 150, 130, 0.9)'}>
          CargoPants
          <ChevronRightIcon />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ProductButton