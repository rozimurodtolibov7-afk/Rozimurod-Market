import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Shield,
  AlertCircle,
  Gavel,
  Clock,
  Download,
  FileText,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProductDetail() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [hasMultipleBidders, setHasMultipleBidders] = useState(true);
  const [bidAmount, setBidAmount] = useState("49.99");

  const product = {
    id: "1",
    title: "Professional E-Commerce Website Template - React & Tailwind",
    description:
      "A fully functional, modern e-commerce website template built with React and Tailwind CSS. Perfect for online stores, digital product sales, and SaaS platforms. Includes shopping cart, payment integration, user authentication, and more.",
    price: 49.99,
    originalPrice: 79.99,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    seller: {
      name: "Web Dev Studio",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 4.9,
      reviews: 234,
      salesCount: 1203,
    },
    category: "Web Templates",
    fileSize: "125 MB",
    fileFormat: "ZIP (HTML, CSS, JS, Assets)",
    compatible: "All modern browsers, Node.js 14+",
    includes: [
      "Source code (React + Tailwind)",
      "Component library",
      "Product catalog template",
      "Shopping cart system",
      "Payment form integration",
      "User dashboard",
      "Admin panel template",
      "Responsive design",
      "Dark mode included",
      "Documentation & setup guide",
    ],
    downloads: 4521,
    rating: 4.8,
    totalReviews: 127,
    isSold: false,
    soldCount: 1203,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header isLoggedIn={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 text-sm">
          <a href="/" className="text-primary hover:underline">
            Home
          </a>
          <span className="text-muted-foreground">/</span>
          <a href="/marketplace" className="text-primary hover:underline">
            Marketplace
          </a>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{product.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-lg shadow-lg-elevated bg-muted h-96 lg:h-[500px]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />

              {!product.isSold && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10">
                  <div className="text-center opacity-40">
                    <div className="text-5xl font-bold text-white mix-blend-multiply text-center whitespace-nowrap">
                      Rozimurod Market
                    </div>
                    <p className="text-lg text-white mix-blend-multiply mt-3">
                      Watermark - Unlocked After Purchase
                    </p>
                  </div>
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isFavorite
                      ? "fill-destructive text-destructive"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <Badge className="mb-3 rounded-full text-xs font-bold">
                    {product.category}
                  </Badge>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    {product.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {product.description}
                  </p>
                </div>
                <button className="p-2 hover:bg-muted rounded-lg transition">
                  <Share2 className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 pb-4 border-b border-border">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-secondary text-secondary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.totalReviews} reviews)
                </span>
              </div>

              {/* Downloads */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Download className="w-4 h-4" />
                <span>{product.downloads.toLocaleString()} downloads</span>
              </div>
            </div>

            {/* Specifications */}
            <Card className="p-6 border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                📦 What's Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Technical Details */}
            <Card className="p-6 border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                ⚙️ Technical Specifications
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">File Size:</span>
                  <span className="font-semibold text-foreground">
                    {product.fileSize}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="font-semibold text-foreground">
                    {product.fileFormat}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-muted-foreground">Compatible:</span>
                  <span className="font-semibold text-foreground">
                    {product.compatible}
                  </span>
                </div>
              </div>
            </Card>

            {/* Security Notice */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg flex gap-3">
              <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground mb-1">
                  🔒 Secure Purchase Guarantee
                </p>
                <p className="text-muted-foreground">
                  Your purchase is protected with industry-standard encryption
                  and secure payment processing. Files are verified and
                  delivered safely.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Auction Alert */}
            {hasMultipleBidders && (
              <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
                <div className="flex gap-2 items-start mb-3">
                  <Gavel className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">
                      🔥 Auction Triggered!
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Multiple buyers want this product. An auction is active
                      for the next buyer!
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Price Card */}
            <Card className="p-6 border-border bg-gradient-to-br from-card to-primary/5">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <p className="text-xs text-accent font-semibold mt-2">
                      Save ${(product.originalPrice - product.price).toFixed(2)}{" "}
                      (
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100,
                      )}
                      %)
                    </p>
                  )}
                </div>

                {/* Commission Notice */}
                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground mb-2">
                    Seller receives:
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    ${(product.price * 0.99).toFixed(2)}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    1% platform commission applied
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <Button className="w-full rounded-lg bg-gradient-to-r from-primary to-accent py-6 text-base font-semibold hover:shadow-lg transition-shadow">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now
                  </Button>

                  {hasMultipleBidders && (
                    <div className="space-y-2">
                      <Label
                        htmlFor="bidAmount"
                        className="text-sm font-semibold"
                      >
                        <Gavel className="w-4 h-4 inline mr-1" />
                        Place Bid
                      </Label>
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            $
                          </span>
                          <Input
                            id="bidAmount"
                            type="number"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                            className="pl-7 rounded-lg"
                            min={product.price}
                            step="0.01"
                          />
                        </div>
                        <Button variant="outline" className="rounded-lg px-6">
                          Bid
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Minimum bid: ${product.price}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Seller Info */}
            <Card className="p-6 border-border">
              <h3 className="font-bold text-foreground mb-4">
                👤 About Seller
              </h3>
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">
                    {product.seller.name}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.seller.rating)
                            ? "fill-secondary text-secondary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-semibold text-foreground">
                    {product.seller.rating}/5
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reviews</span>
                  <span className="font-semibold text-foreground">
                    {product.seller.reviews}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sales</span>
                  <span className="font-semibold text-foreground">
                    {product.seller.salesCount.toLocaleString()}
                  </span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4 rounded-lg">
                Contact Seller
              </Button>
            </Card>

            {/* Verification Badge */}
            <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg text-center">
              <p className="text-xs font-semibold text-green-700 dark:text-green-300">
                ✓ Verified & Secure
              </p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                Encrypted transactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
