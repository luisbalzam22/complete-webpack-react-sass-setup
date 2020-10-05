import React from 'react';
import mod1 from './module-1-example.js';
import mod2 from './module-2-example.js';
import anyNameImage from '../assets/any-name-image.png';

const MainReactComponent = () => {
	return (
		<React.Fragment>
			<h1>Hello from React!</h1>
			<p>
				<strong>
					Imported value from the &quot;module-1-example.js file &quot;-&gt;
				</strong>
				{mod1}
			</p>
			<p>
				<strong>
					Imported value from the &quot;module-2-example.js file &quot;-&gt;
				</strong>
				{mod2}
			</p>
			<img src={anyNameImage} />
		</React.Fragment>
	);
};
export default MainReactComponent;
