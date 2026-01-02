import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
  CreditCard,
  Lock,
  CheckCircle2,
  Shield,
  Zap,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const cartItems = [
    {
      id: 1,
      title: "E-Commerce Website Template",
      price: 49.99,
      seller: "Web Dev Studio",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=150&h=150&fit=crop",
    },
  ];

  const subtotal = 49.99;
  const platformFee = 0.5;
  const total = subtotal + platformFee;

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: "💳",
      description: "Visa, MasterCard, American Express",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: "🅿️",
      description: "Fast and secure payment",
    },
    {
      id: "crypto",
      name: "Cryptocurrency",
      icon: "₿",
      description: "Bitcoin, Ethereum, and more",
    },
    {
      id: "stripe",
      name: "Stripe",
      icon: "💰",
      description: "Secure payment processor",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header isLoggedIn={true} userName="John Doe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-foreground mb-2">🛒 Checkout</h1>
        <p className="text-muted-foreground mb-12">
          Complete your purchase securely
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Order Review */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order Items */}
            <Card className="p-6 border-border">
              <h2 className="font-bold text-lg text-foreground mb-6">
                Order Items
              </h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        by {item.seller}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Payment Method Selection */}
            <Card className="p-6 border-border">
              <h2 className="font-bold text-lg text-foreground mb-6">
                Select Payment Method
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`p-4 rounded-lg border-2 transition text-left ${
                      paymentMethod === method.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{method.icon}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm">
                          {method.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {method.description}
                        </p>
                      </div>
                      {paymentMethod === method.id && (
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Payment Details Form */}
            {paymentMethod === "card" && (
              <Card className="p-6 border-border">
                <h2 className="font-bold text-lg text-foreground mb-6">
                  Card Details
                </h2>

                <div className="space-y-4">
                  <div>
                    <Label
                      htmlFor="cardName"
                      className="font-semibold mb-2 block"
                    >
                      Cardholder Name
                    </Label>
                    <Input
                      id="cardName"
                      placeholder="John Doe"
                      className="rounded-lg"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="cardNumber"
                      className="font-semibold mb-2 block"
                    >
                      Card Number
                    </Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="expiry"
                        className="font-semibold mb-2 block"
                      >
                        Expiry Date
                      </Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvc" className="font-semibold mb-2 block">
                        CVC
                      </Label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Billing Address */}
            <Card className="p-6 border-border">
              <h2 className="font-bold text-lg text-foreground mb-6">
                Billing Address
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="font-semibold mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="john@example.com"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-semibold mb-2 block">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="font-semibold mb-2 block">
                    Street Address
                  </Label>
                  <Input
                    id="address"
                    placeholder="123 Main Street"
                    className="rounded-lg"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city" className="font-semibold mb-2 block">
                      City
                    </Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="font-semibold mb-2 block">
                      State/Province
                    </Label>
                    <Input id="state" placeholder="NY" className="rounded-lg" />
                  </div>
                  <div>
                    <Label htmlFor="zip" className="font-semibold mb-2 block">
                      Zip Code
                    </Label>
                    <Input
                      id="zip"
                      placeholder="10001"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="country" className="font-semibold mb-2 block">
                    Country
                  </Label>
                  <Input
                    id="country"
                    placeholder="United States"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Order Summary */}
          <div className="space-y-6">
            {/* Order Summary Card */}
            <Card className="p-6 border-border bg-gradient-to-br from-card to-muted/50 sticky top-24">
              <h2 className="font-bold text-lg text-foreground mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-foreground">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">
                    Platform Fee (1%)
                  </span>
                  <span className="font-semibold text-foreground">
                    ${platformFee.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-foreground">Total</span>
                <span className="text-2xl font-bold text-primary">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Button className="w-full rounded-lg bg-gradient-to-r from-primary to-accent py-6 text-base font-semibold hover:shadow-lg transition-shadow mb-4">
                <Lock className="w-5 h-5 mr-2" />
                Complete Purchase
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By completing this purchase, you agree to our Terms of Service
              </p>
            </Card>

            {/* Security Info */}
            <Card className="p-4 border-primary/30 bg-primary/5">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">
                      256-Bit Encryption
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Your payment is encrypted and secure
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">
                      Verified Seller
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Seller is verified and trusted
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">
                      Instant Delivery
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Product delivered immediately after purchase
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Platform Fee Explanation */}
            <Card className="p-4 border-border">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-foreground mb-1">
                    Platform Commission
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Rozimurod Market charges 1% on all purchases to maintain the
                    platform and ensure secure transactions.
                  </p>
                </div>
              </div>
            </Card>

            {/* Accepted Payment Methods */}
            <Card className="p-4 border-border">
              <p className="font-semibold text-foreground text-sm mb-3">
                Accepted Payment Methods
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "💳 Visa",
                  "💳 Mastercard",
                  "🅿️ PayPal",
                  "₿ Crypto",
                  "💰 Stripe",
                ].map((method) => (
                  <Badge
                    key={method}
                    variant="secondary"
                    className="rounded-full text-xs"
                  >
                    {method}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
