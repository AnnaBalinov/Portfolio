

const gProjects = require('../data/project.json')

export const projectService = {
    query,
}

function query() {
    var projects = JSON.parse(JSON.stringify(gProjects))

    return Promise.resolve(projects)
}
