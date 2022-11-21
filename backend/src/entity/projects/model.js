const postgres = require('../../dal/postgres')

module.exports.getAllProjects = () => postgres.query(`
    SELECT *
    FROM project
`)


module.exports.createProject= async (project, projLink) => {
  const query = `
    INSERT INTO projects (project, projLink)
    VALUES (
        $(project),
        $(projLink)
    )
    RETURNING id;
  `

  const [res] = await postgres.query(query, { project, projLink })
  return res.id
}

module.exports.checkIfUserExists = async (project) => {
  const query = `
    SELECT COUNT(*)
    FROM   projects AS u
    WHERE  u.project = $(project);
  `

  const [res] = await postgres.query(query, { project })
  return res.count > 0
}
