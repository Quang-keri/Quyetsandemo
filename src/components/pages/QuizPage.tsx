import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { 
  CheckCircle2,
  XCircle,
  Clock,
  Award,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

type Page = 
  | 'home' 
  | 'courses' 
  | 'course-detail' 
  | 'lesson' 
  | 'code-editor' 
  | 'quiz' 
  | 'dashboard' 
  | 'payment' 
  | 'profile' 
  | 'security';

interface QuizPageProps {
  onNavigate: (page: Page) => void;
}

export function QuizPage({ onNavigate }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the correct way to declare a variable in JavaScript?',
      options: [
        'variable name = value;',
        'let name = value;',
        'var name == value;',
        'name := value;'
      ],
      correctAnswer: 1,
      explanation: 'The "let" keyword is the modern way to declare variables in JavaScript. "var" also works but "let" has better scoping rules.'
    },
    {
      id: 2,
      question: 'Which of the following is NOT a primitive data type in JavaScript?',
      options: [
        'String',
        'Number',
        'Array',
        'Boolean'
      ],
      correctAnswer: 2,
      explanation: 'Array is an object type, not a primitive. The primitive types are: String, Number, Boolean, Undefined, Null, Symbol, and BigInt.'
    },
    {
      id: 3,
      question: 'What does the === operator do?',
      options: [
        'Assigns a value',
        'Compares values only',
        'Compares values and types',
        'Multiplies values'
      ],
      correctAnswer: 2,
      explanation: 'The === operator checks for strict equality, meaning both the value and type must match.'
    },
    {
      id: 4,
      question: 'Which method is used to add an element to the end of an array?',
      options: [
        'array.add()',
        'array.append()',
        'array.push()',
        'array.insert()'
      ],
      correctAnswer: 2,
      explanation: 'The push() method adds one or more elements to the end of an array and returns the new length.'
    },
    {
      id: 5,
      question: 'What will console.log(typeof null) output?',
      options: [
        '"null"',
        '"undefined"',
        '"object"',
        '"number"'
      ],
      correctAnswer: 2,
      explanation: 'This is a well-known quirk in JavaScript. typeof null returns "object", which is actually a bug in the language that has been kept for backward compatibility.'
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="p-12 text-center">
            <div className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center ${
              percentage >= 70 ? 'bg-green-100' : 'bg-orange-100'
            }`}>
              {percentage >= 70 ? (
                <Award className={`w-16 h-16 ${percentage >= 70 ? 'text-green-600' : 'text-orange-600'}`} />
              ) : (
                <AlertCircle className="w-16 h-16 text-orange-600" />
              )}
            </div>

            <h1 className="text-4xl mb-4">
              {percentage >= 70 ? 'Congratulations!' : 'Keep Learning!'}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              You scored {score} out of {questions.length} ({percentage}%)
            </p>

            <div className="max-w-md mx-auto mb-8">
              <Progress value={percentage} className="h-3" />
            </div>

            {percentage >= 70 ? (
              <p className="text-slate-700 mb-8">
                Great job! You've demonstrated a solid understanding of JavaScript fundamentals.
                You're ready to move on to the next section.
              </p>
            ) : (
              <p className="text-slate-700 mb-8">
                You might want to review the material before continuing. Practice makes perfect!
              </p>
            )}

            {/* Question Review */}
            <div className="text-left space-y-4 mb-8">
              <h3 className="text-xl mb-4">Review Your Answers</h3>
              {questions.map((q, idx) => {
                const isCorrect = selectedAnswers[idx] === q.correctAnswer;
                return (
                  <Card key={q.id} className="p-4">
                    <div className="flex items-start gap-3 mb-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="mb-2">{q.question}</p>
                        <div className="space-y-1 text-sm">
                          <div className="text-slate-600">
                            Your answer: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                              {q.options[selectedAnswers[idx]]}
                            </span>
                          </div>
                          {!isCorrect && (
                            <div className="text-slate-600">
                              Correct answer: <span className="text-green-600">
                                {q.options[q.correctAnswer]}
                              </span>
                            </div>
                          )}
                          <div className="text-slate-500 italic mt-2">
                            {q.explanation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline"
                onClick={() => {
                  setCurrentQuestion(0);
                  setSelectedAnswers({});
                  setShowResults(false);
                }}
              >
                Retake Quiz
              </Button>
              <Button onClick={() => onNavigate('lesson')}>
                Continue Learning
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl mb-1">JavaScript Fundamentals Quiz</h1>
              <p className="text-sm text-slate-600">Section 1: Introduction to JavaScript</p>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5" />
              <span>15:00</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Card className="p-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              {currentQuestion + 1}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl mb-2">{question.question}</h2>
              <p className="text-sm text-slate-600">Select one answer</p>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerSelect(idx)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswers[currentQuestion] === idx
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === idx
                      ? 'border-indigo-600 bg-indigo-600'
                      : 'border-slate-300'
                  }`}>
                    {selectedAnswers[currentQuestion] === idx && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className={selectedAnswers[currentQuestion] === idx ? 'text-indigo-900' : ''}>
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>

            <div className="flex gap-2">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentQuestion
                      ? 'bg-indigo-600'
                      : selectedAnswers[idx] !== undefined
                      ? 'bg-green-600'
                      : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
            >
              {currentQuestion === questions.length - 1 ? 'Submit Quiz' : 'Next Question'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Card className="p-4">
            <div className="text-sm text-slate-600 mb-1">Answered</div>
            <div className="text-2xl">
              {Object.keys(selectedAnswers).length}/{questions.length}
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-slate-600 mb-1">Remaining</div>
            <div className="text-2xl">
              {questions.length - Object.keys(selectedAnswers).length}
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-sm text-slate-600 mb-1">Time Left</div>
            <div className="text-2xl">14:32</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
