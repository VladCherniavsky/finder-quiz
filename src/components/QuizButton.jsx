export default function QuizButton({ label, onClick, className = '' }) {
  return (
    <button
      className={`w-full p-4 text-lg border-2 border-black hover:bg-brooks-blue hover:text-white transition-colors ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
} 