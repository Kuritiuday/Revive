import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, Leaf, Recycle, Award, Star } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface ProductDetailSheetProps {
  product: {
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
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBuyNow: () => void;
}

export function ProductDetailSheet({ product, open, onOpenChange, onBuyNow }: ProductDetailSheetProps) {
  if (!product) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{product.name}</SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Product Image */}
          <div className="relative">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg"
            />
            <Badge className="absolute top-3 right-3 bg-green-600">
              {product.badge}
            </Badge>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <p className="text-green-600">{product.price}</p>
            <Button onClick={onBuyNow} className="bg-green-600 hover:bg-green-700">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy Now
            </Button>
          </div>

          {/* Tabs for Product Info */}
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="description">Details</TabsTrigger>
              <TabsTrigger value="sustainability">Eco Info</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="space-y-4 mt-4">
              <div>
                <h4 className="flex items-center gap-2 mb-2">
                  <Leaf className="w-4 h-4 text-green-600" />
                  Description
                </h4>
                <p className="text-gray-600">{product.description}</p>
              </div>
              <div>
                <h4 className="mb-2">Materials</h4>
                <p className="text-gray-600">{product.materials}</p>
              </div>
            </TabsContent>

            <TabsContent value="sustainability" className="space-y-4 mt-4">
              <div>
                <h4 className="flex items-center gap-2 mb-3">
                  <Recycle className="w-4 h-4 text-green-600" />
                  Sustainability Features
                </h4>
                <ul className="space-y-2">
                  {product.sustainability.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-green-600 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-green-600" />
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, idx) => (
                    <Badge key={idx} variant="outline" className="border-green-600 text-green-600">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-4">
              <ScrollArea className="h-80">
                <div className="space-y-4">
                  {product.reviews.map((review, idx) => (
                    <div key={idx} className="border-b pb-4 last:border-0">
                      <div className="flex items-center gap-2 mb-2">
                        <p>{review.name}</p>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}
