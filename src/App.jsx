import Header from './components/Header'
import ShoeFinder from './components/ShoeFinder'
import QuizButton from './components/QuizButton'
import root from 'react-shadow';
import styles from './index.css?inline'

function App({label, questions,  onCheckCallbackClick}) {

  return (
    <root.div className="min-h-screen bg-white">
      <p>props label: {label}</p>
      <p>props questions: {questions}</p>
      <Header />
      <ShoeFinder />
      <div className='flex'>
      <QuizButton 
      label={'Check callback'} 
      className='max-w-2xl mx-auto' 
      onClick={onCheckCallbackClick}
      />
      </div>
     
      <style type="text/css">{styles}</style>
    </root.div>
  )
}

export default App
