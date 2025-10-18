import { useEffect } from 'react';
import { Leaf, Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 to-emerald-700 p-4">
      <div className="text-center text-white space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Leaf className="w-16 h-16 text-white animate-pulse" />
              <div className="absolute inset-0 transform rotate-180">
                <Leaf className="w-16 h-16 text-white opacity-30" />
              </div>
            </div>
            <h1 className="text-white text-5xl">Reloop 🌱</h1>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl">Welcome to Reloop</h2>
          
          <div className="flex items-center justify-center gap-2 pt-4">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <p className="text-xl italic">"Small choices make big changes."</p>
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </div>
        </div>

        <div className="pt-8">
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
