require('./style.scss')

class Init {
    constructor() {
        const partial = require('./partial.html')
        
        let app = document.getElementById('app')
        app.innerHTML=partial
    }
}




new Init('Xumes')