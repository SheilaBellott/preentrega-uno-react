import React from 'react'
import { Link } from 'react-router-dom'
import {Flex, Card, CardBody, Stack, Heading, Image, CardFooter, Button} from '@chakra-ui/react'



const Item = ({titulo, id, imagen}) => {
  return (
    <Card  className='card'>
      
    <CardBody className='card-body'>
  <Image width={"20rem"}
      src={imagen}      
      borderRadius='lg'
      />
    <Stack>
      <Heading className='titulo'>{titulo}</Heading>
    </Stack>
  </CardBody>
  <CardFooter className='ver-detalle'>
    <Link to={`/producto/${id}`}>
        <Button className='detalle'>ver detalle</Button>
    </Link>
  </CardFooter>
</Card>
    
  )
}

export default Item