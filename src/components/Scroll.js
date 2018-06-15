import React from 'react';

//using props.children I can wrap other components inside the component
const Scroll = (props) =>{

	return(
		<div style={{overflow:'scroll', border:'1px solid black',height:'800px'}}>
		{props.children}
		</div>
	);

};

export default Scroll;