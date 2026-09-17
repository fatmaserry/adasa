import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IconProvider } from '@ant-design/icons'
import './index.css'
import App from './App.tsx'

const iconContext = { layer: 'antd' }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IconProvider value={iconContext}>
      <App />
    </IconProvider>
  </StrictMode>,
)
