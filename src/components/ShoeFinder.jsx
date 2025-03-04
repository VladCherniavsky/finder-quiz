import { useState } from 'react'
import QuizButton from './QuizButton'

export default function ShoeFinder({onFinishQuiz}) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const questions = [
    {
      id: 'usage',
      title: 'Where will you use these shoes?',
      options: [
        { id: 'road_gym', label: 'ROAD / GYM' },
        { id: 'trail', label: 'TRAIL' }
      ]
    },
    {
      id: 'distance',
      title: 'How far do you usually run?',
      options: [
        { id: 'short', label: '0-3 MILES' },
        { id: 'medium', label: '3-7 MILES' },
        { id: 'long', label: '7+ MILES' }
      ]
    },
    {
      id: 'experience',
      title: 'What is your running experience level?',
      options: [
        { id: 'beginner', label: 'BEGINNER' },
        { id: 'intermediate', label: 'INTERMEDIATE' },
        { id: 'advanced', label: 'ADVANCED' }
      ]
    }
  ]

  const handleOptionSelect = (questionId, optionId) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }))
    setCurrentStep(prev => prev + 1)
  }

  const handleSubmit = () => {
     setCurrentStep(0);
     onFinishQuiz(['123', '345']);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">SHOE FINDER</h1>
        <div className="flex justify-center gap-2">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full border ${
                index === currentStep 
                  ? 'bg-brooks-blue border-brooks-blue' 
                  : index < currentStep
                  ? 'bg-gray-300 border-gray-300'
                  : 'bg-white border-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {currentStep < questions.length && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            {questions[currentStep].title}
          </h2>
          <div className="space-y-4">
            {questions[currentStep].options.map(option => (
              <QuizButton
                key={option.id}
                label={option.label}
                onClick={() => handleOptionSelect(questions[currentStep].id, option.id)}
              />
            ))}
          </div>
        </div>
      )}

      {currentStep === questions.length && (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Thank you for completing the quiz!</h2>
          <QuizButton 
            label="Start Over"
            onClick={handleSubmit}
            className="mt-4 bg-brooks-blue text-white max-w-xs mx-auto"
          />
        </div>
      )}
    </div>
  )
} 