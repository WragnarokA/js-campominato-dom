
document.getElementById("playBtn").addEventListener("click", initGame );
function initGame (){

    const  grid = createElement("div", "grid", "")
    
    let difficolta = document.getElementById("difficolta").value;
    let numeroDiCellePerLato = Math.ceil( Math.sqrt(difficolta) );
    let dimensione = `calc(100% / ${numeroDiCellePerLato})`
    
    let quantitaBombe = 16;
    let bombe = generaBombe(quantitaBombe, difficolta);
    console.log(bombe);
    let punteggio = 0;
    writeToElement("risultato", `Il tuo punteggio é: ${punteggio}`)
    let gameOver = false;


    for (let i = 0; i < difficolta; i++) {
        const cella = createElement("div", "square", i+1  );
        cella.style.width = dimensione;
        cella.style.height = dimensione;
        
        cella.addEventListener("click", function() {
            if (gameOver==false) {
                let cellaCliccata = i+1;
                if (bombe.includes(cellaCliccata)) {
                    this.classList.add("red");
                    writeToElement("risultato", `Hai perso il tuo punteggio é: ${punteggio}`);
                    scopriBombe(bombe);
                    gameOver = true;
                } else {
                    this.classList.add("aquamarine");
                    punteggio++;
                    writeToElement("risultato", `Il tuo punteggio é: ${punteggio}`)
                    
                    if (punteggio == difficolta - quantitaBombe) {
                        writeToElement("risultato", `HAI VINTO! il tuo punteggio é ${punteggio}`)
                    }
                }

                        
                
            } else {
                console.log(`La partita è finita ${punteggio}`);
                
            }
        });
                
                
        
        grid.appendChild(cella)
    }
        
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(grid);
    

}    

function createElement(tagHtml, classe, contenuto) {
    const cell = document.createElement(tagHtml);
    cell.classList.add(classe);
    cell.innerText = contenuto;
    return cell;
}

function writeToElement(elementId, content) {
    document.getElementById(elementId).innerText = content;
}
        
function getRandomNumber(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}
    
function generaBombe(numeroDiBombe, numeroDiCelle) {
    let bombe = [];
    while (bombe.length < 16) {
        let nuovoNumero = getRandomNumber(1, numeroDiCelle);
       
        if (bombe.includes(nuovoNumero) == false) {
            bombe.push(nuovoNumero);
      
        }
        
    }
    return bombe;
        
}


function scopriBombe(bombe){
    let celle = document.getElementsByClassName("square");

    for (let i = 0; i < celle.length; i++) {
        const cella = celle[i];

        if (bombe.includes(i+1)) {
            cella.classList.add("red")   
        } else {
            cella.classList.add("aquamarine")
        }
    }
}

            
        

            
    
 

        
        
   
 
    

















