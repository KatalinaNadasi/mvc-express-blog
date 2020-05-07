
const Post = require('../models/Post');

const showAllPosts = (req, res, next) => {
  Post.getAll((err, results) => {
    if (err) {
        res.status(500).send('Erreur lors de la récupération des employés');
    } else {
      let titleBlog = []
      let contentBlog = []
      results.map(result => {
        titleBlog.push(result.title);
        contentBlog.push(result.content);
      })
        res.render('layout', { titleBlog, contentBlog });
    }
  })
};



module.exports = {showAllPosts}
