import React from 'react'
import { connect } from 'react-redux'
import { Card } from './components/styled'
import { Layout } from './components/layout'
import { Loader } from './components/loader'
import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: white;
    font-family: 'Roboto', sans-serif;
  }
`

function App ({ items, loading }) {
  if (loading) {
    return <Loader />
  } else {
    return (
      <Layout>
        { items.map((item, idx) =>
          <Card
            key={idx}
            style={{
              width: +item.size.split('x')[0],
              height: +item.size.split('x')[1]
            }}
          >
            <img src={item.url} />
          </Card>
        )}
      </Layout>
    )
  }
}

const stop = store => store
export default connect(stop)(App)
