import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Package,
  TrendingUp,
  AlertCircle,
  Ban,
  CheckCircle2,
  Eye,
  Trash2,
  BarChart3,
  Settings,
  Shield,
  DollarSign,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "12,543", icon: Users, color: "from-blue-500 to-blue-600" },
    { label: "Total Products", value: "8,291", icon: Package, color: "from-purple-500 to-purple-600" },
    { label: "Revenue (1%)", value: "$124,567", icon: DollarSign, color: "from-green-500 to-green-600" },
    { label: "Pending Reviews", value: "47", icon: AlertCircle, color: "from-orange-500 to-orange-600" },
  ];

  const pendingProducts = [
    {
      id: 1,
      title: "E-Commerce Website Template",
      seller: "Web Dev Studio",
      price: "$49.99",
      uploaded: "2024-01-16",
      status: "pending",
    },
    {
      id: 2,
      title: "AI Image Generator Tool",
      seller: "Tech Innovations",
      price: "$99.99",
      uploaded: "2024-01-15",
      status: "pending",
    },
    {
      id: 3,
      title: "Mobile Game Source Code",
      seller: "Game Masters",
      price: "$199.99",
      uploaded: "2024-01-14",
      status: "flagged",
    },
  ];

  const recentTransactions = [
    {
      id: "TXN001",
      buyer: "John Smith",
      product: "UI Design System",
      amount: "$79.99",
      commission: "$0.80",
      date: "2024-01-16",
      status: "completed",
    },
    {
      id: "TXN002",
      buyer: "Sarah Johnson",
      product: "Web Template",
      amount: "$49.99",
      commission: "$0.50",
      date: "2024-01-16",
      status: "completed",
    },
    {
      id: "TXN003",
      buyer: "Mike Davis",
      product: "Code Library",
      amount: "$29.99",
      commission: "$0.30",
      date: "2024-01-15",
      status: "completed",
    },
  ];

  const userReports = [
    {
      id: 1,
      user: "Suspicious User #1",
      reason: "Multiple fraud attempts",
      reported: "2024-01-16",
      status: "banned",
    },
    {
      id: 2,
      user: "Content Violator #2",
      reason: "Adult content upload",
      reported: "2024-01-15",
      status: "warned",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header isLoggedIn={true} userName="Admin" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <BarChart3 className="w-10 h-10" />
            Admin Control Panel
          </h1>
          <p className="text-muted-foreground">
            Manage users, products, transactions, and platform settings
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card
                key={idx}
                className="p-6 bg-gradient-to-br border-0 shadow-lg-elevated"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.1), rgba(0,0,0,0.05))`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="rounded-full">
                    This month
                  </Badge>
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
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="bg-muted rounded-lg p-1 w-full flex justify-start overflow-x-auto">
            <TabsTrigger value="pending" className="rounded-md">
              <AlertCircle className="w-4 h-4 mr-2" />
              Pending Products
            </TabsTrigger>
            <TabsTrigger value="transactions" className="rounded-md">
              <DollarSign className="w-4 h-4 mr-2" />
              Transactions
            </TabsTrigger>
            <TabsTrigger value="users" className="rounded-md">
              <Users className="w-4 h-4 mr-2" />
              User Management
            </TabsTrigger>
            <TabsTrigger value="reports" className="rounded-md">
              <Shield className="w-4 h-4 mr-2" />
              Reports & Bans
            </TabsTrigger>
            <TabsTrigger value="settings" className="rounded-md">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Pending Products Tab */}
          <TabsContent value="pending" className="space-y-4">
            <Card className="overflow-hidden border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Product
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Seller
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Price
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Uploaded
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
                    {pendingProducts.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-border hover:bg-muted/50 transition"
                      >
                        <td className="px-6 py-4">
                          <p className="font-semibold text-foreground text-sm">
                            {product.title}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {product.seller}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-foreground">
                          {product.price}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {product.uploaded}
                        </td>
                        <td className="px-6 py-4">
                          <Badge
                            variant={product.status === "flagged" ? "destructive" : "secondary"}
                            className="rounded-full text-xs"
                          >
                            {product.status === "flagged" ? "⚠️ Flagged" : "⏳ Pending"}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="rounded-lg"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Review
                          </Button>
                          <Button
                            size="sm"
                            className="rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg"
                          >
                            <CheckCircle2 className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="rounded-lg"
                          >
                            <Ban className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-4">
            <Card className="overflow-hidden border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Transaction ID
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
                        Commission
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
                    {recentTransactions.map((tx) => (
                      <tr
                        key={tx.id}
                        className="border-b border-border hover:bg-muted/50 transition"
                      >
                        <td className="px-6 py-4 font-mono text-sm font-semibold text-foreground">
                          {tx.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {tx.buyer}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-foreground">
                          {tx.product}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-primary">
                          {tx.amount}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-green-600">
                          {tx.commission}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {tx.date}
                        </td>
                        <td className="px-6 py-4">
                          <Badge
                            variant="secondary"
                            className="rounded-full text-xs bg-green-500/10 text-green-700 border-green-200"
                          >
                            ✓ {tx.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-4">
            <Card className="p-8 border-border">
              <div className="text-center py-12">
                <Users className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  User Management
                </h3>
                <p className="text-muted-foreground mb-6">
                  Detailed user management interface for ban/unban, role assignment, and user verification
                </p>
                <Button className="rounded-lg bg-gradient-to-r from-primary to-accent">
                  View User List
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-4">
            <Card className="overflow-hidden border-border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        User
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Report Reason
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Reported Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                        Action Taken
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">
                        Controls
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {userReports.map((report) => (
                      <tr
                        key={report.id}
                        className="border-b border-border hover:bg-muted/50 transition"
                      >
                        <td className="px-6 py-4 font-semibold text-foreground text-sm">
                          {report.user}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {report.reason}
                        </td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {report.reported}
                        </td>
                        <td className="px-6 py-4">
                          <Badge
                            variant={report.status === "banned" ? "destructive" : "secondary"}
                            className="rounded-full text-xs"
                          >
                            {report.status === "banned"
                              ? "🚫 Banned"
                              : "⚠️ Warned"}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          {report.status !== "banned" && (
                            <Button
                              size="sm"
                              variant="destructive"
                              className="rounded-lg"
                            >
                              <Ban className="w-4 h-4 mr-1" />
                              Ban User
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-4">
            <Card className="p-8 border-border">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Platform Commission Rate
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Current: 1% (fixed)
                    </p>
                    <Button variant="outline" className="rounded-lg">
                      Modify Rate
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">
                      Maintenance Mode
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Enable/disable platform access
                    </p>
                    <Button variant="outline" className="rounded-lg">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-bold text-foreground mb-4">
                    Security Settings
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-foreground">
                        Enable 2FA for admin accounts
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-foreground">
                        Require email verification for new users
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-foreground">
                        Enable fraud detection system
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
