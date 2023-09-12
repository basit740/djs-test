import Modal from '../../components/UI/Modal';

const Overview = () => {
	return (
		<section className='text-white'>
			{/* <Modal>
				<h1>welcome</h1>
			</Modal> */}
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
