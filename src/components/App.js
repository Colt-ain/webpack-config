import '../styles/index.scss';
import hippoSVG from '../images/hippo.svg';
import ryanJPG from '../images/ryan-clark--IqvImY0oZk-unsplash.jpg';
import testJPEG from '../images/test.jpeg';
import HippoPNG from '../images/hippo-shape.png';
import Icons from '../constants/icons';

function App() {
	console.log('env: ', process.env.SERVER_URL);
	console.log('env: ', process.env.APP_NAME);
	console.log('env: ', process.env.NODE_ENV);

	return (
		<>
			<section className='hero'>
			</section>
			<main>
				<section>
					<h1>Hi, React.</h1>
					<img src={hippoSVG} alt=''/>
					<img src={ryanJPG} alt=''/>
					<img src={testJPEG} alt=''/>
					<img src={HippoPNG} alt=''/>
					<div>
						<span>Inline svg icon</span>
						{Icons.hippo()}
					</div>
				</section>
			</main>
		</>
	);
}

export default App;

