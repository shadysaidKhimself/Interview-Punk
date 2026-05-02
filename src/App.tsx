import { useState, useCallback } from 'react';
import type { AppView, UserAnswer } from './types';
import { sampleQuestions, sampleFAQ, sampleChecklist } from './data';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import GameMode from './components/GameMode';
import ResultsPage from './components/ResultsPage';
import FAQPage from './components/FAQPage';
import ChecklistPage from './components/ChecklistPage';

export default function App() {
  const [view, setView] = useState<AppView>('landing');
  const [gameAnswers, setGameAnswers] = useState<UserAnswer[]>([]);
  const [gameKey, setGameKey] = useState(0);

  const handleGameFinish = useCallback((answers: UserAnswer[]) => {
    setGameAnswers(answers);
    setView('results');
  }, []);

  const handleReboot = useCallback(() => {
    setGameAnswers([]);
    setGameKey(prev => prev + 1);
    setView('game');
  }, []);

  const handleBackToDashboard = useCallback(() => {
    setGameAnswers([]);
    setView('dashboard');
  }, []);

  return (
    <>
      {view === 'landing' && (
        <LandingPage onStart={() => setView('dashboard')} />
      )}

      {view === 'dashboard' && (
        <Dashboard onNavigate={(v) => setView(v)} />
      )}

      {view === 'game' && (
        <GameMode
          key={gameKey}
          questions={sampleQuestions}
          onFinish={handleGameFinish}
          onBack={handleBackToDashboard}
        />
      )}

      {view === 'results' && (
        <ResultsPage
          answers={gameAnswers}
          onReboot={handleReboot}
          onBackToDashboard={handleBackToDashboard}
        />
      )}

      {view === 'faq' && (
        <FAQPage
          items={sampleFAQ}
          onBack={handleBackToDashboard}
        />
      )}

      {view === 'checklist' && (
        <ChecklistPage
          items={sampleChecklist}
          onBack={handleBackToDashboard}
        />
      )}
    </>
  );
}
