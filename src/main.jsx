import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import ModalGlobalProvider from './shared/components/modal/Context/ModalGlobalProvider.jsx'
import CrudProvider from './shared/hooks/service/crud/CrudProvider.jsx'
import CrudEmployeeProvider from './shared/hooks/service/crudEmployee/CrudEmployeeProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <ModalGlobalProvider>
        <CrudProvider>
          <CrudEmployeeProvider>
            <App />
          </CrudEmployeeProvider>
        </CrudProvider>
      </ModalGlobalProvider>
    </ChakraProvider>
  </StrictMode>
)
