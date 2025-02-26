import { useState } from 'react';
import Header from './components/Header'
import ShoeFinder from './components/ShoeFinder'
import QuizButton from './components/QuizButton'
import root from 'react-shadow';
import styles from './index.css?inline'

function App({label, questions,  onCheckCallbackClick, onCheckCallbackWithDataReturn}) {

  const [data, setData] = useState(undefined);

  const handleCheckCallbackWithReturnDataClick = async () => { 
    const data = await onCheckCallbackWithDataReturn();
    console.log('data', data)
    setData(data)
  }

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
      <QuizButton 
        label={'Check callback with data return'} 
        className='max-w-2xl mx-auto' 
        onClick={handleCheckCallbackWithReturnDataClick}
      />

      
      </div>
      {data && <div className='flex justify-center items-center'>data: {data}</div>}  
     
      <style type="text/css">{styles}</style>
    </root.div>
  )
}

export default App
