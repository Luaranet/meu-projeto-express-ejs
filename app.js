const express = require('express');
const app = express();
const port = 3000;

const produtos = [ 
  {id: 1, nome: "iron man", preco:"4.499,00", descricao:"ndfkshf", imagem:"produto.jpg"},
  {id: 2, nome: "mulher maravilha", preco:"4.999,00", descricao:"ndfkshf", imagem:"produto.jpg"},
  {id: 3, nome: "the flash", preco:"4.999,00", descricao:"ndfkshf", imagem:"produto.jpg"},
  {id: 4, nome: "super girl", preco:"8.599,00", descricao:"ndfkshf", imagem:"produto.jpg"},
  {id: 5, nome: "super man", preco:"5.999,00", descricao:"ndfkshf", imagem:"produto.jpg"},
  {id: 6, nome: "arrow", preco:"2.999,00", descricao:"ndfkshf", imagem:"produto.jpg"},
  {id: 7, nome: "power ranger", preco:"1.999,00", descricao:"ndfkshf", imagem:"produto.jpg"},
  {id: 8, nome: "homem aranha", preco:"5,999,00", descricao:"ndfkshf", imagem:"produto.jpg"},
  {id: 9, nome: "loki", preco:"2.999,00", descricao:"ndfkshf", imagem:"produto.jpg"},
  {id: 10, nome: "feiticeira escarlate", preco:"5.999,00", descricao:"ndfkshf", imagem:"produto.jpg"},
]


function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id = id);
  return produto || null 
  }


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Lojinha da Lua' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
