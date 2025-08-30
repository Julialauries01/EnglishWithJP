import React, { Component } from 'react';

// Import Images
import bg1 from '../../images/main-banner/bg1.jpg';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<div className="main-banner" style={{backgroundImage: "url("+bg1+")"}}>
					{/* <div className="container inner-content">
						<div className="row align-items-center">
							<div className="col-lg-7 col-md-6 col-sm-7">
							</div>
					
						</div>
					</div> */}

				</div>
				
			</>
		);
	}
}

export default aboutSection;