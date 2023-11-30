const express = require('express');
const app = express();
const port = 3000;

const produtos = [ 
  {id: 1, nome: "Iron Man", preco:"4.499,00", descricao:"boneco de ação do heroi filantropo Homem de ferro", imagem:"imagens_projeto/ironMan.jpg"},
  {id: 2, nome: "Mulher Maravilha", preco:"4.999,00", descricao:"boneco de ação da heroina semi deusa, Mulher Maravilha", imagem:"imagens_projeto/mulherMaravilha.jpg"},
  {id: 3, nome: "The Flash", preco:"4.999,00", descricao:"boneco de ação do heroi, velocista escarlate, The Flash", imagem:"imagens_projeto/TheFlash.jpg"},
  {id: 4, nome: "Super Girl", preco:"8.599,00", descricao:"boneco de ação da heroina alienigena, Super girl", imagem:"imagens_projeto/supergirl.webp"},
  {id: 5, nome: "super man", preco:"5.999,00", descricao:"boneco de ação do heroi alienigena, Super Man", imagem:"imagens_projeto/superMan.jpg"},
  {id: 6, nome: "arrow", preco:"2.999,00", descricao:"boneco de ação do heroi, Arqueior verde, Arrow", imagem:"imagens_projeto/arrow.jpg"},
  {id: 7, nome: "power ranger", preco:"1.999,00", descricao:"bonecos de ação do grupo de herois, Power Rangers", imagem:"imagens_projeto/rangerPreto.webp"},
  {id: 8, nome: "homem aranha", preco:"5,999,00", descricao:"boneco de ação do heroi, amigo da vizinhança, Homem Aranha", imagem:"imagens_projeto/aranha.webp"},
  {id: 9, nome: "loki", preco:"2.999,00", descricao:"boneco de ação do Anti heroi, deus da mentira, Loki", imagem:"imagens_projeto/loki.webp"},
  {id: 10, nome: "feiticeira escarlate", preco:"5.999,00", descricao:"boneco de ação da feiticeira mais poderosa do multiverso, Feiticeira Escarlate", imagem:"imagens_projeto/feiticeira.webp"},
]


function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id);
  return produto || null 
  }


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { produtos });
});

app.get('/produtos/:id', (req, res) => {
  const produto = buscarProdutoPorID(req.params.id)
  res.render('produtos', { produto });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
