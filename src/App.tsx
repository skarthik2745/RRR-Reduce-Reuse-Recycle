import React, { useState } from 'react';
import { AuthProvider, useAuth } from './components/auth/AuthContext';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { Navigation } from './components/common/Navigation';
import { Home } from './components/common/Home';
import { Profile } from './components/common/Profile';
import { ReduceSection } from './components/reduce/ReduceSection';
import { ReuseSection } from './components/reuse/ReuseSection';
import { RecycleSection } from './components/recycle/RecycleSection';
import { FoodShareSection } from './components/foodshare/FoodShareSection';

function AppContent() {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('home');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Set default section based on user type
  React.useEffect(() => {
    if (user) {
      if (user.userType === 'ecorecycler') {
        setActiveSection('recycle');
      } else if (user.userType === 'ngo') {
        setActiveSection('foodshare');
      } else {
        setActiveSection('home');
      }
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {authMode === 'login' ? (
          <LoginForm onToggleMode={() => setAuthMode('register')} />
        ) : (
          <RegisterForm onToggleMode={() => setAuthMode('login')} />
        )}
      </div>
    );
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'reduce':
        return <ReduceSection />;
      case 'reuse':
        return <ReuseSection />;
      case 'recycle':
        return <RecycleSection />;
      case 'foodshare':
        return <FoodShareSection />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} userType={user?.userType} />
      <main>
        {renderSection()}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
