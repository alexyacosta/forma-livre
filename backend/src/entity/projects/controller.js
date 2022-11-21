const humps = require('humps')

const model = require('./model')

module.exports.getAllProjects = async(req, res, next) => {
  try {
      const data = await model.getAllProjects();
      res.status(200).send({data: data});
  } catch (e) {
      res.status(500).send({
          message: 'Falha ao processar sua requisição'
      });
  }
}

module.exports.getProjectByName = async (req, res, next) => {
  try {
    const data = await model.getProjectByName(req.params.id);
    res.status(200).send({ data: data });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
}

module.exports.createProject = async (req, res, next) => {
  try {
    const { project, projLink } = req.body

    if (!(typeof project === 'string' && typeof projLink === 'string')) {
      return res.sendStatus(400)
    }

    const projectId = await model.createProject(project, projLink)
    res.send({
      created: true,
      projectId,
      message: `Projeto "${project}" criado com sucesso`
    })
  } catch (e) {
    next(e)
    const [res] = await postgres.query(query, { project, projLink })
    return res.id
  }
}

module.exports.updateProject = async (req, res, next) => {

  try {
    await model.updateProject(req.params.id, req.body);

    res.status(200).send({
      message: 'Atualização realizada com sucesso!'
    });
  } catch (e) {
    res.status(400).send({
      message: 'Falha ao editar'
    });
  }

}

module.exports.deleteProject = async (req, res, next) => {

  try {
    await model.deleteProject(req.params.id)
    res.status(200).send({
      message: 'Atualização realizada com sucesso!'
    })
  } catch (e) {
    res.status(400).send({
      message: 'Falha ao deletar'
    })
  }
}

