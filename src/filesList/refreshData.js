
export default (snapshot) => {
    let data = snapshot.val()
    console.log(data) //hmm, vem como objeto
    data = Object.entries(data)
    console.log(data) //agora é um array

    let partial = require('./partial.html')
    let html = ''
    for (let index in data) {
        //remove do array os itens que não são objetos 
        if (typeof data[index][1] != 'object') {
            continue //sai do loop for atual sem fazer nada e continua 
        }
        html += partial
            .replace(/{{ fid }}/g, data[index][0])
            .replace(/{{ title }}/g, data[index][1].title)
            .replace(/{{ type }}/g, data[index][1].type)
    }

    document.querySelector('#main .files').innerHTML = html
}