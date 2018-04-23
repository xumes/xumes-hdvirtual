
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDAFKKfNp4wc81C0zhA8Iel0pvgG4XaPKE",
    authDomain: "xumes-hdvirtual.firebaseapp.com",
    databaseURL: "https://xumes-hdvirtual.firebaseio.com",
    projectId: "xumes-hdvirtual",
    storageBucket: "xumes-hdvirtual.appspot.com",
    messagingSenderId: "1035611836007"
}

export const app = firebase.initializeApp(config)