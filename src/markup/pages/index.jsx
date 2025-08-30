import React from 'react';

// Elements
import MainBannerSection from "../elements/main-banner";
import MainBannerSection2 from "../elements/main-banner2";
import AboutSection from "../elements/about";
// import WorkSection from "../elements/work";
import AppointmentSection from "../elements/appointment";
// import TestimonialSection from "../elements/testimonial";
// import ServicesSliderSection from "../elements/services-slider";

function Index(){
	
	return(
		<>
			
			<MainBannerSection />
			<MainBannerSection2 />
			
			<AboutSection />
			
			{/* <WorkSection /> */}
			
			<AppointmentSection />
			
			{/* <ServicesSliderSection /> */}
			
			{/* <TestimonialSection /> */}
			
	 {/* <LatestNewsSection /> */} 
			
		</>
		
	);
}

export default Index;