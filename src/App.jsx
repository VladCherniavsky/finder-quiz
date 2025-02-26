import Header from './components/Header'
import ShoeFinder from './components/ShoeFinder'
import './index.css';

function App({label, questions}) {

  return (
    <div className="min-h-screen bg-white">
      <p>props label: {label}</p>
      <p>props questions: {questions}</p>
      <Header />
      <ShoeFinder />
    </div>
  )
}

export default App
