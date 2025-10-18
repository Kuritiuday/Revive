import { useState, useMemo } from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { ArrowLeft, Leaf, ShoppingCart, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { UserProfile } from './UserProfile';
import { ProductDetailSheet } from './ProductDetailSheet';

interface ProductListScreenProps {
  category: string;
  onBack: () => void;
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  badge: string;
  whatsappMessage: string;
  description: string;
  sustainability: string[];
  materials: string;
  certifications: string[];
  reviews: Array<{
    name: string;
    rating: number;
    comment: string;
  }>;
}

const productsByCategory: Record<string, Product[]> = {
  kitchen: [
    {
      id: 'k1',
      name: 'Bamboo Utensil Set',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBraXRjaGVuJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYwNjI5Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Bestseller',
      whatsappMessage: 'Hi! I\'m interested in the Bamboo Utensil Set ($24.99)',
      description: 'Complete set of sustainable bamboo cooking utensils. Perfect for eco-conscious kitchens. Includes spatula, ladle, spoon, and slotted spoon.',
      sustainability: [
        'Made from 100% sustainable bamboo',
        'Biodegradable and compostable',
        'No plastic packaging',
        'Carbon neutral shipping'
      ],
      materials: '100% organic bamboo, food-safe mineral oil finish',
      certifications: ['FSC Certified', 'Organic', 'Fair Trade'],
      reviews: [
        { name: 'Emma S.', rating: 5, comment: 'Love these! They feel great in hand and are so durable.' },
        { name: 'Michael T.', rating: 5, comment: 'Finally ditched my plastic utensils. These are amazing!' },
        { name: 'Lisa K.', rating: 4, comment: 'Great quality, just wish the set included a few more pieces.' }
      ]
    },
    {
      id: 'k2',
      name: 'Reusable Food Wraps',
      price: '$18.99',
      image: 'https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBraXRjaGVuJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYwNjI5Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Eco-Friendly',
      whatsappMessage: 'Hi! I\'m interested in the Reusable Food Wraps ($18.99)',
      description: 'Set of 5 beeswax wraps in various sizes. Replace plastic wrap with these natural, reusable alternatives.',
      sustainability: [
        'Replaces single-use plastic wrap',
        'Reusable for up to 1 year',
        'Compostable at end of life',
        'Locally sourced beeswax'
      ],
      materials: 'Organic cotton, beeswax, jojoba oil, tree resin',
      certifications: ['GOTS Certified', 'Organic'],
      reviews: [
        { name: 'Rachel P.', rating: 5, comment: 'Game changer! No more plastic wrap in my house.' },
        { name: 'David L.', rating: 5, comment: 'They stick really well and are easy to clean.' }
      ]
    },
    {
      id: 'k3',
      name: 'Compost Bin',
      price: '$34.99',
      image: 'https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBraXRjaGVuJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYwNjI5Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'New',
      whatsappMessage: 'Hi! I\'m interested in the Compost Bin ($34.99)',
      description: 'Stylish countertop compost bin with carbon filter. Makes composting easy and odor-free.',
      sustainability: [
        'Reduces landfill waste',
        'Made from recycled materials',
        'Replaceable carbon filters',
        'Dishwasher safe'
      ],
      materials: 'Recycled stainless steel, activated carbon filter',
      certifications: ['Recycled Content'],
      reviews: [
        { name: 'Sophie M.', rating: 5, comment: 'No smell at all! Looks great on my counter.' },
        { name: 'James W.', rating: 4, comment: 'Perfect size for my kitchen. Very well made.' }
      ]
    },
    {
      id: 'k4',
      name: 'Stainless Steel Straws',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBraXRjaGVuJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYwNjI5Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Popular',
      whatsappMessage: 'Hi! I\'m interested in the Stainless Steel Straws ($12.99)',
      description: 'Set of 8 reusable straws with cleaning brushes and travel pouch. Includes straight and bent styles.',
      sustainability: [
        'Eliminates single-use plastic straws',
        'Lifetime durability',
        '100% recyclable',
        'BPA and toxin free'
      ],
      materials: 'Food-grade 18/8 stainless steel',
      certifications: ['Food Safe', 'BPA Free'],
      reviews: [
        { name: 'Alex C.', rating: 5, comment: 'Great quality! The pouch makes it easy to carry them.' },
        { name: 'Nina R.', rating: 5, comment: 'Love the variety of sizes. Easy to clean.' }
      ]
    }
  ],
  'personal-care': [
    {
      id: 'p1',
      name: 'Natural Shampoo Bar',
      price: '$14.99',
      image: 'https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjA1NzY4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Organic',
      whatsappMessage: 'Hi! I\'m interested in the Natural Shampoo Bar ($14.99)',
      description: 'Zero-waste shampoo bar made with organic ingredients. Gentle cleansing for all hair types. Lasts 2-3 months.',
      sustainability: [
        'No plastic bottle waste',
        'Equivalent to 3 bottles of liquid shampoo',
        'Palm oil free',
        'Cruelty free - never tested on animals'
      ],
      materials: 'Coconut oil, shea butter, essential oils, natural clay',
      certifications: ['Organic', 'Cruelty Free', 'Vegan'],
      reviews: [
        { name: 'Maya J.', rating: 5, comment: 'My hair has never been healthier! Amazing lather.' },
        { name: 'Tom B.', rating: 4, comment: 'Great product but took a week to get used to.' }
      ]
    },
    {
      id: 'p2',
      name: 'Bamboo Toothbrush',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjA1NzY4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Bestseller',
      whatsappMessage: 'Hi! I\'m interested in the Bamboo Toothbrush ($8.99)',
      description: 'Pack of 4 biodegradable bamboo toothbrushes. Soft charcoal-infused bristles for gentle cleaning.',
      sustainability: [
        'Handle is 100% biodegradable',
        'Reduces plastic toothbrush waste',
        'Sustainable bamboo grows rapidly',
        'Plastic-free packaging'
      ],
      materials: 'Bamboo handle, charcoal-infused nylon bristles',
      certifications: ['FSC Certified', 'Biodegradable'],
      reviews: [
        { name: 'Sarah L.', rating: 5, comment: 'Feel good about my daily routine now!' },
        { name: 'Kevin H.', rating: 5, comment: 'Great quality and the charcoal bristles work well.' }
      ]
    },
    {
      id: 'p3',
      name: 'Organic Facial Serum',
      price: '$29.99',
      image: 'https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjA1NzY4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Premium',
      whatsappMessage: 'Hi! I\'m interested in the Organic Facial Serum ($29.99)',
      description: 'Luxurious anti-aging serum with rosehip and vitamin C. Hydrates and brightens skin naturally.',
      sustainability: [
        'Organic, wildcrafted ingredients',
        'Glass bottle - reusable & recyclable',
        'No synthetic fragrances or dyes',
        'Ethically sourced ingredients'
      ],
      materials: 'Organic rosehip oil, vitamin C, hyaluronic acid, aloe vera',
      certifications: ['Organic', 'Cruelty Free', 'Natural'],
      reviews: [
        { name: 'Jessica F.', rating: 5, comment: 'My skin is glowing! Worth every penny.' },
        { name: 'Amanda P.', rating: 5, comment: 'Finally a natural serum that actually works.' }
      ]
    },
    {
      id: 'p4',
      name: 'Reusable Cotton Pads',
      price: '$16.99',
      image: 'https://images.unsplash.com/photo-1651740896477-467ea46b4fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjA1NzY4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Eco-Friendly',
      whatsappMessage: 'Hi! I\'m interested in the Reusable Cotton Pads ($16.99)',
      description: 'Set of 16 reusable makeup remover pads with laundry bag. Soft on skin, tough on makeup.',
      sustainability: [
        'Replaces 1000+ disposable cotton rounds',
        'Machine washable',
        'Zero waste solution',
        'Lasts for years'
      ],
      materials: 'Organic cotton terry cloth, bamboo fabric blend',
      certifications: ['GOTS Certified', 'Organic'],
      reviews: [
        { name: 'Olivia G.', rating: 5, comment: 'So soft and they work better than disposables!' },
        { name: 'Chloe D.', rating: 5, comment: 'Can\'t believe I didn\'t switch sooner.' }
      ]
    }
  ],
  cleaning: [
    {
      id: 'c1',
      name: 'All-Purpose Cleaner',
      price: '$11.99',
      image: 'https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBjbGVhbmluZyUyMHN1cHBsaWVzfGVufDF8fHx8MTc2MDYyOTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Plant-Based',
      whatsappMessage: 'Hi! I\'m interested in the All-Purpose Cleaner ($11.99)',
      description: 'Concentrated plant-based cleaner. One bottle makes 3 spray bottles. Safe for all surfaces.',
      sustainability: [
        'Plant-based ingredients',
        'Concentrated formula reduces packaging',
        'Non-toxic and biodegradable',
        'Refillable glass bottle'
      ],
      materials: 'Plant-derived surfactants, essential oils, purified water',
      certifications: ['EPA Safer Choice', 'Biodegradable'],
      reviews: [
        { name: 'Mark R.', rating: 5, comment: 'Cleans amazingly and smells fresh!' },
        { name: 'Paula V.', rating: 4, comment: 'Works well on most surfaces. Good value.' }
      ]
    },
    {
      id: 'c2',
      name: 'Dish Soap Concentrate',
      price: '$13.99',
      image: 'https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBjbGVhbmluZyUyMHN1cHBsaWVzfGVufDF8fHx8MTc2MDYyOTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Zero Waste',
      whatsappMessage: 'Hi! I\'m interested in the Dish Soap Concentrate ($13.99)',
      description: 'Ultra-concentrated dish soap. Tough on grease, gentle on hands. Makes 16 oz when diluted.',
      sustainability: [
        'Zero waste packaging',
        'Concentrated = less shipping emissions',
        'No harmful chemicals',
        'Greywater safe'
      ],
      materials: 'Plant-based cleaners, aloe vera, vitamin E',
      certifications: ['EPA Safer Choice', 'Cruelty Free'],
      reviews: [
        { name: 'Jennifer K.', rating: 5, comment: 'Cuts through grease like magic!' },
        { name: 'Robert E.', rating: 5, comment: 'Hands feel great after washing dishes.' }
      ]
    },
    {
      id: 'c3',
      name: 'Microfiber Cloths Set',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBjbGVhbmluZyUyMHN1cHBsaWVzfGVufDF8fHx8MTc2MDYyOTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Reusable',
      whatsappMessage: 'Hi! I\'m interested in the Microfiber Cloths Set ($19.99)',
      description: 'Set of 12 premium microfiber cleaning cloths. Color-coded for different cleaning tasks.',
      sustainability: [
        'Replaces paper towels',
        'Washable 500+ times',
        'Cleans with just water',
        'Reduces chemical use'
      ],
      materials: 'Split microfiber blend (80% polyester, 20% polyamide)',
      certifications: ['Oeko-Tex Certified'],
      reviews: [
        { name: 'Diana S.', rating: 5, comment: 'Haven\'t bought paper towels in months!' },
        { name: 'Chris N.', rating: 5, comment: 'Super absorbent and durable.' }
      ]
    },
    {
      id: 'c4',
      name: 'Natural Laundry Detergent',
      price: '$22.99',
      image: 'https://images.unsplash.com/photo-1650964336589-96b3f1719a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBjbGVhbmluZyUyMHN1cHBsaWVzfGVufDF8fHx8MTc2MDYyOTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Bestseller',
      whatsappMessage: 'Hi! I\'m interested in the Natural Laundry Detergent ($22.99)',
      description: 'Plant-based laundry detergent for 64 loads. Works in all temperatures and machines.',
      sustainability: [
        'Plant-derived formula',
        'Safe for septic systems',
        'Hypoallergenic',
        'Recyclable packaging'
      ],
      materials: 'Plant-based enzymes, coconut-derived surfactants, essential oils',
      certifications: ['EPA Safer Choice', 'Hypoallergenic'],
      reviews: [
        { name: 'Laura M.', rating: 5, comment: 'Clothes come out fresh and clean every time!' },
        { name: 'Brian A.', rating: 5, comment: 'Great for sensitive skin. No more reactions.' }
      ]
    }
  ],
  fashion: [
    {
      id: 'f1',
      name: 'Organic Cotton T-Shirt',
      price: '$32.99',
      image: 'https://images.unsplash.com/photo-1573612664822-d7d347da7b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBjbG90aGVzfGVufDF8fHx8MTc2MDUyNzg2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Fair Trade',
      whatsappMessage: 'Hi! I\'m interested in the Organic Cotton T-Shirt ($32.99)',
      description: 'Soft, breathable organic cotton tee. Classic fit, ethically made. Available in 8 colors.',
      sustainability: [
        '100% organic cotton',
        'Fair trade certified',
        'Carbon neutral production',
        'Low-impact dyes'
      ],
      materials: '100% GOTS certified organic cotton',
      certifications: ['Fair Trade', 'GOTS Certified', 'Carbon Neutral'],
      reviews: [
        { name: 'Tyler S.', rating: 5, comment: 'Best t-shirt I\'ve ever owned. So comfortable!' },
        { name: 'Hannah B.', rating: 5, comment: 'Perfect fit and the fabric is amazing.' }
      ]
    },
    {
      id: 'f2',
      name: 'Recycled Denim Jeans',
      price: '$68.99',
      image: 'https://images.unsplash.com/photo-1573612664822-d7d347da7b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBjbG90aGVzfGVufDF8fHx8MTc2MDUyNzg2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Eco-Friendly',
      whatsappMessage: 'Hi! I\'m interested in the Recycled Denim Jeans ($68.99)',
      description: 'Stylish jeans made from 40% recycled denim. Modern fit with timeless style.',
      sustainability: [
        '40% recycled cotton content',
        'Water-saving production',
        'Recycled metal hardware',
        'Minimal chemical processing'
      ],
      materials: '60% organic cotton, 40% recycled cotton denim',
      certifications: ['Recycled Content', 'GOTS Certified'],
      reviews: [
        { name: 'Marcus J.', rating: 5, comment: 'Great fit! You can\'t even tell they\'re recycled.' },
        { name: 'Sophia W.', rating: 4, comment: 'Love the style. Runs slightly large.' }
      ]
    },
    {
      id: 'f3',
      name: 'Hemp Tote Bag',
      price: '$24.99',
      image: 'https://images.unsplash.com/photo-1573612664822-d7d347da7b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBjbG90aGVzfGVufDF8fHx8MTc2MDUyNzg2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'Bestseller',
      whatsappMessage: 'Hi! I\'m interested in the Hemp Tote Bag ($24.99)',
      description: 'Durable hemp tote bag perfect for shopping or daily use. Reinforced handles and bottom.',
      sustainability: [
        'Hemp is naturally pest-resistant',
        'Requires minimal water to grow',
        'Biodegradable material',
        'Replaces plastic bags'
      ],
      materials: '100% organic hemp canvas',
      certifications: ['Organic', 'Fair Trade'],
      reviews: [
        { name: 'Emily R.', rating: 5, comment: 'So sturdy! Holds all my groceries easily.' },
        { name: 'Nathan Q.', rating: 5, comment: 'Perfect size and very well made.' }
      ]
    },
    {
      id: 'f4',
      name: 'Sustainable Sneakers',
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1573612664822-d7d347da7b80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBjbG90aGVzfGVufDF8fHx8MTc2MDUyNzg2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      badge: 'New',
      whatsappMessage: 'Hi! I\'m interested in the Sustainable Sneakers ($89.99)',
      description: 'Comfortable sneakers made from recycled materials. Casual style meets eco-innovation.',
      sustainability: [
        'Upper made from recycled plastic bottles',
        'Natural rubber sole',
        'Recycled packaging',
        'Carbon offset shipping'
      ],
      materials: 'Recycled PET upper, natural rubber sole, organic cotton laces',
      certifications: ['Recycled Content', 'Carbon Neutral'],
      reviews: [
        { name: 'Jake M.', rating: 5, comment: 'Super comfortable and they look great!' },
        { name: 'Mia L.', rating: 5, comment: 'Finally sustainable shoes that don\'t compromise on style.' }
      ]
    }
  ]
};

const categoryNames: Record<string, string> = {
  kitchen: 'Kitchen',
  'personal-care': 'Personal Care',
  cleaning: 'Cleaning',
  fashion: 'Fashion'
};

export function ProductListScreen({ category, onBack }: ProductListScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const products = productsByCategory[category] || [];
  const categoryName = categoryNames[category] || category;

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    
    const query = searchQuery.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.badge.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleBuyNow = (product: Product) => {
    const message = encodeURIComponent(product.whatsappMessage);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onBack}
                className="hover:bg-green-50"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green-600" />
                <h1 className="text-green-600 text-2xl">{categoryName}</h1>
              </div>
            </div>
            <UserProfile />
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500">No products found matching "{searchQuery}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-green-600">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2">{product.name}</h3>
                    <p className="text-green-600">{product.price}</p>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyNow(product);
                    }}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Sheet */}
      <ProductDetailSheet
        product={selectedProduct}
        open={isDetailOpen}
        onOpenChange={setIsDetailOpen}
        onBuyNow={() => selectedProduct && handleBuyNow(selectedProduct)}
      />
    </div>
  );
}
