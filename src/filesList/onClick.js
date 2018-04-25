import getFirebaseData from './getFirebaseData'

export default () => {
    let onClick = (e) => {
        e.preventDefault()
        let element = e.target

        if (e.target.tagName == 'I') {
            element = e.target.parentElement
        }

        if (element.tagName == 'A') {
            console.log(element.dataset.type)
            if (element.dataset.type == 'folder-open') {
                console.log(element.dataset)
                getFirebaseData({
                   id:  element.dataset.fid,
                   title: element.dataset.title,
                })
            } else {
                console.log('Download do arquivo')
            }

        }
    }
    document.querySelector('#main').addEventListener('click', onClick)
}