const express = require('express');

const app = express();
app.use(express.json());
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lucasletirillypetit:w0HTB17mhyWuOhL8@cluster0.xay1mbr.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

app.get('/api/books', (req, res, next) => {
   const book = [
   {
      userId : '0000',
      title : 'Titre exemple',
      author : 'Auteur exemple',
      imageUrl : 'https://www.shutterstock.com/image-illustration/book-icon-sign-design-600w-556493968.jpg',
      year: 1966,
      genre: 'Thriller',
      ratings : [
      {
      userId : 'Testreader',
      grade : 5,
      }
      ],
      averageRating : 4
   }
   ];
      
   res.status(200).json(book);
 });


module.exports = app;