import React from 'react';

// Elements
import MainBannerSection from "../elements/main-banner";
import MainBannerSection2 from "../elements/main-banner2";
import AboutSection from "../elements/about";
import AppointmentSection from "../elements/appointment";
import TestimonialSection from "../elements/testimonial";
import LatestNewsSection from '../elements/feature-section3';


function Index(){
	
	return(
		<>
			
			<MainBannerSection />
	  	<LatestNewsSection /> 

			<MainBannerSection2 />
			
			<AboutSection />
			
			<AppointmentSection />
			
			
			<TestimonialSection />
			
			
		</>
		
	);
}

export default Index;