import { Heart, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  seller: {
    name: string;
    avatar: string;
    rating: number;
    reviews: number;
  };
  isSold?: boolean;
  isHot?: boolean;
  isTrending?: boolean;
  category?: string;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  onChat?: () => void;
}

export default function ProductCard({
  id,
  title,
  image,
  price,
  originalPrice,
  seller,
  isSold = false,
  isHot = false,
  isTrending = false,
  category = "Design",
  isFavorite = false,
  onFavoriteToggle,
  onChat,
}: ProductCardProps) {
  const discountPercent = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="group flex flex-col h-full bg-card rounded-lg shadow-sm-elevated hover:shadow-md-elevated transition-all duration-300 overflow-hidden hover:translate-y-[-2px]">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Watermark for Unsold Products */}
        {!isSold && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center opacity-40">
              <div className="text-4xl font-bold text-white mix-blend-multiply text-center whitespace-nowrap">
                Rozimurod Market
              </div>
              <p className="text-sm text-white mt-2 mix-blend-multiply">
                Watermark - Product Pending
              </p>
            </div>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isHot && (
            <Badge className="bg-destructive text-white hover:bg-destructive rounded-full text-xs font-bold">
              🔥 Hot Deal
            </Badge>
          )}
          {isTrending && (
            <Badge className="bg-primary text-white hover:bg-primary rounded-full text-xs font-bold">
              📈 Trending
            </Badge>
          )}
          {isSold && (
            <Badge className="bg-muted text-foreground hover:bg-muted rounded-full text-xs font-bold">
              ✓ Sold
            </Badge>
          )}
          {discountPercent > 0 && (
            <Badge className="bg-accent text-white hover:bg-accent rounded-full text-xs font-bold">
              -{discountPercent}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={onFavoriteToggle}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100"
          title={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite
                ? "fill-destructive text-destructive"
                : "text-muted-foreground"
            }`}
          />
        </button>

        {/* Chat Button */}
        {!isSold && (
          <button
            onClick={onChat}
            className="absolute bottom-3 right-3 p-2 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-accent transition-all opacity-0 group-hover:opacity-100"
            title="Chat with seller"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Category */}
        {category && (
          <p className="text-xs font-medium text-primary uppercase tracking-wide mb-2">
            {category}
          </p>
        )}

        {/* Title */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors group-hover:underline">
          <Link to={`/product/${id}`}>{title}</Link>
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Seller Info */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
          <img
            src={seller.avatar}
            alt={seller.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              {seller.name}
            </p>
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.floor(seller.rating)
                        ? "fill-secondary text-secondary"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({seller.reviews})
              </span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        {isSold ? (
          <Button disabled className="w-full rounded-lg">
            Sold Out
          </Button>
        ) : (
          <Button className="w-full rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow" asChild>
            <Link to={`/product/${id}`}>View Details</Link>
          </Button>
        )}
      </div>
    </div>
  );
}
