import React, {Component} from 'react';
import { Link, useParams } from 'react-router-dom';
import { BookOpen, MessageCircle, Laptop, Headphones, Globe } from "lucide-react";



// Elements



// Import Images

import blogDefaultPic1 from "../../images/blog/default/pic2.jpg";
import blogDefaultPic4 from "../../images/blog/default/pic4.jpg";
import image3 from "../../images/gallery/pic3.jpg";
import image4 from "../../images/gallery/pic4.jpg";
import testPic1 from "../../images/testimonials/pic1.jpg";
import image1 from "../../images/gallery/pic1.jpg";
import image2 from "../../images/gallery/pic2.jpg";



const BlogDetails = () => {
  const items = [
    {
      icon: <MessageCircle className="w-8 h-8 text-red-600" />,
      title: "Interação e Comunicação",
      text: "Metodologia interacional e comunicativa, com foco na conversação e prática real do inglês."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Aprendizado Contextualizado",
      text: "O inglês é aprendido de forma significativa, dinâmica e personalizada, respeitando seu ritmo."
    },
    {
      icon: <Laptop className="w-8 h-8 text-red-600" />,
      title: "Recursos Modernos",
      text: "Uso de ferramentas digitais e tecnologia para tornar a aprendizagem mais imersiva e eficaz."
    },
    {
      icon: <Headphones className="w-8 h-8 text-blue-600" />,
      title: "Imersão Completa",
      text: "Trabalhamos fala, escuta, leitura e escrita, sempre com interação como ponto central."
    },
    {
      icon: <Globe className="w-8 h-8 text-red-600" />,
      title: "Mais do que Regras",
      text: "Aprender inglês é se comunicar, entender culturas e explorar novas possibilidades."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Minha Metodologia
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Aulas práticas, dinâmicas e personalizadas para transformar sua relação com o inglês.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;