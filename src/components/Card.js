import React from 'react';


const Card = ({name, email, id, addresslat, addresslon}) => {
	
	return (
		<a href={`http://maps.google.com/?q=${addresslat},${addresslon}&ll=${addresslat},${addresslon}&z=3`} target="_blank">
			<div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
					
				<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
				<div>
					<h2>{name} </h2>
					<p>{email}</p>
				</div>
			</div>
		</a>
	);
}

export default Card;
