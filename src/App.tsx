import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Main } from './pages/Main';
import { Math } from './pages/Math';
import { Profile } from './pages/Profile';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';
import type { HeaderProps } from './types';


const pages: HeaderProps[] = [
  {
    title: 'Home',
    url: '/',
    page: <Main />
  },
  {
    title: 'MathGame',
    url: '/mathgame',
    page: <Math />
  },
  {
    title: 'Profile',
    url: '/profile',
    page: <Profile />
  }
];

function App() {

  return (
    <>
      <Header data={pages} />
      <Routes>
        {pages.map((page, index) => (
          <Route key={index} path={page.url} element={page.page} />
        ))}
      </Routes>
    </>
  )
}

export default App
