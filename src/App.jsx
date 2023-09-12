import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Overview from './pages/overview';
import Schema from './pages/schema';
import DjPool from './pages/dj-pool';
import Profile from './pages/profile';
function App() {
	return (
		<div>
			<Routes>
				<Route path='/*' element={<Layout />}>
					<Route path='overview' element={<Overview />}></Route>
					<Route path='schema' element={<Schema />}></Route>
					<Route path='dj-pool' element={<DjPool />}></Route>
					<Route path='profile' element={<Profile />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
