module.exports = (pool) => {
  const uploadImages = (file) => {
    const { originalname, mimetype, filename, path, size } = file;
    return pool
      .query(
        `INSERT INTO images (original_name, file_name, file_path, mime_type, size)
        VALUES($1, $2, $3, $4, $5) RETURNING *;`,
        [originalname, filename, path, mimetype, size]
      )
      .then((response) => {
        return response.rows[0];
      })
      .catch((error) => {
        return error;
      });
  };
  const getAllImages = () => {
    return pool
      .query(`SELECT * FROM images;`)
      .then((response) => {
        return response.rows;
      })
      .catch((error) => {
        return error;
      });
  };
  return {
    uploadImages,
    getAllImages,
  };
};
