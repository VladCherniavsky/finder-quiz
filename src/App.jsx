import Header from './components/Header'
import ShoeFinder from './components/ShoeFinder'
import root from 'react-shadow';
import styles from './index.css?inline'

console.log('styles', styles)

function App({label, questions}) {

  return (
    <root.div className="min-h-screen bg-white">
      <p>props label: {label}</p>
      <p>props questions: {questions}</p>
      <Header />
      <ShoeFinder />
      <style type="text/css">{styles}</style>
    </root.div>
  )
}

export default App
