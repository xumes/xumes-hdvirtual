import component from './template'
import filesList from './filesList'

const components = [
    component,
    filesList
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