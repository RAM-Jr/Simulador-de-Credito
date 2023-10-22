const calculateLoan = () => {

    let emprestimo = document.getElementById("valor").value;
    let taxa = document.getElementById("taxa").value/100;
    let prazo = document.getElementById("meses").value;
    
    let pagamentoMensal = -formulajs.PMT(taxa,prazo,emprestimo,0,0) + (emprestimo*0.02/prazo)+(emprestimo*0.02/prazo)*0.02+((-formulajs.CUMIPMT(taxa,prazo,emprestimo,1,prazo,0))/prazo*0.02)+0.5/1000*emprestimo;

    let pagamentoTotal = pagamentoMensal*prazo;    
    let taxaTotal = pagamentoTotal-emprestimo;
    
    document.getElementById("result").innerHTML = `
                    <h2>Plano de pagamento : </h2>
                    <h4>Pagamento Total : ${parseFloat(pagamentoTotal).toFixed(2)}</h4> 
                    <h4>Pagamento Mensal : ${parseFloat(pagamentoMensal).toFixed(2)}</h4>
                    <h4>Taxa Total : ${parseFloat(taxaTotal).toFixed(2)}</h4>`;
}
