import React from 'react'
import {Card, CardBody, Image, Stack, Heading ,Text ,Divider ,CardFooter , ButtonGroup} 
from '@chakra-ui/react'
import ItemCount from './ItemCount'


const ItemDetail = ({producto}) => {


  return (
    <Card maxW='sm'>
  <CardBody>
    <Image width={"20rem"}
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'> {producto.titulo}</Heading>
      <Text>
        {producto.descripcion}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {producto.precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <ItemCount/>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ItemDetail