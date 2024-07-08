import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import aboutThumb1 from '../../images/about/pic-1.jpg';
import aboutThumb2 from '../../images/about/pic-4.png';
import aboutThumb3 from '../../images/about/pic-3.jpg';
import ptImg1 from '../../images/shap/wave-orange.png';
import ptImg2 from '../../images/shap/circle-small-blue.png';
import ptImg4 from '../../images/shap/square-dots-orange.png';
import ptImg5 from '../../images/shap/square-blue.png';

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
										<li><img className="about-thumb2" src={aboutThumb2} alt=""/></li>
										<li><img className="about-thumb3" src={aboutThumb3} alt=""/></li>
										<li><div className="exp-bx">10<span>Certificações</span></div></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx">
									<h6 className="title-ext text-secondary">Sobre mim</h6>
									<h2 className="title">Construindo resiliência juntos.</h2>
									<p>Olá! Sou Edineia, psicóloga em Ribeirão Preto, oferecendo atendimento online e presencial. Com paixão por ajudar pessoas a encontrarem equilíbrio e bem-estar, minha jornada na psicologia começou com o profundo desejo de compreender o comportamento humano e suas complexas emoções. Possuo experiência em diversas áreas, como terapia cognitivo-comportamental, psicoterapia humanista e aconselhamento para casais e famílias. Acredito na importância de proporcionar um ambiente seguro e acolhedor, onde meus pacientes possam explorar seus pensamentos e sentimentos livremente, sem julgamentos.</p>
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
												<h4 className="ttr-title">Atendimento individual</h4>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature2">
											<div className="icon-md">
												<span className="icon-cell">
    <svg width="800px" height="800px" viewBox="0 0 500 500" enableBackground="new 0 0 500 500" id="Layer_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g>
            <path d="M187.16,461.865c-14.886-1.858-88.639,10.135-88.404-6.773c-4.522-40.324-4.204-81.029-2.656-121.518c0.587-13.23,2.166-26.337,6.746-38.955c8.68-32.324,53.699-37.078,49.049-57.343c-1.336-8.103-6.926-14.204-11.74-20.482c-14.703-17.951-14.439-44.465-0.305-62.653c25.989-40.405,100.476-25.754,95.336,26.635c-1.091,12.667-5.896,23.92-13.459,34.058c-38.806,45.752,23.433,24.918,41.81,91.025c5.838,21.032,3.96,43.269,5.59,64.86c0.251,27.821,2.001,55.667,1.566,83.471c-0.55,5.587-7.59,5.652-11.917,5.684C234.871,459.49,211.056,462.126,187.16,461.865z" fill="#000000"/>
            <path d="M273.335,355.324c1.18-34.973-5.725-72.248-33.339-96.177c-2.545-18.933-0.376-39.346,3.039-58.42c3.255-21.075,23.063-30.059,37.472-42.706c13.872-13.333-1.817-28.436-12.013-37.999c-35.83-34.578,8.215-99.674,53.493-80.988c26.413,9.922,42.588,41.663,29.214,67.873c-5.543,12.379-22.374,27.323-9.357,40.395c20.672,16.732,41.126,22.954,49.21,51.802c12.429,40.889,10.599,84.481,13.557,126.75c0.644,12.799,0.565,25.72-2.404,38.281c-2.11,14.245-65.935,10.599-79.449,12.202c-15.654,0.361-31.225,1.564-46.765,3.325C272.581,382.465,274.318,354.909,273.335,355.324z" fill="#000000"/>
            <path d="M220.031,314.463c6.633-31.385,19.887-6.286,6.917,11.894c-1.172,1.63-2.68,4.934-5.051,3.268c-4.051-2.75-8.552-4.922-11.9-8.6C199.623,308.226,207.805,295.898,220.031,314.463z" fill="#ff0022"/>
            <path d="M350.846,211.926c3.358-21.169,14.676,0.851,6.546,13.187c-2.896,2.986-7.832-0.906-10.308-2.946C338.397,216.357,339.108,199.267,350.846,211.926z" fill="#ff0022"/>
        </g>
    </svg>
