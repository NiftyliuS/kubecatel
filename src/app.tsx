import React, {Component, Suspense} from 'react'
import * as ReactDOM from 'react-dom';
import {HashRouter, Route, Routes} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import './scss/style.scss'

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
    render() {

        return (<Provider store={store}>
            <HashRouter>
                <Suspense fallback={loading}>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/404" element={<Page404/>}/>
                        <Route path="/500" element={<Page500/>}/>
                        <Route path="*" element={<DefaultLayout/>}/>*
                    </Routes>
                </Suspense>
            </HashRouter>
        </Provider>)

    }
}

ReactDOM.render(<App/>, document.getElementById('root'));