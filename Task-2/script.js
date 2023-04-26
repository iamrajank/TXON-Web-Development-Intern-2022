let btns = document.querySelectorAll(".num-button");
        let allBtns = document.querySelectorAll(".button");
        let resultBox = document.querySelector("#result-box");
        let clearBtn = document.querySelector('#clear');
        let curClr=document.querySelector('#curr-clr');
        let total = document.querySelector("#total");

        let btnSpread = [...btns];
        let allBtnSpread = [...allBtns];
        btnSpread.forEach((button, i) => {
            button.addEventListener("click", () => {

                if (resultBox.innerHTML == "0") {
                    resultBox.innerHTML = "";
                }

                var eqn=resultBox.innerHTML;
                console.log(eqn.length);
                if((eqn[eqn.length-1]=="/" ||eqn[eqn.length-1]=="+" ||eqn[eqn.length-1]=="-"|| eqn[eqn.length-1]=="*" ||eqn[eqn.length-1]=="%") && (btns[i].innerHTML=="/" || btns[i].innerHTML=="+" || btns[i].innerHTML=="-" || btns[i].innerHTML=="*" || btns[i].innerHTML=="%")){
                
                    var ans="";
                    for(let i=0;i<eqn.length-1;i++){
                          ans+=eqn[i];
                    }
                    ans+= btns[i].innerHTML;
                    resultBox.innerHTML = ans;
                }else{
                    
                    let value = btns[i].innerHTML;
                    resultBox.innerHTML += value;
                }
                 
            });
        });
        function evaluate(fn) {
            return new Function('return ' + fn)();
        }
        total.addEventListener('click', () => {
            let allInputs = resultBox.innerHTML;
            resultBox.innerHTML = evaluate(allInputs);
            console.log(evaluate(allInputs));
        })
        clearBtn.addEventListener('click', () => {
            resultBox.innerHTML = "0";
        })
        curClr.addEventListener('click',()=>{
            var eqn=resultBox.innerHTML;
            console.log(eqn);
            console.log(eqn.length);
            var ans="";
            if(eqn.length>0){
                for(let i=0;i<eqn.length-1;i++){
                    ans+=eqn[i];
                }
                resultBox.innerHTML=ans;
            }  
        })
