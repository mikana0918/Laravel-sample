require('./bootstrap');

import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        /* トップ */
        { path: '/', component: require('./components/top/index.vue').default },
    ]
})

const store = new Vuex.Store({
    state: {
    },
    mutations: {

    },
    actions: {
    }

}
)

// XHRで認証切れになったとき、ログイン画面にリダイレクトさせる
window.axios.interceptors.response.use(response => {
    // フロントで使用するログインチェックステータス
    if (!store.state.isLoggedIn && window.location.pathname !== '/login' && window.location.pathname !== '/super_admin/login') {
        store.state.isLoggedIn = true
    }
    // ログインページか
    if (window.location.pathname === '/login' || window.location.pathname === '/super_admin/login') {
        store.state.isLoginPage = true
    } else {
        store.state.isLoginPage = false
    }
    // トラストリッジ管理画面か
    if (window.location.pathname.match('super_admin')) {
        store.state.isSuperAdminPage = true
    } else {
        store.state.isSuperAdminPage = false
    }
    // トラストリッジ管理画面ログインチェックステータス
    if (!store.state.superAdminIsLoggedIn && window.location.pathname !== '/super_admin/login') {
        store.state.superAdminIsLoggedIn = true
    }
    return response
}, error => {
    if (error.response.status === 401) {
        // ログインページへリダイレクト
        if (window.location.pathname.match('super_admin')) {
            location.href = '/super_admin/login'
        } else if (window.location.pathname !== '/login') {
            location.href = '/login'
        }
        return
    }
    return Promise.reject(error)
})

// グローバル注入
const app = new Vue({
    el: '#app',
    store,
    router,
    created() {
        // ログイン中の場合はログイン画面へアクセスさせない、ログイン情報セット
        // 店舗
        if (window.location.pathname === '/login') {
            store.dispatch('isLoggedIn')
            .then(() => {
                if (this.$store.state.isLoggedIn) {
                    location.href = '/'
                } else {
                    store.dispatch('loaded')
                }
            })
        } else if (!window.location.pathname.match('super_admin')) {
            store.dispatch('setStoreInfo')
            .then(res => {
                this.$store.state.isLoading = false
            })
            .catch(error => {})
        }
        // トラストリッジ管理画面
        if (window.location.pathname === '/super_admin/login') {
            store.dispatch('superAdminIsLoggedIn')
            .then(() => {
                if (this.$store.state.superAdminIsLoggedIn) {
                    location.href = '/super_admin'
                } else {
                    store.dispatch('loaded')
                }
            })
        } else if (window.location.pathname.match('super_admin')) {
            store.dispatch('setSuperAdminInfo')
            .then(res => {
                this.$store.state.isLoading = false
            })
            .catch(error => {})
        }
    },
})
// }).$mount('#app')

