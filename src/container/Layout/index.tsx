import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '@/container/Header'
import Footer from '@/container/Footer'
import Container from '@/container/Container'
import Routes from './Routes'
import { GlobalStyle } from './globalStyle'
import { StyledGlobalSpin } from './style'
import '@/lib/i18n'

function Component() {
  return (
    <StyledGlobalSpin tip="Loading..." spinning={false}>
      <Router>
        <Layout>
          <Header />
          <Container>
            <Routes />
          </Container>
          <Footer />
        </Layout>
      </Router>
    </StyledGlobalSpin>
  )
}

function Index() {
  return (
    <>
      <GlobalStyle />
      <Component />
    </>
  )
}

export default Index
