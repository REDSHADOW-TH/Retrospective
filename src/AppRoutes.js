import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home/Home'
import CardBoard from './pages/CardBoard/CardBoard'

function RoutePath(props) {
    return <Route path={props.path}>
        <Layout>
            {props.children}
        </Layout>
    </Route>
}

export default function AppRoutes() {
    return <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <span className="navbar-brand">
                Retroepective
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link cursor-pointer" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link cursor-pointer" to="/card-board">Card Board</Link>
                    </li>
                </ul>
            </div>
            {/* <div className="ml-auto">
                NilPhumiphat
            </div> */}
        </nav>
        <Switch>
            <Route exact path="/">
                <Layout>
                    <Home />
                </Layout>
            </Route>
            <RoutePath path="/card-board">
                <CardBoard />
            </RoutePath>
        </Switch>
    </BrowserRouter>
}