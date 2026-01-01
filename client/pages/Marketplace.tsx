import { useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter, X } from "lucide-react";

// Sample marketplace products
const allProducts = [
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
    isSold: false,
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
    isSold: false,
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
    isSold: false,
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
    isSold: false,
    isHot: true,
    category: "Web Templates",
  },
  {
    id: "5",
    title: "Social Media Graphics Pack",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    price: 19.99,
    originalPrice: 39.99,
    seller: {
      name: "Social Design Hub",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 4.6,
      reviews: 321,
    },
    isSold: false,
    category: "Social Media",
  },
  {
    id: "6",
    title: "Photography Lightroom Presets",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    price: 24.99,
    originalPrice: 39.99,
    seller: {
      name: "Photo Masters",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      rating: 4.9,
      reviews: 678,
    },
    isSold: false,
    category: "Photography",
  },
  {
    id: "7",
    title: "Icon Library - 1000+ Icons",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    price: 34.99,
    originalPrice: 59.99,
    seller: {
      name: "Icon Designers Pro",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 4.8,
      reviews: 445,
    },
    isSold: false,
    category: "UI/UX Design",
  },
  {
    id: "8",
    title: "Mobile App UI Kit - Flutter",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    price: 54.99,
    originalPrice: 89.99,
    seller: {
      name: "App Dev Studio",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 4.7,
      reviews: 234,
    },
    isSold: true,
    category: "App Templates",
  },
];

const categories = [
  "All Categories",
  "UI/UX Design",
  "Logo Design",
  "3D Assets",
  "Web Templates",
  "Social Media",
  "Photography",
  "App Templates",
  "Fonts & Typography",
  "Illustrations",
];

export default function Marketplace() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("trending");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products based on all criteria
  const handleFilter = (
    category?: string,
    sort?: string,
    price?: number[],
    search?: string,
  ) => {
    let filtered = allProducts;

    // Category filter
    if (category && category !== "All Categories") {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Price filter
    if (price) {
      filtered = filtered.filter(
        (p) => p.price >= price[0] && p.price <= price[1],
      );
    }

    // Search filter
    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Rating filter
    if (ratingFilter) {
      filtered = filtered.filter((p) => p.seller.rating >= ratingFilter);
    }

    // Sort
    switch (sort || sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.seller.rating - a.seller.rating);
        break;
      case "newest":
        filtered.reverse();
        break;
      case "trending":
      default:
        filtered = filtered.filter((p) => !p.isSold);
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleFilter(category, sortBy, priceRange, searchQuery);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    handleFilter(selectedCategory, sort, priceRange, searchQuery);
  };

  const handlePriceChange = (price: number[]) => {
    setPriceRange(price);
    handleFilter(selectedCategory, sortBy, price, searchQuery);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    handleFilter(selectedCategory, sortBy, priceRange, query);
  };

  const handleRatingChange = (rating: number) => {
    setRatingFilter(ratingFilter === rating ? null : rating);
    handleFilter(selectedCategory, sortBy, priceRange, searchQuery);
  };

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">
          Search Products
        </label>
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="rounded-lg"
        />
      </div>

      {/* Categories */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">
          Category
        </label>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`w-full text-left text-sm px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "hover:bg-muted text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <Slider
          value={priceRange}
          onValueChange={handlePriceChange}
          min={0}
          max={200}
          step={10}
          className="w-full"
        />
      </div>

      {/* Rating Filter */}
      <div>
        <label className="text-sm font-semibold text-foreground mb-3 block">
          Minimum Rating
        </label>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <Checkbox
                checked={ratingFilter === rating}
                onCheckedChange={() => handleRatingChange(rating)}
              />
              <span className="text-muted-foreground">{rating}★ & up</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Marketplace Header */}
      <section className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Marketplace
              </h1>
              <p className="text-muted-foreground">
                Discover {filteredProducts.length} amazing digital products
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <Select value={sortBy} onValueChange={handleSortChange}>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Filters
                </h3>
                <button
                  onClick={() => {
                    setSelectedCategory("All Categories");
                    setSortBy("trending");
                    setPriceRange([0, 200]);
                    setRatingFilter(null);
                    setSearchQuery("");
                    handleFilter("All Categories", "trending", [0, 200], "");
                  }}
                  className="text-sm text-primary hover:text-primary/80 mb-4"
                >
                  Reset Filters
                </button>
              </div>
              <FilterPanel />
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="rounded-lg w-full">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-foreground mb-6">
                      Filters
                    </h3>
                    <FilterPanel />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found matching your filters
                </p>
                <Button
                  variant="outline"
                  className="rounded-lg"
                  onClick={() => {
                    setSelectedCategory("All Categories");
                    setSortBy("trending");
                    setPriceRange([0, 200]);
                    setRatingFilter(null);
                    setSearchQuery("");
                    handleFilter("All Categories", "trending", [0, 200], "");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