</span>

											</div>
											<div className="icon-content">
												<h4 className="ttr-title">Atendimento para casais</h4>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature3">
											<div className="icon-md">
											<span className="icon-cell">
												<svg height="800px" width="800px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
		<g>
			<path className="st0" d="M78.641,118.933c22.88,0,41.416-18.551,41.416-41.414c0-22.887-18.536-41.423-41.416-41.423 c-22.887,0-41.422,18.536-41.422,41.423C37.218,100.382,55.754,118.933,78.641,118.933z"/>
			<path className="st0" d="M255.706,228.73v0.062c0.101,0,0.194-0.031,0.294-0.031c0.101,0,0.194,0.031,0.294,0.031v-0.062 c15.562-0.317,28.082-12.976,28.082-28.601c0-15.648-12.52-28.299-28.082-28.616v-0.063c-0.101,0-0.194,0.031-0.294,0.031 c-0.1,0-0.193-0.031-0.294-0.031v0.063c-15.563,0.317-28.082,12.968-28.082,28.616C227.623,215.754,240.143,228.413,255.706,228.73 z"/>
			<path className="st0" d="M433.359,118.933c22.887,0,41.423-18.551,41.423-41.414c0-22.887-18.536-41.423-41.423-41.423 c-22.88,0-41.416,18.536-41.416,41.423C391.944,100.382,410.48,118.933,433.359,118.933z"/>
			<path className="st0" d="M470.097,138.553h-36.312h-18.404c-21.106,0-40.432,11.831-50.033,30.622l-33.494,97.967 c-1.154,2.246-3.298,3.84-5.792,4.282c-2.493,0.442-5.048-0.309-6.914-2.036l-20.836-18.04c-6.233-5.769-14.408-8.973-22.902-8.973 H256h-19.41c-8.494,0-16.669,3.204-22.902,8.973l-20.835,18.04c-1.866,1.727-4.421,2.478-6.914,2.036 c-2.492-0.442-4.637-2.036-5.791-4.282l-33.495-97.967c-9.6-18.791-28.926-30.622-50.032-30.622H78.215H41.902 C21.834,138.553,0,160.387,0,180.464v139.211c0,10.034,8.13,18.171,18.164,18.171c4.939,0,0,0,12.682,0l6.906,118.725 c0,10.676,8.664,19.332,19.34,19.332c4.506,0,12.814,0,21.122,0c8.308,0,16.616,0,21.122,0c10.676,0,19.34-8.656,19.34-19.332 l6.906-118.725l-0.085-84.766c0-1.339,0.914-2.493,2.222-2.818c1.309-0.31,2.648,0.309,3.26,1.502l26.572,65.401 c3.206,6.256,9.152,10.654,16.074,11.885c6.922,1.231,14.022-0.844,19.186-5.613l25.426-18.729 c0.852-0.782,2.083-0.984,3.136-0.542c1.061,0.473,1.743,1.518,1.743,2.663l0.093,73.508l4.777,82.187 c0,7.387,6.001,13.379,13.395,13.379c3.113,0,8.865,0,14.618,0c5.753,0,11.506,0,14.618,0c7.394,0,13.394-5.992,13.394-13.379 l4.778-82.187l0.093-73.508c0-1.146,0.681-2.19,1.742-2.663c1.053-0.442,2.284-0.24,3.136,0.542l25.427,18.729 c5.164,4.769,12.264,6.844,19.186,5.613c6.922-1.231,12.868-5.629,16.073-11.885l26.573-65.401 c0.611-1.192,1.951-1.812,3.259-1.502c1.309,0.325,2.222,1.478,2.222,2.818l-0.085,84.766l6.906,118.725 c0,10.676,8.664,19.332,19.341,19.332c4.507,0,12.814,0,21.122,0c8.308,0,16.616,0,21.121,0c10.677,0,19.342-8.656,19.342-19.332 l6.906-118.725c12.682,0,7.742,0,12.682,0c10.034,0,18.164-8.137,18.164-18.171V180.464 C512,160.387,490.166,138.553,470.097,138.553z"/>
		</g>
		</svg>
												</span> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-title">Atendimento Familiar</h4>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
										<div className="feature-container feature-bx1 feature4">
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
								<Link to="/about-us" className="btn btn-primary shadow">Leia mais</Link>
							</div>
						</div>
					</div>
					<img className="pt-img1 animate-wave" src={ptImg1} alt=""/>
					<img className="pt-img2 animate2" src={ptImg2} alt=""/>
					<img className="pt-img3 animate-rotate" src={ptImg5} alt=""/>
					<img className="pt-img4 animate-wave" src={ptImg4} alt=""/>
					<img className="pt-img5 animate2" src={ptImg5} alt=""/>
				</section>
				
			</>
		);
	}
}

export default aboutSection;