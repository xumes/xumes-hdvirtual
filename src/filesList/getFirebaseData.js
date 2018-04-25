import { app } from './../base'
import refreshData from './refreshData'

let foldersPath = []

export default (ref) => {
    let pos = foldersPath.findIndex((e) => e.id == ref.id)
    if (pos == -1) {
        foldersPath.push(ref)
    } else {
        foldersPath = foldersPath.slice(0, pos + 1)
    }

    let firebaseRef = ''
    let breadcrumbs = ''

    for (let index in foldersPath) {
        firebaseRef += foldersPath[index].id + '/'
        breadcrumbs += ` / <a href="${firebaseRef}" data-type="folder-open" data-fid="${foldersPath[index].id}" data-title="${foldersPath[index].title}">${foldersPath[index].title}</a>`
    }

    let database = app.database()
    let filesRef = database.ref(firebaseRef)
    filesRef.on('value', refreshData)

    document.querySelector('#path').innerHTML = breadcrumbs
}