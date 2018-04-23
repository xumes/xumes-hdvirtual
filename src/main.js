
class Init {
    constructor() {
        const component = require('./template/index')
        let app = document.getElementById('app')
        app.innerHTML=component.template
        component.action()
    }
}




new Init('Xumes')