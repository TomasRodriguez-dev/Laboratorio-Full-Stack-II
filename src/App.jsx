import './App.css'
import Aside from './components/aside/aside'
import Footer from './components/footer/footer'
import Main from './components/main/main'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <>
      <div className='container-principal'>
        <Navbar />
        <div className='container-contenido'>
          <Main />
          <Aside />
        </div>
        <Footer />
      </div> 
    </>
  )
}

export default App