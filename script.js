// Atualiza o relogio da pagina no formato HH:MM:SS.
function atualizarRelogio() {
	const agora = new Date();
	const horas = String(agora.getHours()).padStart(2, "0");
	const minutos = String(agora.getMinutes()).padStart(2, "0");
	const segundos = String(agora.getSeconds()).padStart(2, "0");

	const relogioElemento = document.getElementById("relogio");
	if (relogioElemento) {
		relogioElemento.innerHTML = `${horas}:${minutos}:${segundos}`;
	}
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

// Exibe o modal de promocao alguns segundos apos o carregamento da pagina.
window.addEventListener("load", function () {
	setTimeout(function () {
		const modalElemento = document.getElementById("promoModal");
		if (modalElemento && window.bootstrap) {
			const modalPromocao = new bootstrap.Modal(modalElemento);
			modalPromocao.show();
		}
	}, 5000);
});

const formularioAgendamento = document.getElementById("formAgendamento");
if (formularioAgendamento) {
	// Intercepta o envio do formulario e mostra o popup de confirmacao.
	formularioAgendamento.addEventListener("submit", function (event) {
		event.preventDefault();

		const modalAgendamento = document.getElementById("agendamentoModal");
		const modalMensagem = document.getElementById("agendamentoModalMensagem");

		if (modalMensagem) {
			modalMensagem.textContent = "Agendamento realizado com sucesso!";
		}

		if (modalAgendamento && window.bootstrap) {
			const popupConfirmacao = bootstrap.Modal.getOrCreateInstance(modalAgendamento);
			popupConfirmacao.show();
		}
	});
}
