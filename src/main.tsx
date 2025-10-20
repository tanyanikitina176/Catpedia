import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { theme } from './app/style/theme.ts'
import '@mantine/core/styles.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MantineProvider>
	</StrictMode>
)
