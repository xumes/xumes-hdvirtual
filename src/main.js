
import * as firebase from 'firebase'

class Init {
    constructor() {
        this.firebase()
        const component = require('./template/index')
        let app = document.getElementById('app')
        app.innerHTML = component.template
        component.action()
    }

    firebase() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyDAFKKfNp4wc81C0zhA8Iel0pvgG4XaPKE",
            authDomain: "xumes-hdvirtual.firebaseapp.com",
            databaseURL: "https://xumes-hdvirtual.firebaseio.com",
            projectId: "xumes-hdvirtual",
            storageBucket: "xumes-hdvirtual.appspot.com",
            messagingSenderId: "1035611836007"
        };
        firebase.initializeApp(config)
    }
}




new Init()