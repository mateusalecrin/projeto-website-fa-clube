function validaFaleConosco() {

	var nome = document.forminscrevase.txtnome.value;
	var expRegNome = new RegExp("^[MCS]{1}[ai]{1}[trl]{1}[elv]{1}[uoi]{1}[so]{1}[ ]{1}[BUS]{1}[rco]{1}[uh]{1}[noz]{1}[oa]{1}$");

	if (!expRegNome.test(nome)) {
		alert ("Preencha corretamente o campo Nome!");
		document.forminscrevase.txtnome.focus();
		return false;
	}

	if (document.forminscrevase.txtdata.value=="") {
		alert ("Preencha corretamente a data de nascimento!")
		document.forminscrevase.txtdata.focus();
		return false;	
	}
	
	var fone = document.forminscrevase.txtfone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

	if (!expRegFone.test(fone)) {
		alert ("Preencha corretamente o campo Telefone!");
		document.forminscrevase.txtfone.focus();
		return false;
	}
	
	if (document.forminscrevase.txtemail.value=="") {
		alert ("Preencha o campo Email!");
		document.forminscrevase.txtemail.focus();
		return false;
	}
	
	if ((document.forminscrevase.txtsexo[0].checked==false) && (document.forminscrevase.txtsexo[1].checked==false)) {
		alert ("Masculino ou Feminino? Escolha seu sexo.");
		return false;
	}
	
	if (document.forminscrevase.txtcheckbox.checked==false) {
		alert ("Marque a checkbox para concluir o formulário.")
		document.forminscrevase.txtcheckbox.focus();
		return false
	} else {
		alert ("Formulário enviado.");
	}
	
	return true;		
}
// Fim da função validaFaleConosco()

// Assim que o documento HTML for carregado por completo...
$(document).ready(function() {
	// Carrega cabeçalho, menu e rodapé nos respectivos locais
	$("header").load("/Projeto_Fã-Clube/pages/site/general/cabecalho.html");
	$("footer").load("/Projeto_Fã-Clube/pages/site/general/rodape.html");
});