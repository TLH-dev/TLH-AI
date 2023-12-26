import { Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { App, SnackbarProvider } from 'zmp-ui'
import HomePage from '../pages'
import About from '../pages/about'
import Form from '../pages/form'
import User from '../pages/user'
import { BrowserRouter as Router } from 'react-router-dom'
const MyApp = () => {
  return (
    <App>
      <RecoilRoot>
        <SnackbarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<About></About>}></Route>
              <Route path="/form" element={<Form></Form>}></Route>
              <Route path="/user" element={<User></User>}></Route>
            </Routes>
          </Router>
        </SnackbarProvider>
      </RecoilRoot>
    </App>
  )
}
export default MyApp
