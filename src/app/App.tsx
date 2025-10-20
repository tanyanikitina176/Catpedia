import './style/global.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CatsPage } from '@/pages/cats-page'
import { CatPage } from '@/pages/cat-page'
import { AddCatPage } from '@/pages/add-cat-page'
import { NotFoundPage } from '@/pages/not-found-page'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navigate to='/products' replace />} />
				<Route path='/products'>
					<Route index element={<CatsPage />} />
					<Route path=':id' element={<CatPage />} />
				</Route>
				<Route path='/create-product' element={<AddCatPage />}></Route>
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
