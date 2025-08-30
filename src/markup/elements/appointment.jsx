import React, { Component } from 'react';

// Images
import lineBg from '../../images/appointment/line-bg.png';
import appMobile from '../../images/appointment/mobile.png';
import appWomen from '../../images/appointment/women.png';
import canada from '../../images/appointment/canada.png';
// import appSetting from '../../images/appointment/setting.png';
import Australia from '../../images/appointment/Australia.png';
import uk from '../../images/appointment/UnitedKingdom.png';
// import ptImg1 from '../../images/appointment/UnitedStates.png';
// import ptImg2 from '../../images/shap/wave-orange.png';
// import ptImg3 from '../../images/shap/wave-blue.png';
// import ptImg4 from '../../images/shap/circle-orange.png';

import AppointmentForm from './appointment-form';

class aboutSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area account-wraper1">
					<div className="container-fluid">
						<div className="appointment-inner section-sp2" style={{backgroundImage: "url("+lineBg+")", backgroundRepeat:" no-repeat", backgroundPosition: "20px 140px"}}>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-xl-5 col-lg-6 col-md-6">
										
										<AppointmentForm />
										
									</div>
									<div className="col-xl-7 col-lg-6 col-md-6">
										<div className="appointment-thumb">
											<img src={appMobile} alt=""/>
											<div className="images-group">
												<img className="img1" src={appWomen} alt=""/>
												{/* <img className="img2" src={Australia} alt=""/> */}
												<img className="img3" src={canada} alt=""/>
												{/* <img className="img4" src={canada} alt=""/> */}
												<img className="img5" src={Australia} alt=""/>
											</div>
										</div>
									</div>
								</div>					
							</div>	
							<img className="pt-img1 animate1" src={uk} alt=""/>
							{/* <img className="pt-img2 animate-wave" src={ptImg2} alt=""/>
							<img className="pt-img3 animate-wave" src={ptImg3} alt=""/>
							<img className="pt-img4 animate2" src={ptImg4} alt=""/> */}
							
						</div>
						
					</div>
				</section>
			
			</>
		);
	}
}

export default aboutSection;