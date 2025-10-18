import { Card } from './ui/card';
import { UtensilsCrossed, Sparkles, SprayCan, Shirt, Leaf } from 'lucide-react';
import { UserProfile } from './UserProfile';

interface CategoryScreenProps {
  onSelectCategory: (category: string) => void;
}

const categories = [
  {
    id: 'kitchen',
    name: 'Kitchen',
    icon: UtensilsCrossed,
    color: 'from-orange-400 to-orange-600',
    description: 'Sustainable kitchen essentials'
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    icon: Sparkles,
    color: 'from-pink-400 to-pink-600',
    description: 'Natural beauty & care'
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: SprayCan,
    color: 'from-blue-400 to-blue-600',
    description: 'Eco-friendly cleaning'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: Shirt,
    color: 'from-purple-400 to-purple-600',
    description: 'Sustainable fashion'
  }
];

export function CategoryScreen({ onSelectCategory }: CategoryScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <h1 className="text-green-600">Reloop 🌱</h1>
            </div>
            <UserProfile />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="mb-3">Shop by Category</h2>
          <p className="text-gray-600">Choose sustainable products for every part of your life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-0"
              >
                <div className={`bg-gradient-to-br ${category.color} p-8 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white">{category.name}</h3>
                    <Icon className="w-12 h-12" />
                  </div>
                  <p className="text-white/90 text-sm">{category.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
