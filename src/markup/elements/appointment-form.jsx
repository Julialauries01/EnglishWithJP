import React, { Component } from 'react';

// Função para lidar com a submissão do formulário

class AppointmentForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const formEle = document.querySelector("form-group");
		const formData = new FormData(formEle);
		console.log("Formulário enviado", formData);
	
		fetch("https://script.google.com/macros/s/AKfycbw99F_zjQtTU21Jn8M-Hu32lEkhy4mB10BVGaxRK-FVHbf422sWOwz38WBfSf4Gbb_8bg/exec", {
				method: "POST",
				body: formData
		})
	}
    render() {
        return (
            <>
                <div className="appointment-form form-wraper">
                    <h3 className="title">Solicitar Agendamento</h3>
                    <div className="form-group">
                        <select className="form-select form-control">
                            <option defaultValue>Agendamento</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-select form-control">
                            <option defaultValue>Psicóloga Edineia</option>
                        </select>
                    </div>
                    <form method="post" action="https://api.sheetmonkey.io/form/tjL8nGTNCXwcDEhkFCsoYH" className="form">
                        <div className="form-group" >
                            <input type="text" className="form-control" name="Name" placeholder="Seu nome" />
                            <input type="text" className="form-control" name="Email" placeholder="Número de telefone" />
                            <input type="submit" className="btn btn-secondary btn-lg"/>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default AppointmentForm;
