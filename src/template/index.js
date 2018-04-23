require('./style.scss')
require('font-awesome/css/font-awesome.css')

let header = require('./header.html')
let content = require('./content.html')
let footer = require('./footer.html')
let sidebar = require('./sidebar.html')

module.exports = {
    template: `
        <div id="wrapper">
            ${header}${content}${footer}
        </div>
        ${sidebar}"`,
    action: () => {
        let openMenu = document.querySelector('#header .menu-icon')
        let closeMenu = document.getElementById('wrapper')

        let closeMenuEvent = (e) => {
            let boy = document.querySelector('body')
            body.className = body.className.replace('show-menu', '')
        }

        openMenu.addEventListener('click', (e) => {
            e.preventDefault() //para não navegar para o link
            let body = document.querySelector('body')
            body.className += " show-menu"

            closeMenu.addEventListener('click', (e) => {
                let boy = document.querySelector('body')
                body.className = body.className.replace('show-menu', '')
            }, true)
        })
    }
}