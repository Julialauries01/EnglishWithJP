import React, { Component } from "react";

class AppointmentForm extends Component {
  state = {
    submitted: false,
  };

  handleSubmit = () => {
    // Quando o formulário é enviado, atualizamos o estado
    this.setState({ submitted: true });

    // Opcional: limpar o formulário após envio automático
    setTimeout(() => {
      this.setState({ submitted: false });
      document.querySelector("form").reset();
    }, 5000); // Mensagem some após 5 segundos
  };

  render() {
    const { submitted } = this.state;

    return (
      <div className="appointment-form form-wraper">
        <h3 className="title">Agende sua aula</h3>

        {submitted && (
          <div className="alert alert-success">
            Formulário enviado com sucesso! Entraremos em contato.
          </div>
        )}

        <form
          method="post"
          action="https://api.sheetmonkey.io/form/oniauWKMqKETmYLZ5JUXaB"
          onSubmit={this.handleSubmit}
        >
          {/* Campos ocultos */}
          <input
            type="hidden"
            name="Created"
            value="x-sheetmonkey-current-date-time"
          />
          {/* Professor fixo */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value="Professor João Pedro"
              readOnly
            />
          </div>

          {/* Nome */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="Name"
              placeholder="Seu nome"
              required
            />
          </div>

          {/* Telefone */}
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              name="Number"
              placeholder="Número de telefone"
              required
            />
          </div>

          {/* Observações */}
          <div className="form-group">
            <textarea
              className="form-control"
              name="Observations"
              rows="4"
              placeholder="Caso queira, você pode nos contar um pouco sobre você: por que quer aprender inglês, se já estudou antes e qual nível acredita ter atualmente?"
            ></textarea>
          </div>

          {/* Botão de envio */}
          <input
            type="submit"
            className="btn btn-secondary btn-lg"
            value="Agendar Aula"
          />
        </form>
      </div>
    );
  }
}

export default AppointmentForm;
