const calculateLoan = () => {

    let emprestimo = document.getElementById("valor").value;
    let taxa = document.getElementById("taxa").value/100;
    let prazo = parseInt(rangeValue.innerText);
    let capacidade_mensal = document.getElementById("salario").value*0.3;

    let pagamentoMensal = -formulajs.PMT(taxa,prazo,emprestimo,0,0) + (emprestimo*0.02/prazo)+(emprestimo*0.02/prazo)*0.02+((-formulajs.CUMIPMT(taxa,prazo,emprestimo,1,prazo,0))/prazo*0.02)+0.5/1000*emprestimo;

    let pagamentoTotal = pagamentoMensal*prazo;    
    let taxaTotal = pagamentoTotal-emprestimo;
    
    if(capacidade_mensal >= pagamentoMensal){
        document.getElementById("result").innerHTML = `
                    <h2>Plano de pagamento : </h2>
                    <h4>Pagamento Total : ${parseFloat(pagamentoTotal).toFixed(2)}</h4> 
                    <h4>Pagamento Mensal : ${parseFloat(pagamentoMensal).toFixed(2)}</h4>
                    <h4>Taxa Total : ${parseFloat(taxaTotal).toFixed(2)}</h4>`;
    }else{
        document.getElementById("result").innerHTML = `
                    <h2>Não tem salário suficiente para o crédito!</h2>`;
    }
    
}

const meses = [3,6,9,12,15,18,24,36,48,60,72,84];
const taxas = [6.746,	6.746,	6.746,	8.450,	6.534,	6.249,	5.982,	5.714,	5.510,	5.438,	4.992,	4.992];

const slider = document.getElementById('input_slider'),
    update_taxa = document.getElementById('taxa');

slider.oninput = function() {
    rangeValue.innerText = meses[this.value];
    update_taxa.value=taxas[this.value];
};

// set the default value
slider.oninput();