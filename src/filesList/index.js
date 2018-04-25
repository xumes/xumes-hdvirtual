import getFirebaseData from './getFirebaseData'
import onClick from './onClick'
require('./style.scss')

export default {
    template: require('./template.html'),
    action() {
        getFirebaseData({
            id: '/files/1',
            title: 'Home'
        })
        onClick()

    }
}