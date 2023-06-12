import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat = ?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q = "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const addPost = (_, res) => {
  const q =
    "INSERT INTO users(`id`,`title`,`desc`,`img`,`date`,`uid`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.title,
    req.body.desc,
    req.body.img,
    req.body.date,
    req.body.uid,
  ];

  db.query(q, [values], (err, _) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Post has been created.");
  });
};

export const deletePost = (req, res) => {
  const postId = req.params.id;
  const q = "DELETE FROM posts WHERE id = ?";

  db.query(q, [postId], (err, _) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Post has been deleted.");
  });
};

export const updatePost = (req, res) => {
  const postId = req.params.id;
  const q = "UPDATE posts SET `title` = ?, `desc` = ?, `img` = ? WHERE id = ?";
  const values = [req.body.title, req.body.desc, req.body.img];

  db.query(q, [...values, postId], (err, _) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Post has been updated.");
  });
};
