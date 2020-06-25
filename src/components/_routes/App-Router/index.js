import React from 'react'
import { Route } from 'react-router-dom'

const AppRoute = ({component: Component, layout: Layout}) => (
    <Route
        // {...rest}
        render={props => (
            <Layout>
                <Component />
            </Layout>
        )

        }
    />
)
export default AppRoute;