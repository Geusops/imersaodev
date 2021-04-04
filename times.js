//variaveis
var timeSelecionado;
var imagem;
var elem;
var opcao = document.getElementById("opcao");
var nomeDeTimes

//funcao que verifica se um logo foi selecionado
function verificaLogo(){
	if (timeSelecionado == null){
		document.getElementById("resultadoFinal").innerHTML = "Você precisa escolher um time na esquerda";
	}else{
		document.getElementById("resultadoFinal").innerHTML = "Você escolheu errado,\nTente novamente!";
	}
}

function criaImagem(){
	elem.setAttribute("height", "auto");
	elem.setAttribute("width", "100%");
	elem.setAttribute("alt", "Flower");
	elem.setAttribute("margin-left","auto");
	elem.setAttribute("display","block");
	elem.setAttribute("id","opcao");//adicao de alguns atributos de formatacao e identificacao do elemento
	document.getElementById("quadroEsq").appendChild(elem);//impressao do elemento criado
	opcao = document.getElementById("opcao");//atribuindo o elemento a uma variavel para validacao, caso selecione outra e para remove com a funcao de remocao
}
//bloco de funcao para o botao do tela da esquerda
function submeter(){
	//selecao do time
  timeSelecionado = document.getElementById("carros").value;
  //checando de a opcao selecionada eh diferente de 0, ou seja,
  //ele precisa necessariamente escolher um time para prosseguir
  if (timeSelecionado == "t0"){
    alert ("selecione um time");
    opcao.remove();//apaga a imagem, caso haja
  }else if(timeSelecionado == "t1"){
	if (opcao){		//validada se já existe uma imagem impressa, se sim ele apagar e cria a nova imagem
		opcao.remove();
		elem = document.createElement("img");//criando o elemento 
		elem.setAttribute("src", "https://logodownload.org/wp-content/uploads/2016/09/sao-paulo-logo-escudo-1.png");
		criaImagem();
	}else{
		elem = document.createElement("img");
		elem.setAttribute("src", "https://logodownload.org/wp-content/uploads/2016/09/sao-paulo-logo-escudo-1.png");
		criaImagem();
	  }
  }else if(timeSelecionado == "t2"){
    if (opcao){
      opcao.remove();
	  elem = document.createElement("img");
      elem.setAttribute("src", "https://logodetimes.com/times/corinthians/logo-do-corinthians-2048.png");
      criaImagem();
    }else{
      elem = document.createElement("img");
      elem.setAttribute("src", "https://logodetimes.com/times/corinthians/logo-do-corinthians-2048.png");
      criaImagem();
    }
  }else if(timeSelecionado == "t3"){
    if (opcao){
      opcao.remove();
	  elem = document.createElement("img");
      elem.setAttribute("src", "https://i.pinimg.com/originals/92/cf/8b/92cf8b8a2648f21a733540c25439197c.png");
      criaImagem();
    }else{
      elem = document.createElement("img");
      elem.setAttribute("src", "https://i.pinimg.com/originals/92/cf/8b/92cf8b8a2648f21a733540c25439197c.png");
      criaImagem();
    }
  }else if(timeSelecionado == "t4"){
    if (opcao){
      opcao.remove();
	  elem = document.createElement("img");
      elem.setAttribute("src", "https://i.pinimg.com/originals/2c/07/8c/2c078c673f6ec2b98116b90ebe14a81f.png");
      criaImagem();
    }else{
      elem = document.createElement("img");
      elem.setAttribute("src", "https://i.pinimg.com/originals/2c/07/8c/2c078c673f6ec2b98116b90ebe14a81f.png");
      criaImagem();
    }
  }else{
    alert("nada");
  }
}

//bloco de funcao apos selecionar o time no lado esquerdo
//e tambem da comparacao dos dois valores
function comparacao(){
	nomeDeTimes = document.getElementsByName("osTimes");//selecionando o objecto input pelo nome
	//aqui ele faz uma varredura no objeto para verificar qual opcao está selecionada
    for (var i = 0; i < nomeDeTimes.length; i++) {
        if (nomeDeTimes[i].checked) {
            //alert("Escolheu: " + nomeDeTimes[i].value);
			if(timeSelecionado == "t0"){
				alert("Por favor, escolha time time no lado esquerdo");
			}else if (nomeDeTimes[i].value == "palmeiras" && timeSelecionado == "t3"){
				document.getElementById("resultadoFinal").innerHTML = "Parabéns\nVocê acertou!";
				return;
			}else if (nomeDeTimes[i].value == "palmeiras" && timeSelecionado != "t3"){
				verificaLogo();//funcao que verifica se um logo foi selecionado
			}else if (nomeDeTimes[i].value == "santos" && timeSelecionado == "t4"){
				document.getElementById("resultadoFinal").innerHTML = "Parabéns\nVocê acertou!";
				return;
			}else if (nomeDeTimes[i].value == "santos" && timeSelecionado != "t4"){
				verificaLogo();//funcao que verifica se um logo foi selecionado
			}else if (nomeDeTimes[i].value == "saopaulo" && timeSelecionado == "t1"){
				document.getElementById("resultadoFinal").innerHTML = "Parabéns\nVocê acertou!";
				return;
			}else if (nomeDeTimes[i].value == "saopaulo" && timeSelecionado != "t1"){
				verificaLogo();//funcao que verifica se um logo foi selecionado
			}else if (nomeDeTimes[i].value == "corinthians" && timeSelecionado == "t2"){
				document.getElementById("resultadoFinal").innerHTML = "Parabéns\nVocê acertou!";
				return;
			}else if (nomeDeTimes[i].value == "corinthians" && timeSelecionado != "t2"){
				verificaLogo();//funcao que verifica se um logo foi selecionado
			}
        }
    }
}
