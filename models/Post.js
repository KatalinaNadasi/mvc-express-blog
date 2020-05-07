const connection = require('../config.js')

const Post = {};

Post.getAll = (callback) => {
  connection.query('SELECT * from posts',
  (err, results) => {
    callback(err, results);
  });
}

module.exports = Post;
