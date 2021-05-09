module.exports = (pool) => {
  const uploadImages = (file) => {
    console.log("file inside index: ", file);
    const { originalname, mimetype, filename, path, size } = file;
    return pool
      .query(
        `INSERT INTO images (original_name, file_name, file_path, mime_type, size)
        VALUES($1, $2, $3, $4, $5) RETURNING *;`,
        [originalname, filename, path, mimetype, size]
      )
      .then((response) => {
        console.log("response.rows inside index: ", response.rows);
        return response.rows[0];
      })
      .catch((error) => {
        console.log("error inside index: ", error);
      });
  };
  const getAllImages = () => {
    return pool
      .query(`SELECT * FROM images;`)
      .then((response) => {
        console.log("response inside index: ", response.rows);
        return response.rows;
      })
      .catch((error) => {
        console.log("error inside index: ", error);
      });
  };
  return {
    uploadImages,
    getAllImages,
  };
};
