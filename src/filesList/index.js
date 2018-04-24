import { app } from './../base'

export default  {
    template: require('./template.html'),
    action() {
      let data =  [
            {
                type: 'folder-open',
                title: 'Meu diretório'
            },
            {
                type: 'file',
                title: 'Anotações.txt'
            }
        ]

        let partial = require('./partial.html')
        let html = ''
        for (let index in data) {
            html += partial
                .replace('{{ title }}', data[index].title)
                .replace('{{ type }}', data[index].type)
        }

        document.querySelector('#main .files').innerHTML = html
    }
}