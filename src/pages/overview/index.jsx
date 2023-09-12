// import Modal from '../../components/UI/Modal';
import { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const Overview = () => {
	const [isModalOpen, setIsModalOpen] = useState(true);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	return (
		<section className='text-white'>
			{/* <Modal>
				<h1>welcome</h1>
			</Modal> */}

			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				style={{
					overlay: {
						backdropFilter: 'blur(7px)',
						background: 'rgba(0, 0, 0, 0.30)', // Apply blur effect to the background
					},
					content: {
						// Your modal styles here
						width: '500px',
						height: '500px',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
						borderRadius: '20px',
						background: 'rgba(255, 255, 255, 0.30)',
						backdropFilter: 'blur(60px)',
						border: 'none',
						color: 'white',
					},
				}}
			>
				{/* Your modal content goes here */}
				<h2>Modal Title</h2>
				<p>Modal Content</p>
				<button onClick={closeModal}>Close Modal</button>
			</Modal>
			<div className='flex items-start justify-between pr-32'>
				<div className=''>
					<h2 className=' text-4xl font-medium'>Välkommen, Boqueria</h2>
					<p className='text-lg mt-2'>Du har en kommande spelning. </p>
				</div>
				<h3 className='text-8xl font-medium'>19:46</h3>
			</div>
		</section>
	);
};

export default Overview;

// color: #FFF;
// font-feature-settings: 'clig' off, 'liga' off;
// font-family: Space Grotesk;
// font-size: 96px;
// font-style: normal;
// font-weight: 500;
// line-height: normal;
