const postgres = require('../../dal/postgres')

module.exports.getAllProjects = () => postgres.query(`
    SELECT *
    FROM projects
`)

module.exports.getProjectByName = () => postgres.query(`
  SELECT * FROM projects WHERE project = $1
`)

  module.exports.createProject = async (project, projLink) => {
    const query = `
  INSERT INTO projects (project, projLink)
    VALUES (
    $(project),
    $(projLink)
)
RETURNING id;
`
    const [res] = await postgres.query(query, { project, projLink})
    return res.id
  }

  module.exports.updateProject = () => postgres.query(`
  UPDATE projects SET project = $1, proj_link = $2 WHERE id = $3
`)

  module.exports.deleteProject = () => postgres.query(`
  'DELETE FROM projects WHERE id = $1'
`)
