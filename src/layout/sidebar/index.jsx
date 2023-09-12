import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	let nonActiveClasses =
		'text-custom-gray text-base cursor-pointer p-3 rounded-md  inline-block w-full transition-all duration-500 hover:bg-custom-black-2 hover:text-white';
	let activeClasses =
		'text-custom-gray text-base cursor-pointer p-3 rounded-md  inline-block w-full transition-all duration-500 bg-custom-black-2 text-white';
	return (
		<aside className='max-w-[280px] w-full bg-custom-black left-0 bottom-0 top-0 fixed py-16 pl-6 pr-11 text-white flex flex-col gap-16'>
			<h2
				style={{ letterSpacing: '12.5px' }}
				id='user-name'
				className='uppercase text-3xl tracking-wide cursor-pointer'
			>
				JOCKY
			</h2>
			<ul className='flex flex-col gap-5'>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClasses : nonActiveClasses
						}
						to='/overview'
					>
						Overview
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClasses : nonActiveClasses
						}
						to='/dj-pool'
					>
						DjPool
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/schema'
						className={({ isActive }) =>
							isActive ? activeClasses : nonActiveClasses
						}
					>
						Schema
					</NavLink>
				</li>
			</ul>

			<article className='mt-auto'>
				<h2>user profile</h2>
			</article>
		</aside>
	);
};

export default Sidebar;
