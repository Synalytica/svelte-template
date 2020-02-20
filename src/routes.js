// Import the "wrap" function
import {wrap} from 'svelte-spa-router'

// Components
import Home from './routes/Home.svelte'
import Name from './routes/Name.svelte'
import Wild from './routes/Wild.svelte'
import Regex from './routes/Regex.svelte'
import Lucky from './routes/Lucky.svelte'
import Nested from './routes/Nested.svelte'
import NotFound from './routes/NotFound.svelte'

// This demonstrates how to pass routes as a POJO (Plain Old JavaScript Object) or a JS Map
let routes = new Map()

// Exact path
routes.set('/', Home)

// Allow children to also signal link activation
routes.set('/brand', Home)

// Using named parameters, with last being optional
routes.set('/hello/:first/:last?', Name)

// Wildcard parameter
routes.set('/wild', Wild)
// Special route that has custom data that will be passed to the `routeLoaded` event
routes.set('/wild/data', wrap(Wild, {hello: 'world'}))
routes.set('/wild/*', Wild)

// This route has a pre-condition function that lets people in only 50% of times (and a second pre-condition that is always true)
// The second argument is a custom data object that will be passed to the `conditionsFailed` event if the pre-conditions fail
routes.set('/lucky', wrap(Lucky,
    {foo: 'bar'},
    (detail) => {
        return (Math.random() > 0.5)
    },
    (detail) => {
        // This pre-condition is executed only if the first one succeeded
        // eslint-disable-next-line no-console
        console.log('Pre-condition 2 executed', detail.location, detail.querystring, detail.userData)
        return true
    }
))

// Regular expressions
routes.set(/^\/regex\/(.*)?/i, Regex)
routes.set(/^\/(pattern|match)(\/[a-z0-9]+)?/i, Regex)

// This component contains a nested router
// Thanks to being able to define routes via regular expressions, this allows us to use a single line rather than 2 ('/nested' and '/nested/*')
routes.set(/^\/nested(\/(.*))?/, Nested)

// Catch-all, must be last
routes.set('*', NotFound)

export default routes
