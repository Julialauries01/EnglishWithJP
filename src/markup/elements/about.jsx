import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import aboutThumb1 from '../../images/about/pic-1.jpg';
// import aboutThumb2 from '../../images/about/pic-4.png';
// import aboutThumb3 from '../../images/about/pic-3.jpg';
// import ptImg1 from '../../images/shap/wave-orange.png';
// import ptImg2 from '../../images/shap/circle-small-blue.png';
// import ptImg4 from '../../images/shap/square-dots-orange.png';
// import ptImg5 from '../../images/shap/square-blue.png';

class aboutSection extends Component{
	render(){
		return(
			<>
				<section className="section-sp1 about-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30">
								<div className="about-thumb-area">
									<ul>
										<li><img className="about-thumb1" src={aboutThumb1} alt=""/></li>
										{/* <li><img className="about-thumb2" src={aboutThumb2} alt=""/></li>
										<li><img className="about-thumb3" src={aboutThumb3} alt=""/></li>
										<li><div className="exp-bx">10<span>Certificações</span></div></li> */}
									</ul>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx">
									<h6 className="title-ext text-secondary">Sobre mim</h6>
									<h2 className="title">Construindo a fluência juntos.</h2>
									<p>Olá, meu nome é João Pedro e sou professor de Língua Inglesa há quase 8 anos. Sou licenciado em Letras e possuo pós-graduação em Língua Inglesa, além de diversos  cursos de complementação nas áreas de ensino de línguas e Linguística. 
Ao longo da minha trajetória, atuei em instituições de ensino reconhecidas e, desde a  pandemia, dedico-me exclusivamente ao ensino on-line, oferecendo aulas particulares  para alunos no Brasil e também no exterior.</p>
								</div>
								<div className="row">
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature1">
											<div className="icon-md">
												<span className="icon-cell">
												<svg fill="#000000" width="800px" height="800px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M46,47.13306a10.12732,10.12732,0,0,0-9.91223-10.12189,9,9,0,1,0-8.17554,0A10.12732,10.12732,0,0,0,18,47.13306V62H46Z"/><rect fill="#b2f0fb" height="4" width="2" x="31" y="8"/><rect height="1.99979" transform="translate(3.69684 34.09525) rotate(-45.00495)" width="3.99992" x="41.00004" y="11.5858"/><rect  height="2" width="4" x="53" y="60"/><rect height="2" width="4" x="53" y="50"/><rect fill="#b2f0fb" height="2" width="4" x="53" y="40"/><rect height="2.0002" transform="matrix(0.94863, -0.31637, 0.31637, 0.94863, -7.03386, 18.67654)" width="4.0001" x="51.99995" y="29.9999"/><rect height="2.0002" transform="matrix(0.94863, -0.31637, 0.31637, 0.94863, -3.91324, 17.16245)" width="4.00025" x="48.89734" y="19.63247" fill="#b2f0fb"/><rect height="3.99992" transform="translate(-2.74867 18.53551) rotate(-45)" width="1.99979" x="20.00011" y="10.58573"/><rect height="2" width="4" x="7" y="60"/><rect height="2" width="4" x="7" y="50"/><rect fill="#b2f0fb" height="2" width="4" x="7" y="40"/><rect height="4.0001" transform="translate(-22.57148 30.68629) rotate(-71.56947)" width="2.0002" x="8.9999" y="28.99995"/><rect fill="#b2f0fb" height="4.00025" transform="translate(-10.61485 26.53722) rotate(-71.56284)" width="2.0002" x="12.10244" y="18.63244"/><path fill="#b2f0fb" d="M58.75092,7.83124a.26821.26821,0,0,0,.49816,0A4.284,4.284,0,0,1,61.83124,5.249a.26814.26814,0,0,0,0-.4981A4.28387,4.28387,0,0,1,59.24908,2.1687a.26821.26821,0,0,0-.49816,0,4.28387,4.28387,0,0,1-2.58216,2.58222.26814.26814,0,0,0,0,.4981A4.284,4.284,0,0,1,58.75092,7.83124Z"/><path fill="#b2f0fb"  d="M2.16876,5.249A4.284,4.284,0,0,1,4.75092,7.83124a.26821.26821,0,0,0,.49816,0A4.284,4.284,0,0,1,7.83124,5.249a.26814.26814,0,0,0,0-.4981A4.28387,4.28387,0,0,1,5.24908,2.1687a.26821.26821,0,0,0-.49816,0A4.28387,4.28387,0,0,1,2.16876,4.75092.26814.26814,0,0,0,2.16876,5.249Z"/></svg>
												</span> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-title">Aulas individuais</h4>
											</div>
										</div>
									</div>
			<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature3">
											<div className="icon-md">
											<span className="icon-cell">
												<svg width="800px" height="800px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path fill="#000000" d="M5 16v-5.3c-0.6-0.3-1-1-1-1.7v-4c0-0.7 0.4-1.3 1-1.7 0-0.1 0-0.2 0-0.3 0-1.1-0.9-2-2-2s-2 0.9-2 2c0 1.1 0.9 2 2 2h-2c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v5h4z"></path>
<path fill="#000000" d="M15 5h-2c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2c0 0.1 0 0.2 0 0.3 0.6 0.4 1 1 1 1.7v4c0 0.7-0.4 1.4-1 1.7v5.3h4v-5c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path>
<path fill="#000000" d="M10 2c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
<path fill="#000000" d="M10 4h-4c-0.5 0-1 0.5-1 1v4c0 0.5 0.5 1 1 1v6h4v-6c0.5 0 1-0.5 1-1v-4c0-0.5-0.5-1-1-1z"></path>
</svg>
</span>

											</div>
											<div className="icon-content">
												<h4 className="ttr-title">Atendimento em grupo</h4>
											</div>
										</div>
									</div>
	
								</div>
								<Link to="/about-us" className="btn btn-secondary shadow">Leia mais</Link>
							</div>
						</div>
					</div>
					{/* <img className="pt-img1 animate-wave" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate-rotate" src={ptImg5} alt=""/>
					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
					<img className="pt-img5 animate2" src={ptImg5} alt=""/> */}
				</section>
				
			</>
		);
	}
}

export default aboutSection;