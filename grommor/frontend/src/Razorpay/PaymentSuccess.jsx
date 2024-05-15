import { Box, Heading, Text, VStack } from "@chakra-ui/react"
import { useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {
    
  const searchQuery = useSearchParams()[0]

  const referenceNumber = searchQuery.get("reference")

  return (
    <div>
        <Box>

            <VStack>
                <Heading>payment success</Heading>

                <Text> reference number :{referenceNumber} </Text>
            </VStack>
        </Box>
    </div>
  )
}

export default PaymentSuccess
