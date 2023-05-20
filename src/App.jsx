import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Global from './assets/styles/Global-styled'
import Header from './assets/Components/layout/Header'
import { Container } from './assets/styles/layout/Container-styled'
import CardContent  from './assets/data/card-content'
import Card from './assets/Components/surfaces/Card'
import Footer from './assets/Components/layout/Footer'

const theme = {
  colors: {
    body: '#fff',
    header: '#ebfbff',
    footer: '#003333'
  },
  mobile: '640px'

}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Global />
      <Header/>
      <Container>
        {
          CardContent.map( ( item, index ) => {
            <Card key={ index } item={ item } />
          } )
        }
      </Container>
      <Footer>

      </Footer>
    </>
    </ThemeProvider>
  )
}

export default App
