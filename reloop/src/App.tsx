import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { WelcomeScreen } from './components/WelcomeScreen';
import { CategoryScreen } from './components/CategoryScreen';
import { ProductListScreen } from './components/ProductListScreen';
import { ContactScreen } from './components/ContactScreen';
import { Button } from './components/ui/button';
import { Users } from 'lucide-react';

type Screen = 'login' | 'welcome' | 'categories' | 'products' | 'contact';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleLogin = () => {
    setCurrentScreen('welcome');
  };

  const handleWelcomeComplete = () => {
    setCurrentScreen('categories');
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentScreen('products');
  };

  const handleBackToCategories = () => {
    setCurrentScreen('categories');
  };

  const handleShowContact = () => {
    setCurrentScreen('contact');
  };

  return (
    <div className="relative">
      {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
      
      {currentScreen === 'welcome' && (
        <WelcomeScreen onComplete={handleWelcomeComplete} />
      )}
      
      {currentScreen === 'categories' && (
        <>
          <CategoryScreen onSelectCategory={handleSelectCategory} />
          <Button
            onClick={handleShowContact}
            className="fixed bottom-6 right-6 rounded-full shadow-lg bg-green-600 hover:bg-green-700 h-14 px-6"
          >
            <Users className="w-5 h-5 mr-2" />
            Meet the Team
          </Button>
        </>
      )}
      
      {currentScreen === 'products' && (
        <>
          <ProductListScreen
            category={selectedCategory}
            onBack={handleBackToCategories}
          />
          <Button
            onClick={handleShowContact}
            className="fixed bottom-6 right-6 rounded-full shadow-lg bg-green-600 hover:bg-green-700 h-14 px-6"
          >
            <Users className="w-5 h-5 mr-2" />
            Meet the Team
          </Button>
        </>
      )}
      
      {currentScreen === 'contact' && (
        <ContactScreen onBack={handleBackToCategories} />
      )}
    </div>
  );
}
