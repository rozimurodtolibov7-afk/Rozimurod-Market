import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User, Mail, Lock, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms?: boolean;
}

export default function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const password = watch("password");

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Register data:", data);
      // Redirect to dashboard or home
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  };

  const passwordRequirements = [
    {
      label: "At least 8 characters",
      met: password?.length >= 8,
    },
    {
      label: "Contains uppercase letter",
      met: /[A-Z]/.test(password || ""),
    },
    {
      label: "Contains number",
      met: /[0-9]/.test(password || ""),
    },
    {
      label: "Contains special character",
      met: /[!@#$%^&*]/.test(password || ""),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-md">
          {/* Hero Text */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Create Account
            </h1>
            <p className="text-muted-foreground">
              Join Rozimurod Market today and start your creative journey
            </p>
          </div>

          {/* Register Card */}
          <Card className="p-8 shadow-md-elevated border-border">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="pl-10 rounded-lg"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 rounded-lg"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-foreground font-medium"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 rounded-lg"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="text-xs text-destructive">
                    {errors.password.message}
                  </p>
                )}

                {/* Password Requirements */}
                <div className="mt-3 space-y-2">
                  {passwordRequirements.map((req, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 ${
                          req.met ? "text-green-500" : "text-muted-foreground"
                        }`}
                      />
                      {req.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-foreground font-medium"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 rounded-lg"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-xs text-destructive">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  className="mt-1 rounded accent-primary"
                  {...register("acceptTerms", {
                    required: "You must accept the terms and conditions",
                  })}
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-xs text-muted-foreground cursor-pointer"
                >
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:text-accent">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-primary hover:text-accent"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-xs text-destructive">
                  {errors.acceptTerms.message}
                </p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Creating account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="px-2 bg-card text-muted-foreground">
                    Or sign up with
                  </span>
                </div>
              </div>

              {/* Social Register */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-lg"
                  disabled={isLoading}
                >
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-lg"
                  disabled={isLoading}
                >
                  GitHub
                </Button>
              </div>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-primary hover:text-accent transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </Card>

          {/* Benefits */}
          <div className="mt-8 space-y-3">
            <p className="text-xs font-semibold text-foreground text-center mb-3">
              ✓ What you get:
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-primary">✓</span>
              Digital wallet for secure payments
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-primary">✓</span>
              Sell or buy digital products
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-primary">✓</span>
              Real-time chat with buyers & sellers
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="text-primary">✓</span>
              AI-powered recommendations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
