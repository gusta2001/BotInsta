    function abrirSeguidores(){
        setTimeout(() => {
            let seguidores = document.querySelectorAll(".-nal3");
            seguidores[1].click()
        }, 1000);
    }

    function fecharSeguidores(){
        setTimeout(() => {
            let fechar = document.querySelectorAll(".WaOAr button");
            fechar[0].click();
        }, 1000);
    }

    function salvarSeguidores(){
        setTimeout(() => {
            seguidores = [];
            let arr = document.querySelectorAll("._0imsa");
            arr.forEach((a, i) =>{
                let b = a.getAttribute("title");
                seguidores.push(b);
            });
        }, 1000);
    }

    function ScrollarSeguidores(){
        setTimeout(() => {   
            let n = document.querySelectorAll(".g47SY");
            let nseguidores = n[1].getAttribute("title");
            let comp = 53.98 * nseguidores;
            let qtd = (comp/701.74);
            let qtdfinal = parseInt(qtd+1, 10);

            let i = 0;
            setInterval(()=>{
                if(i<qtdfinal){
                    let div = document.querySelectorAll(".isgrP");
                    let pag = div[0];
                    pag.scrollBy(0, 701.74);
                    i++
                }else{
                    clearInterval();
                }
            }, 600);
        }, 460);
    }

    function abrirSeguindo(){
        setTimeout(() => {
            let seguidores = document.querySelectorAll(".-nal3");
            seguidores[2].click()
        }, 1000);
    }

    function fecharSeguindo(){
        setTimeout(() => {
            let fechar = document.querySelectorAll(".WaOAr button");
            fechar[0].click();
        }, 1000);
    }

    function salvarSeguindo(){
        setTimeout(() => {
            seguindo = [];
            let arr = document.querySelectorAll("._0imsa");
            arr.forEach((a, i) =>{
                let b = a.getAttribute("title");
                seguindo.push(b);
            });
        }, 1000);
    }

    function ScrollarSeguindo(){
        setTimeout(() => {   
            let n = document.querySelectorAll(".g47SY");
            let nseguindo = n[2].getAttribute("title");
            let comp = 53.98 * nseguindo;
            let qtd = (comp/701.74);
            let qtdfinal = parseInt(qtd+1, 10);

            let i = 0;
            setInterval(()=>{
                if(i<qtdfinal){
                    let div = document.querySelectorAll(".isgrP");
                    let pag = div[0];
                    pag.scrollBy(0, 701.74);
                    i++
                }else{
                    clearInterval();
                }
            }, 600);
        }, 460);
    }

    async function fluxo() {
        await abrirSeguidores();
        await ScrollarSeguidores();
        await salvarSeguidores();
        await fecharSeguidores();
        await abrirSeguindo();
        await ScrollarSeguindo();
        await salvarSeguindo();
        await fecharSeguindo();
    }
    fluxo();
    

pessoas2 = [];
let arr = document.querySelectorAll("._0imsa");
arr.forEach((a, i) =>{
    let b = a.getAttribute("title")
    pessoas2.push(b);
});
    
    
let naoe = [];

for (let i = 0; i < pessoas2.length; i++) {
    let index = 0;           
    while (pessoas2[i].indexOf(pessoas[index]) == -1){
        if(index < 244){   
            console.log(pessoas2[i]+" é "+pessoas[index]);
            index++;
        }else{
            naoe.push(pessoas2[i]);
            i++;
            index = 0;
        }
    } 
}
    
    
    
    


async function daniel() {
    pessoas2.forEach((pessoaseguindo, iseguindo) => {
        let random = Math.floor(Math.random() * (20000 - 10000)) + 10000;
        setTimeout(() => {
            for (let index = 0; index < pessoas.length; index++) {
                if(pessoaseguindo !== pessoas[index]){
                    continue;
                }      
            }
            console.log(pessoas.length-1);
            if(index = pessoas.length-1){
                let list = document.querySelectorAll("button");
                setTimeout(() => {
                    for(let btn of list){
                        if(btn.innerText === 'Seguindo'){
                            btn.click();
                            console.log(iseguindo);
                        }
                        if(btn.innerText === 'Deixar de seguir'){
                            btn.click();
                            console.log(iseguindo);
                        }
                        console.log("Vc deixou de seguir "+pessoaseguindo);
                    }
                }, 5000)                 
            }
        }, random)
    })
}

    setTimeout(daniel, 2000);

    pessoas2.forEach((pessoaseguindo, iseguindo) => {
            if(index = pessoas.length-1){
                let list = document.querySelectorAll("button");
                setTimeout(() => {
                    for(let btn of list){
                        if(btn.innerText === 'Seguindo'){
                            btn.click();
                            console.log(iseguindo);
                        }
                        if(btn.innerText === 'Deixar de seguir'){
                            btn.click();
                            console.log(iseguindo);
                        }
                        console.log("Vc deixou de seguir "+pessoaseguindo);
                    }
                }, 5000)                 
            }
        }, random)
    })


    pessoas2.forEach((pessoaseguindo, iseguindo) => {
        let random = Math.floor(Math.random() * (20000 - 10000)) + 10000;
        setTimeout(() => {
            for (let index = 0; index < pessoas.length; index++) {
                if(pessoaseguindo !== pessoas[index]){
                    continue;
                }      
            }
        }, random)
    })



    async function david() {
        let random = Math.floor(Math.random() * (20000 - 10000)) + 10000;
         let contador = 0;
         let arr = document.querySelectorAll(".L3NKy");
         arr.forEach((v, i) => {
             setTimeout(() => {
             if(!v.classList.contains('ZIAjV')){
                  for (let index = 0; index < pessoas2.length; index++) {
                       
              }
              }
          }, i * random)
      })
  }

  