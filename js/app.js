let valorTotal;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let produtoNome = produto.split('-')[0];
    let produtoValor = produto.split('R$')[1];
    let quantidade =  document.getElementById('quantidade').value;

    let subTotal = produtoValor * quantidade;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + ` 
    <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${produtoNome} <span class="texto-azul">R$${subTotal}</span>
    </section>`

    valorTotal = valorTotal + subTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML =  '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}