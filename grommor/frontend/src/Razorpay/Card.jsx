import { Button, Text, VStack } from '@chakra-ui/react'


function Card({amount, checkoutHandler}) {
  return (
    <div>
        <VStack>
            
            <Text> amount: {amount}</Text>
            <Button onClick={() => checkoutHandler(amount)}> make payment </Button>
        </VStack>
      
    </div>
  )
}

export default Card  
