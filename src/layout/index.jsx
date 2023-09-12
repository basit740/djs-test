import Sidebar from './sidebar';

import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
	return (
		<>
			<Sidebar />
			<h1>This is layout</h1>
			<main className='ml-[330px] mt-28 text-white'>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
