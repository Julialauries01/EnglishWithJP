import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import testShape from "../../images/testimonials/shape.png"
/*import testPic1 from "../../images/testimonials/pic1.jpg" */
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import testPic4 from "../../images/testimonials/pic4.jpg"
import testPic8 from "../../images/testimonials/pic8.jpg"
import testPic5 from "../../images/testimonials/pic5.jpg"
import testPic6 from "../../images/testimonials/pic6.jpg"
import plusOrange from "../../images/shap/plus-orange.png"
import squareBlue from "../../images/shap/square-blue.png"
import circleDots from "../../images/shap/circle-dots.png"
import circleOrange2 from "../../images/shap/circle-orange-2.png"

class testimonialSection extends Component{
	
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
				<section className="section-area section-sp3 testimonial-wraper">
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Depoimentos</h6>
							<h2 className="title m-b0">Veja o que meus alunos <br/>dizem sobre mim</h2>
						</div>
						<div className="row align-items-center">
							<div className="col-lg-6 text-center">
								<div className="thumb-wraper">
									<img className="bg-img" src={testShape} alt=""/>
									<ul>
										<li data-member="1"><Link to="#"><img src={testPic3} alt=""/></Link></li>
										<li data-member="2"><Link to="#"><img src={testPic2} alt=""/></Link></li>
										<li data-member="3"><Link to="#"><img src={testPic4} alt=""/></Link></li>
										<li data-member="4"><Link to="#"><img src={testPic8} alt=""/></Link></li>
										<li data-member="5"><Link to="#"><img src={testPic5} alt=""/></Link></li>
										<li data-member="6"><Link to="#"><img src={testPic6} alt=""/></Link></li>
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<Slider {...settings} className="testimonial-slide">
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>As aulas com o João Pedro são diferenciadas para mim, pois minhas dificuldades são
trabalhadas individualmente e não tenho que ficar esperando outros alunos me
alcançarem ou eu alcançar outros alunos.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Bruno</h5>
												<p>Chefe de Setor Financeiro | São Paulo</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Minha evolução nas aulas se deve a metodologia que ele usa de "falar sempre em inglês"
vejo que a cada aula eu me sinto mais tranquilo falando inglês, me sinto mais curioso,
mais receptivo a novas informações e isso me alegra muito.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Raphael</h5>
												<p>Treinador esportivo de escolas bilíngues | São Paulo</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p>Nas aulas com o João, consigo tirar minhas dúvidas, consigo evoluir gradualmente com
o tempo que eu preciso, não preciso pular etapas, e percebo que a cada aula eu evoluo
mais.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Vinicius Souza da Cruz</h5>
												<p>Professor em escolas bilíngues | São Paulo </p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p> Foi por meio das aulas com o João que consegui o certificado internacional Cambridge
em inglês. E isso, eu agradeço a ele.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Everton Gustavo</h5>
												<p>Major do Exército | São Paulo</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									
									<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p> Eu gosto do ambiente das aulas porque é mais confortável de se conversar e aprender. 
													Com as aulas online eu consigo aprender mais.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Rodrigo</h5>
												<p>Acadêmico de Engenharia Elétrica | São Paulo </p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>

										<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p> A logística da aula e a forma que o João ministra são sensacionais! Temas diversos, muita
aplicabilidade no dia a dia e muita coisa da minha própria rotina.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Bernardo Possidente</h5>
												<p>Professor de Educação Física e Treinador Esportivo | São Paulo</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>
									

										<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p> O professor é paciente e sempre incentiva a prática, o que ajuda muito.</p>
											</div>
											<div className="client-info">
												<h5 className="name">Alberto Junior</h5>
												<p>Professor de Educação Física | São Gonçalo, RJ</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>


										<div className="slider-item">
										<div className="testimonial-bx">
											<div className="testimonial-content">
												<p> O João é divertido, atencioso e compreensivo, ele tornando as aulas um momento não só de aprendizado como também de descontração, tornando mais facil continuar nesse processo de aprendizado</p>
											</div>
											<div className="client-info">
												<h5 className="name">Julia</h5>
												<p>Engenheira de Software | Jaraguá do Sul, SC</p>
											</div>
											<div className="quote-icon">
												<i className="fas fa-quote-left"></i>
											</div>
										</div>
									</div>

								</Slider>
							</div>	 
						</div>	 
					</div>
					<img className="pt-img1 animate1" src={plusOrange} alt=""/>
					<img className="pt-img2 animate2" src={squareBlue} alt=""/>
					<img className="pt-img3 animate3" src={circleDots} alt=""/>
					<img className="pt-img4 animate4" src={circleOrange2} alt=""/>
				</section>
				
			</>
		);
	}
}

export default testimonialSection;