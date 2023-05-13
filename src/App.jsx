import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Global from './assets/styles/Global-styled'
import Header from './assets/Components/layout/Header'
import { Container } from './assets/styles/layout/Container-styled'

const theme = {
  colors: {
    body: '#fff',
    header: '#ebfbff',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
      <Global />
      <Header/>
      <Container>
        <h1>hello</h1>
      </Container>
    </>
    </ThemeProvider>
  )
}

export default App
