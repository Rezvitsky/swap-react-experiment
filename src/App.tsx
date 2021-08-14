import React, { FC } from 'react'
import { HashRouter as Router, RouteComponentProps, Switch, Route } from 'react-router-dom'

import routes from './routes'

import Header from './components/Header'
import Footer from './components/Footer'

const App: FC<{}> = (props) => (
    <div className="App h-screen bg-gradient-to-r from-red-100 via-gray-300 to-red-50 dark:from-gray-900 dark:to-gray-900 dark:bg-gray-900 transition duration-500">
        <Router>
            <Header />
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props: RouteComponentProps<any>) => (
                            <route.comonent
                                {...props}
                                {...route.name}
                                {...route.props}
                            />
                        )}
                    />
                ))}
            </Switch>
            <Footer />
        </Router>
    </div>
)

export default App