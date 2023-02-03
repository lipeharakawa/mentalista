var jogar = prompt("Quer jogar?(s/n)");
if(jogar == "s"){
  
  var numeroSecreto = parseInt(Math.random() * (101 - 1) + 1);
  var iterador = 0;

  while(chute != numeroSecreto){
    
    if(iterador != 0){
      alert("Você já fez " + iterador + " tentativas!")
    }
    
    var chute = prompt("Digite um número entre 1 e 100");
    
    if (chute == numeroSecreto){
      alert("Acertou! ✅");
    } else if (chute > numeroSecreto){
         alert("Errou! ❌ O número secreto é menor que " + chute);
    } else if (chute < numeroSecreto){
         alert("Errou! ❌ O número secreto é maior que " + chute);
    }
    
    iterador += 1;
  }
}
