import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ChakraProvider>
        <h1>Hello</h1>
      </ChakraProvider>
  )
}

export default App