import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <HStack p={'4'} shadow={'base'} backgroundColor={'blackAlpha.900'}>
   <Button variant={'unstyled'} color={'white'} mx={'3.5'}>
    <Link to={'/'}>Home</Link>
   </Button>
   <Button variant={'unstyled'} color={'white'} mx={'3.5'}>
    <Link to={'/exchanges'}>Exchanges</Link>
   </Button>
   <Button variant={'unstyled'} color={'white'} mx={'3.5'}>
    <Link to={'/coin'}>Coins</Link>
   </Button>
   </HStack>
  )
}

export default Header
