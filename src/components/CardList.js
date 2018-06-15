import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {


	return(

		<div className="border">
			{
				robots.map((user,i) =>{
				//we use key in a loop because when some of the card was deleted react should know which one was deleted
					return(
					 <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}
					  addresslat={robots[i].address.geo.lat} addresslon={robots[i].address.geo.lng} />
					);
			    })
	       }
	   </div>
	);
}

export default CardList;