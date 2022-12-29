const projects = require('../data/project.json')

function query() {
    return Promise.resolve(projects)
}

export const projectService = {
    query,
}