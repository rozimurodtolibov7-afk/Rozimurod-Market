import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TrendingUp,
  Package,
  ShoppingBag,
  Eye,
  Edit,
  Trash2,
  Plus,
  DollarSign,
  BarChart3,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function SellerDashboard() {
  const stats = [
    { label: "Total Sales", value: "127", icon: ShoppingBag, color: "from-blue-500 to-blue-600" },
    { label: "Total Earnings", value: "$12,543.67", icon: DollarSign, color: "from-green-500 to-green-600" },
    { label: "Active Products", value: "23", icon: Package, color: "from-purple-500 to-purple-600" },
    { label: "Avg Rating", value: "4.8★", icon: TrendingUp, color: "from-yellow-500 to-yellow-600" },
  ];

  const myProducts = [
    {
      id: 1,
      title: "E-Commerce Website Template",
      price: "$49.99",
      sales: 45,
      views: 1203,
      rating: "4.8★ (23)",
      status: "active",
      uploaded: "2024-01-10",
      commission: "$0.50",
    },
    {
      id: 2,
      title: "AI Image Generator Tool",
      price: "$99.99",
      sales: 12,
      views: 456,
      rating: "4.9★ (8)",
      status: "active",
      uploaded: "2024-01-08",
      commission: "$1.20",
    },
    {
      id: 3,
      title: "Mobile Game Source Code",
      price: "$199.99",
      sales: 3,
      views: 89,
      rating: "4.7★ (2)",
      status: "pending",
      uploaded: "2024-01-15",
      commission: "$2.40",
    },
  ];

  const recentSales = [
    {
      id: "SALE001",
      buyer: "John Smith",
      product: "E-Commerce Template",
      amount: "$49.99",
      commission: "$0.50",
      net: "$49.49",
      date: "2024-01-16",
      status: "completed",
    },
    {
      id: "SALE002",
      buyer: "Sarah Johnson",
      product: "AI Generator",
      amount: "$99.99",
      commission: "$1.00",
      net: "$98.99",
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: "SALE003",
      buyer: "Mike Davis",
      product: "Game Code",
      amount: "$199.99",
      commission: "$2.00",
      net: "$197.99",
      date: "2024-01-14",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header isLoggedIn={true} userName="Creative Pro" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
              <BarChart3 className="w-10 h-10" />
              Seller Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage your products, track sales, and monitor earnings
            </p>
          </div>
          <Button className="rounded-lg bg-gradient-to-r from-primary to-accent" asChild>
            <Link to="/upload">
              <Plus className="w-5 h-5 mr-2" />
              Upload Product
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="p-6 bg-gradient-to-br border-0 shadow-lg-elevated">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="bg-muted rounded-lg p-1 w-full">
            <TabsTrigger value="products" className="rounded-md">
              <Package className="w-4 h-4 mr-2" />
              My Products
            </TabsTrigger>
            <TabsTrigger value="sales" className="rounded-md">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Recent Sales
            </TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-md">
              <TrendingUp className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-4">
            <div className="overflow-x-auto">
              <Card className="overflow-hidden border-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Product
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Price
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Sales
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Views
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Rating
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myProducts.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-border hover:bg-muted/50 transition"
                      >
                        <td className="px-6 py-4">
                          <p className="font-semibold text-foreground text-sm">
                            {product.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {product.uploaded}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-primary">
                          {product.price}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-foreground">
                          {product.sales}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {product.views}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {product.rating}
                        </td>
                        <td className="px-6 py-4">
                          <Badge
                            variant={product.status === "active" ? "secondary" : "outline"}
                            className="rounded-full text-xs"
                          >
                            {product.status === "active" ? "✓ Active" : "⏳ Pending"}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="rounded-lg"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="rounded-lg"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="rounded-lg text-destructive hover:text-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          </TabsContent>

          {/* Sales Tab */}
          <TabsContent value="sales" className="space-y-4">
            <Card className="overflow-hidden border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Sale ID
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Buyer
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Product
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Commission (1%)
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        You Earn
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentSales.map((sale) => (
                      <tr
                        key={sale.id}
                        className="border-b border-border hover:bg-muted/50 transition"
                      >
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-foreground">
                          {sale.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {sale.buyer}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-foreground">
                          {sale.product}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-primary">
                          {sale.amount}
                        </td>
                        <td className="px-6 py-4 text-sm text-destructive font-semibold">
                          -{sale.commission}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-green-600">
                          {sale.net}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {sale.date}
                        </td>
                        <td className="px-6 py-4">
                          <Badge
                            variant="secondary"
                            className="rounded-full text-xs bg-green-500/10 text-green-700 border-green-200"
                          >
                            ✓ {sale.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 border-border">
                <h3 className="font-bold text-foreground mb-6">Sales Trend</h3>
                <div className="space-y-4">
                  {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-foreground">
                          {week}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {[32, 45, 38, 52][idx]} sales
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                          style={{
                            width: `${([32, 45, 38, 52][idx] / 52) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 border-border">
                <h3 className="font-bold text-foreground mb-6">Earnings Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-green-500/10 border border-green-200 dark:border-green-900">
                    <span className="text-sm font-semibold text-foreground">
                      Total Earnings
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      $12,543.67
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-orange-500/10 border border-orange-200 dark:border-orange-900">
                    <span className="text-sm font-semibold text-foreground">
                      Total Commission (1%)
                    </span>
                    <span className="text-xl font-bold text-orange-600">
                      -$125.44
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="text-sm font-semibold text-foreground">
                      Net Earnings
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      $12,418.23
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Commission Info */}
        <Card className="p-6 border-primary/30 bg-primary/5 mt-8">
          <div className="flex gap-4">
            <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground mb-2">
                Platform Commission (1%)
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Rozimurod Market charges 1% commission on every sale to maintain the platform.
                You receive 99% of the product price directly to your wallet.
              </p>
              <p className="text-xs text-muted-foreground">
                Example: Product sells for $100 → You get $99 | Platform gets $1
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
