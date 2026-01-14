import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Play,
  RotateCcw,
  Download,
  Upload,
  Settings,
  Terminal,
  FileCode,
  ChevronRight,
  Check,
  X
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

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

interface CodeEditorPageProps {
  onNavigate: (page: Page) => void;
}

export function CodeEditorPage({ onNavigate }: CodeEditorPageProps) {
  const [code, setCode] = useState(`// Write your JavaScript code here
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));
console.log(greet("UniCode"));

// Try writing your own code below:
`);

  const [output, setOutput] = useState('Click "Run Code" to see the output...');
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput(`Hello, World!
Hello, UniCode!`);
      setIsRunning(false);
    }, 500);
  };

  const testCases = [
    { input: 'greet("Alice")', expected: 'Hello, Alice!', status: 'passed' as const },
    { input: 'greet("Bob")', expected: 'Hello, Bob!', status: 'passed' as const },
    { input: 'greet("Charlie")', expected: 'Hello, Charlie!', status: 'passed' as const },
    { input: 'greet("")', expected: 'Hello, !', status: 'failed' as const }
  ];

  return (
    <div className="h-screen flex flex-col bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-slate-300 hover:text-white"
              onClick={() => onNavigate('lesson')}
            >
              ← Back to Lesson
            </Button>
            <div className="h-4 w-px bg-slate-600"></div>
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-slate-400" />
              <span className="text-slate-200">Exercise: Creating Functions</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <select className="bg-slate-700 text-slate-200 text-sm px-3 py-1.5 rounded border border-slate-600">
              <option>JavaScript</option>
              <option>Python</option>
              <option>Java</option>
              <option>C++</option>
            </select>
            <Button variant="ghost" size="sm" className="text-slate-300">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Instructions Sidebar */}
        <div className="w-96 bg-white border-r border-slate-200 overflow-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl">Exercise Instructions</h2>
              <Badge className="bg-green-100 text-green-700">Easy</Badge>
            </div>

            <div className="space-y-4 text-slate-700">
              <div>
                <h3 className="mb-2">Task</h3>
                <p className="text-sm">
                  Create a function called <code className="bg-slate-100 px-1 rounded">greet</code> that 
                  takes a name as parameter and returns a greeting message.
                </p>
              </div>

              <div>
                <h3 className="mb-2">Requirements</h3>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Function must be named <code className="bg-slate-100 px-1 rounded">greet</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Must accept one parameter (name)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Must return a string in format "Hello, [name]!"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Handle empty string inputs gracefully</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="mb-2">Example</h3>
                <pre className="text-sm">
                  <code>{`greet("Alice")
// Returns: "Hello, Alice!"`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2">Test Cases</h3>
                <div className="space-y-2">
                  {testCases.map((test, idx) => (
                    <div 
                      key={idx}
                      className={`text-sm p-3 rounded-lg border ${
                        test.status === 'passed'
                          ? 'bg-green-50 border-green-200'
                          : 'bg-red-50 border-red-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <code className="text-xs">{test.input}</code>
                        {test.status === 'passed' ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <X className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                      <div className="text-xs text-slate-600">
                        Expected: {test.expected}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full" onClick={() => onNavigate('quiz')}>
                  Submit Solution
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Editor and Output */}
        <div className="flex-1 flex flex-col">
          {/* Code Editor */}
          <div className="flex-1 overflow-auto">
            <div className="h-full flex flex-col">
              <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <FileCode className="w-4 h-4" />
                  <span>main.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-slate-300 hover:text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Load
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-slate-300 hover:text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-slate-300 hover:text-white"
                    onClick={() => setCode('')}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                    onClick={runCode}
                    disabled={isRunning}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {isRunning ? 'Running...' : 'Run Code'}
                  </Button>
                </div>
              </div>

              <div className="flex-1 p-4 overflow-auto">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full bg-slate-900 text-slate-100 font-mono text-sm p-4 rounded-lg border border-slate-700 resize-none focus:outline-none focus:border-indigo-500"
                  spellCheck={false}
                  style={{ 
                    tabSize: 2,
                    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", Consolas, monospace'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="h-64 border-t border-slate-700 bg-slate-800">
            <Tabs defaultValue="output" className="h-full flex flex-col">
              <div className="px-4 pt-2">
                <TabsList className="bg-slate-700">
                  <TabsTrigger value="output" className="data-[state=active]:bg-slate-600">
                    <Terminal className="w-4 h-4 mr-2" />
                    Output
                  </TabsTrigger>
                  <TabsTrigger value="tests" className="data-[state=active]:bg-slate-600">
                    Tests
                  </TabsTrigger>
                  <TabsTrigger value="console" className="data-[state=active]:bg-slate-600">
                    Console
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="output" className="flex-1 overflow-auto p-4 mt-0">
                <div className="font-mono text-sm text-slate-300 whitespace-pre-wrap">
                  {output}
                </div>
              </TabsContent>

              <TabsContent value="tests" className="flex-1 overflow-auto p-4 mt-0">
                <div className="space-y-2">
                  <div className="text-slate-300 text-sm mb-3">Test Results:</div>
                  {testCases.map((test, idx) => (
                    <div 
                      key={idx}
                      className={`p-3 rounded-lg ${
                        test.status === 'passed'
                          ? 'bg-green-900/30 border border-green-700'
                          : 'bg-red-900/30 border border-red-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {test.status === 'passed' ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <X className="w-4 h-4 text-red-400" />
                        )}
                        <code className="text-sm text-slate-200">{test.input}</code>
                      </div>
                      <div className="text-xs text-slate-400 ml-6">
                        Expected: {test.expected}
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 text-sm text-slate-300">
                    <strong>3 of 4</strong> tests passed
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="console" className="flex-1 overflow-auto p-4 mt-0">
                <div className="font-mono text-sm text-slate-400">
                  No console messages
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
