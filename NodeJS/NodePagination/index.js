// const express = require("express");
// const pool = require("./db");

// const app = express();
// const port = 3000;

// // With RawQuery;
// app.get("/users", async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   // console.log('%cindex.js:11 page', 'color: white;', page);
//   const limit = parseInt(req.query.limit) || 10;
//   // console.log('%cindex.js:13 limit', 'color: #007acc;', limit);

//   const offset = (page - 1) * limit;
//   // console.log('%cindex.js:16 offset', 'color: #26bfa5;', offset);

//   try {
//     const dataQuery = `
//         SELECT * FROM users
//         ORDER BY id
//         LIMIT $1 OFFSET $2
//         `;

//     const countQuery = `SELECT COUNT (*) FROM users`;

//     const [dataResult, countResult] = await Promise.all([
//       pool.query(dataQuery, [limit, offset]),
//       pool.query(countQuery),
//     ]);

//     res.json({
//       data: dataResult.rows,
//       totalRecords: parseInt(countResult.rows[0].count),
//       page,
//       limit,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));




////////////////////////////////////////////////////////////////////////
// //   USING ORM  npm install sequelize pg pg-hstore           ////////
////////////////////////////////////////////////////////////////////////


const express = require("express");
const User = require("./user");

const app = express();
const port = 3000;

app.get("/user", async(req, res)=>{
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 1;
  const offset = (page - 1) * limit;

  try {
    const result = User.findAndCountAll({
      limit,
      offset,
      order:[['id',"ASC"]]
    })

    res.json({
      data:(await result).rows,
      totalRecords: ((await result).count),
      page,
      limit
    })
  } catch (error) {
    res.status(500).json({error:error.message})
  }
})


app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));