import getFirebaseData from './getFirebaseData'
import onClick from './onClick'

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