import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, 
ButtonGroup } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { useShoppingCart } from '../context/ShoppingCartContext';

const ItemDetail = ({ producto }) => {
  const { addToCart } = useShoppingCart();

  const handleAgregarAlCarrito = (quantity) => {
    addToCart(producto, quantity);
  };

  return (
    <Card maxW='sm' className='card-detail'>
      <CardBody>
      <Image
         width={"20rem"}
         src={producto.imagen}
          
         borderRadius='lg'
       />
       <Stack mt='6' spacing='3'>
         <Heading size='md'>{producto.titulo}</Heading>
         <Text>{producto.descripcion}</Text>
         <Text className='detail-precio'>{producto.precio}</Text>
       </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup className='contador'>
          <ItemCount product={producto} onAddToCart={handleAgregarAlCarrito} />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ItemDetail;

