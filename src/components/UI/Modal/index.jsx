// import ModalCard from './ModalCard';

const Modal = ({ children }) => {
	return (
		<div
			id='modal'
			className='flex justify-center z-50 left-0 right-0 bottom-0 top-0 w-full h-screen fixed'
		>
			<div className='bg-gray-transparent w-[500px] h-[600px] top-1/2 left-1/2 blur-0'>
				{children}
			</div>
		</div>
	);
};

export default Modal;
