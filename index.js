let n = document.querySelectorAll(".g47SY");
let num = n[1].getAttribute("title");
let i = 0;

let seguidores = document.querySelectorAll(".-nal3");
let nseguidores = document.querySelectorAll("g47SY")[1].getAttribute("title");

let comp = 53.98 * nseguidores;
let qtd = comp/647.76;
setTimeout(() => {seguidores[1].click()}, 1000);;

    setInterval(()=>{
        if(i<qtd){
            let div = document.querySelectorAll(".isgrP");
            let pag = div[0];
            pag.scrollBy(0, 647.76);
        }else{
            clearInterval();
        }
        i++
    }, 1010);

pessoas = [];
let arr = document.querySelectorAll("._0imsa");
arr.forEach((a, i) =>{
    let b = a.getAttribute("title");
    pessoas.push(b);
});

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

  