// Crie a variável com nome e quantidade de experiência (XP) do herói:
let nomeDoHeroi = "John"
let xpDoHeroi = 9700

// Descrever os níveis de experiência do herói utilizando os operadores de comparação, lógico e estrutura de descisão switch case e default:
let nivelDoHeroi;
switch (xpDoHeroi) {case xpDoHeroi < 1000: nivelDoHeroi = "Ferro"; 
break;
case xpDoHeroi >= 1001 && xpDoHeroi <= 2000: nivelDoHeroi = "Bronze";
break;
case xpDoHeroi >= 2001 && xpDoHeroi <= 5000: nivelDoHeroi = "Prata";
break;
case xpDoHeroi >= 5001 && xpDoHeroi <= 7000: nivelDoHeroi = "Ouro";
break;
case xpDoHeroi >= 7001 && xpDoHeroi <= 8000: nivelDoHeroi = "Platina Diamante";
break;
case xpDoHeroi >= 8001 && xpDoHeroi <= 9000: nivelDoHeroi = "Ascendente";
break;
case xpDoHeroi >= 9001 && xpDoHeroi <= 1000: nivelDoHeroi = "Imortal";
break;
default:
    nivelDoHeroi = "Radiante"
}

// Saída: Deve aparacer a mensagem com o nome do herói e o nível:
console.log ("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);

