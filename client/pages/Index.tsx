import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Zap,
  Shield,
  TrendingUp,
  Users,
  Palette,
  MessageSquare,
  Award,
  Globe,
} from "lucide-react";

// Sample data
const trendingProducts = [
  {
    id: "1",
    title: "Premium UI Kit - Modern Design System",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    price: 29.99,
    originalPrice: 49.99,
    seller: {
      name: "Creative Studio Pro",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 4.8,
      reviews: 234,
    },
    isTrending: true,
    category: "UI/UX Design",
  },
  {
    id: "2",
    title: "Professional Logo Design Package",
    image:
      "https://images.unsplash.com/photo-1545665225-4b21f3862602?w=400&h=400&fit=crop",
    price: 49.99,
    originalPrice: 79.99,
    seller: {
      name: "Brand Masters",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      reviews: 512,
    },
    isHot: true,
    category: "Logo Design",
  },
  {
    id: "3",
    title: "3D Illustration Bundle - 50 Assets",
    image:
      "https://images.unsplash.com/photo-1552084443-5e93c55b127c?w=400&h=400&fit=crop",
    price: 99.99,
    originalPrice: 149.99,
    seller: {
      name: "Digital Artists Collective",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 4.9,
      reviews: 189,
    },
    isTrending: true,
    category: "3D Assets",
  },
  {
    id: "4",
    title: "Web Template - E-commerce Complete",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
    price: 39.99,
    originalPrice: 69.99,
    seller: {
      name: "Web Dev Team",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      rating: 4.7,
      reviews: 445,
    },
    isHot: true,
    category: "Web Templates",
  },
];

const hotDeals = trendingProducts.slice(1, 3);

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description:
      "Instant product delivery and transfers upon purchase completion",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure & Encrypted",
    description: "Military-grade encryption for all user data and transactions",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Real-time Chat",
    description: "Communicate directly with buyers and sellers instantly",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Verified Reviews",
    description: "Authentic ratings from verified buyers and sellers",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "AI Recommendations",
    description: "Smart suggestions based on your preferences and behavior",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Multilingual",
    description: "Support for 50+ languages and global payment methods",
  },
];

const steps = [
  {
    number: 1,
    title: "Create Account",
    description: "Sign up in seconds and set up your profile",
  },
  {
    number: 2,
    title: "Browse Products",
    description: "Discover amazing digital products from creators worldwide",
  },
  {
    number: 3,
    title: "Secure Purchase",
    description: "Pay safely with Stripe, PayPal, or digital wallets",
  },
  {
    number: 4,
    title: "Instant Delivery",
    description: "Get your product instantly or through your email",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium text-primary">
                  🚀 Welcome to the Future of Digital Commerce
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight">
                Create, Sell &amp; Thrive with{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Rozimurod Market
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-primary mb-4">
                Global Digital Marketplace
              </p>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                The ultimate marketplace for digital creators. Sell your
                designs, images, logos, and digital products to millions of
                buyers worldwide. Build your creative empire today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow"
                  asChild
                >
                  <Link to="/marketplace">Start Exploring</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg"
                  asChild
                >
                  <Link to="/sell">Start Selling</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-6 border-t border-border">
                <div>
                  <p className="text-2xl font-bold text-primary">10M+</p>
                  <p className="text-sm text-muted-foreground">
                    Products Listed
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">500K+</p>
                  <p className="text-sm text-muted-foreground">
                    Active Creators
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">$50M+</p>
                  <p className="text-sm text-muted-foreground">Total Sales</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
                <div className="relative h-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop"
                    alt="Creative Marketplace"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 rounded-lg p-4 shadow-lg border border-border max-w-xs">
                <p className="text-xs font-semibold text-primary mb-2">
                  🔥 HOT DEAL
                </p>
                <p className="text-sm font-bold text-foreground">
                  Professional Logo Design
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Limited time: 50% off
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                📈 Trending Now
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Most Popular Products
              </h2>
            </div>
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <Link to="/trending">View All →</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Button variant="ghost" className="w-full" asChild>
              <Link to="/trending">View All Trending Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hot Deals Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold text-destructive uppercase tracking-wide mb-2">
                🔥 Limited Time Offers
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Hot Deals This Week
              </h2>
            </div>
            <Button variant="ghost" className="hidden sm:inline-flex" asChild>
              <Link to="/hot-deals">Browse All →</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotDeals.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm-elevated hover:shadow-lg transition-shadow flex flex-col sm:flex-row"
              >
                <div className="w-full sm:w-48 h-48 sm:h-auto overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    className="rounded-lg bg-gradient-to-r from-primary to-accent"
                    asChild
                  >
                    <Link to={`/product/${product.id}`}>Buy Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              ✨ Why Choose Rozimurod
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Creators
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed as a digital creator on a single
              platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-md-elevated transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
              🎯 Getting Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-2xl flex items-center justify-center mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-8 w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary via-accent to-primary rounded-2xl p-8 sm:p-12 text-center text-white shadow-lg-elevated">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of creators earning money by selling their digital
              products on Rozimurod Market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-lg font-semibold"
                asChild
              >
                <Link to="/register">Create Free Account</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link to="/marketplace">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RM</span>
                </div>
                <span className="font-bold">Rozimurod Market</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The world's leading marketplace for digital products and
                creative services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/marketplace"
                    className="hover:text-primary transition-colors"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    to="/trending"
                    className="hover:text-primary transition-colors"
                  >
                    Trending
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hot-deals"
                    className="hover:text-primary transition-colors"
                  >
                    Hot Deals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Creators</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/sell"
                    className="hover:text-primary transition-colors"
                  >
                    Sell Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/creator-guide"
                    className="hover:text-primary transition-colors"
                  >
                    Creator Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="hover:text-primary transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © 2024 Rozimurod Market. All rights reserved. | Secure • Trusted
              • Global
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
