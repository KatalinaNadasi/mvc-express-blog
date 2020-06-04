const express = require('express');
const connection = require('../config');
const { showAllPosts } = require('../controllers/blogs-controller')

const postsrouteur = express.Router();

postsrouteur.get('/posts', showAllPosts)

// postsrouteur.get('/posts', (req, res) => {
//   connection.query('SELECT * from posts', (err, results) => {
//     if (err) {
//         res.status(500).send('Erreur lors de la récupération des employés');
//     } else {
//       let titleBlog = []
//       let contentBlog = []
//       results.map(result => {np
//         titleBlog.push(result.title)
//         contentBlog.push(result.content);
//       })
//       res.render('layout', titleBlog, contentBlog);
//     }
//   });
// })

postsrouteur.post('/posts/new', (req, res) => {
  const formData = {
    title: req.body.title,
    content: req.body.content,
  }

  connection.query('INSERT INTO posts SET ?', formData, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la sauvegarde d'un employé");
    } else {
      res.sendStatus(200);
    }
  });
});

postsrouteur.put('/posts/:id/edit', (req, res) => {
  const idPost = req.params.id
  const formData = {
    title: req.body.title,
    content: req.body.content,
  }

  connection.query('UPDATE POSTS SET ? WHERE id=?', [formData, idPost], err => {
    if (err) {
      console.log(err)
      res.status(500).send("Erreur lors de la modification d'un employé")
    } else {
      res.sendStatus(200)
    }
  })
})

module.exports = postsrouteur;
