import './App.css';
import ResponsiveAppBar from './components/AppBar';
import DotsMobileStepper from './components/Carousel';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



function App() {
  return (
    <div className="App">
      <header>
        <ResponsiveAppBar/>
      </header>
      <main>
        <section className='main_image'>
          <div>
            <DotsMobileStepper/>
          </div>
        </section>
        <section>
          <div className='container'>

          </div>
        </section>
        <section>
          <div className='container'>

          </div>
        </section>
        <section>
          <div className='container'>

          </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
