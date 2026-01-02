import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  Wallet,
  TrendingUp,
  CreditCard,
  DollarSign,
  ArrowUpRight,
  ArrowDownLeft,
  Lock,
  Shield,
  Plus,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function WalletPage() {
  const [showBalance, setShowBalance] = useState(true);
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const walletData = {
    totalBalance: 4852.43,
    pendingBalance: 129.50,
    totalEarnings: 12450.75,
    platformCommission: 124.51,
    bankAccounts: [
      {
        id: "1",
        name: "Stripe Express",
        lastFour: "4242",
        status: "verified",
      },
    ],
  };

  const transactions = [
    {
      id: "1",
      type: "sale",
      description: "E-Commerce Template Sale",
      amount: 49.99,
      commission: 0.50,
      net: 49.49,
      date: "2024-01-15",
      status: "completed",
      buyerName: "John Doe",
    },
    {
      id: "2",
      type: "withdrawal",
      description: "Withdrawal to Bank",
      amount: -500.0,
      date: "2024-01-14",
      status: "pending",
    },
    {
      id: "3",
      type: "sale",
      description: "UI Kit Design Sale",
      amount: 79.99,
      commission: 0.80,
      net: 79.19,
      date: "2024-01-13",
      status: "completed",
      buyerName: "Jane Smith",
    },
    {
      id: "4",
      type: "sale",
      description: "Web Template Sale",
      amount: 29.99,
      commission: 0.30,
      net: 29.69,
      date: "2024-01-12",
      status: "completed",
      buyerName: "Mike Johnson",
    },
  ];

  const earnings = [
    { month: "Jan", sales: 1200, commission: 12, net: 1188 },
    { month: "Feb", sales: 1450, commission: 14.50, net: 1435.50 },
    { month: "Mar", sales: 2100, commission: 21, net: 2079 },
    { month: "Apr", sales: 2890, commission: 28.90, net: 2861.10 },
    { month: "May", sales: 3500, commission: 35, net: 3465 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header isLoggedIn={true} userName="Creative Pro" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            💰 My Wallet
          </h1>
          <p className="text-muted-foreground">
            Manage your earnings, withdrawals, and payment methods securely
          </p>
        </div>

        {/* Main Balance Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Total Balance */}
          <Card className="p-8 bg-gradient-to-br from-primary via-accent to-primary shadow-lg-elevated border-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white/80 font-semibold">Available Balance</h3>
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-white/60 hover:text-white transition"
              >
                {showBalance ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
            <div className="mb-6">
              <p className="text-5xl font-bold text-white mb-2">
                {showBalance ? `$${walletData.totalBalance.toFixed(2)}` : "****"}
              </p>
              <p className="text-white/70 text-sm">
                Ready to withdraw anytime
              </p>
            </div>
            <Button
              className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30"
              asChild
            >
              <a href="#withdraw">Withdraw Funds</a>
            </Button>
          </Card>

          {/* Pending Balance */}
          <Card className="p-8 border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Balance</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">
              ${walletData.pendingBalance.toFixed(2)}
            </p>
            <p className="text-xs text-muted-foreground">
              Processing from recent sales
            </p>
          </Card>

          {/* Total Earnings */}
          <Card className="p-8 border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
              </div>
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">
              ${walletData.totalEarnings.toFixed(2)}
            </p>
            <p className="text-xs text-muted-foreground">
              All-time earnings
            </p>
          </Card>
        </div>

        {/* Commission Notice */}
        <Card className="p-4 border-primary/30 bg-primary/5 mb-8">
          <div className="flex gap-3">
            <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm mb-1">
                🔒 Platform Commission Breakdown
              </p>
              <p className="text-sm text-muted-foreground">
                For every sale, Rozimurod Market retains 1% as commission.
                <strong className="block mt-1">
                  Total Commission Collected: ${walletData.platformCommission.toFixed(2)}
                </strong>
              </p>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="transactions" className="space-y-6">
          <TabsList className="bg-muted rounded-lg p-1">
            <TabsTrigger value="transactions" className="rounded-md">
              Transactions
            </TabsTrigger>
            <TabsTrigger value="withdraw" className="rounded-md">
              Withdraw Funds
            </TabsTrigger>
            <TabsTrigger value="payment-methods" className="rounded-md">
              Payment Methods
            </TabsTrigger>
            <TabsTrigger value="earnings" className="rounded-md">
              Earnings
            </TabsTrigger>
          </TabsList>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-4">
            <Card className="border-border">
              <div className="p-6">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                  Recent Transactions
                </h3>

                <div className="space-y-3">
                  {transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition border border-transparent hover:border-border"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className={`p-3 rounded-lg ${
                            tx.type === "sale"
                              ? "bg-green-500/10"
                              : "bg-blue-500/10"
                          }`}
                        >
                          {tx.type === "sale" ? (
                            <ArrowDownLeft className="w-5 h-5 text-green-500" />
                          ) : (
                            <ArrowUpRight className="w-5 h-5 text-blue-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm">
                            {tx.description}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {tx.date}
                            {tx.buyerName && ` • ${tx.buyerName}`}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-foreground">
                          {tx.type === "sale" ? "+" : "-"}$
                          {Math.abs(tx.amount).toFixed(2)}
                        </p>
                        {tx.commission !== undefined && (
                          <p className="text-xs text-muted-foreground">
                            Commission: -${tx.commission.toFixed(2)}
                          </p>
                        )}
                        {tx.net !== undefined && (
                          <p className="text-xs text-green-600 font-semibold">
                            Net: +${tx.net.toFixed(2)}
                          </p>
                        )}
                        <div className="mt-2">
                          {tx.status === "completed" ? (
                            <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-500/10 px-2 py-1 rounded">
                              <CheckCircle2 className="w-3 h-3" />
                              Completed
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs text-yellow-600 bg-yellow-500/10 px-2 py-1 rounded">
                              ⏳ {tx.status}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Withdraw Tab */}
          <TabsContent value="withdraw" id="withdraw" className="space-y-4">
            <Card className="p-8 border-border">
              <h3 className="font-bold text-foreground mb-6">Withdraw Funds</h3>

              {/* Minimum Notice */}
              <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg mb-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-1">
                      Minimum Withdrawal: $50
                    </p>
                    <p className="text-muted-foreground">
                      Withdrawals are processed within 1-2 business days to your connected bank account.
                    </p>
                  </div>
                </div>
              </div>

              {/* Withdraw Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="bankAccount" className="font-semibold mb-2 block">
                    Bank Account
                  </Label>
                  <div className="flex items-center gap-3 p-4 border border-border rounded-lg bg-muted/30">
                    <CreditCard className="w-5 h-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-sm">
                        Stripe Express
                      </p>
                      <p className="text-xs text-muted-foreground">
                        •••• •••• •••• 4242
                      </p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="withdrawAmount" className="font-semibold mb-2 block">
                    Withdraw Amount
                  </Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <Input
                      id="withdrawAmount"
                      type="number"
                      placeholder="50.00"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      className="pl-8 rounded-lg"
                      min="50"
                      step="0.01"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Available: ${walletData.totalBalance.toFixed(2)}
                  </p>
                </div>

                {withdrawAmount && (
                  <div className="p-4 bg-muted rounded-lg space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Withdraw Amount:</span>
                      <span className="font-semibold text-foreground">
                        ${parseFloat(withdrawAmount || "0").toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Processing Fee:</span>
                      <span className="font-semibold text-foreground">$0.00</span>
                    </div>
                    <div className="border-t border-border pt-2 flex justify-between items-center">
                      <span className="font-semibold text-foreground">Total:</span>
                      <span className="text-lg font-bold text-primary">
                        ${parseFloat(withdrawAmount || "0").toFixed(2)}
                      </span>
                    </div>
                  </div>
                )}

                <Button
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow"
                  disabled={
                    !withdrawAmount ||
                    parseFloat(withdrawAmount) < 50 ||
                    parseFloat(withdrawAmount) > walletData.totalBalance
                  }
                >
                  Request Withdrawal
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Payment Methods Tab */}
          <TabsContent value="payment-methods" className="space-y-4">
            <Card className="p-8 border-border">
              <h3 className="font-bold text-foreground mb-6">Payment Methods</h3>

              {/* Current Bank Account */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 border border-green-200 dark:border-green-900/50 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <CreditCard className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        Stripe Express
                      </p>
                      <p className="text-sm text-muted-foreground">
                        •••• •••• •••• 4242 • Verified
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full rounded-lg border-dashed"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Payment Method
              </Button>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  We support Stripe and PayPal for secure transfers. All connections are encrypted and your banking information is never shared.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings" className="space-y-4">
            <Card className="p-8 border-border">
              <h3 className="font-bold text-foreground mb-6">Earnings Summary</h3>

              <div className="space-y-4">
                {earnings.map((month, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition border border-transparent hover:border-border"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{month.month}</p>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Sales</p>
                        <p className="font-bold text-foreground">
                          ${month.sales.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right min-w-fit">
                        <p className="text-sm text-muted-foreground">Commission</p>
                        <p className="font-bold text-destructive">
                          -${month.commission.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right min-w-fit">
                        <p className="text-sm text-muted-foreground">Net</p>
                        <p className="font-bold text-green-600">
                          ${month.net.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-foreground">
                    Total Lifetime Earnings
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    ${walletData.totalEarnings.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Including all commissions deducted
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Security Info */}
        <div className="mt-8 p-6 bg-card border border-border rounded-lg">
          <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            🔒 Security & Privacy
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              All transactions are encrypted with SSL 256-bit encryption
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              Bank information is never stored on our servers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              Payments processed by Stripe and PayPal (PCI compliant)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              Two-factor authentication available for extra security
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              Detailed transaction records for tax purposes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
