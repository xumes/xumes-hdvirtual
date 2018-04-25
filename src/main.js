import component from './template'
import filesList from './filesList'
import uploader from './uploader'

const components = [
    component,
    filesList,
    uploader
]

class Init {
    constructor() {
        components.forEach((component) => {
            let elementApp = document.getElementById(component.el)
            elementApp.innerHTML = component.template
            component.action()
        })
    }
}




new Init()