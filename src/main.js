import { app } from './base'
import component from './template'
import filesList from './filesList'

class Init {
    constructor() {
        //const component = require('./template/index')
        let elementApp = document.getElementById('app')
        elementApp.innerHTML = component.template
        component.action()

        //const filesList = require('./filesList/index')
        let elementFileList = document.getElementById('main')
        elementFileList.innerHTML = filesList.template
        filesList.action()


    }
}




new Init()