import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Upload,
  ShieldAlert,
  Lock,
} from "lucide-react";
import { useForm } from "react-hook-form";

interface UploadFormData {
  title: string;
  description: string;
  category: string;
  price: number;
  file: FileList;
  acceptModeration: boolean;
  acceptLegal: boolean;
}

const categories = [
  "Web Templates",
  "Mobile Apps",
  "UI/UX Design",
  "Graphics & Images",
  "Videos & Motion Graphics",
  "Photography",
  "Audio & Music",
  "Scripts & Code",
  "Game Assets",
  "3D Models",
  "Software & Tools",
  "Other",
];

const forbiddenContent = [
  "Adult or NSFW content",
  "Illegal software or tools",
  "Copyrighted materials without permission",
  "Malware or dangerous code",
  "Hate speech or discriminatory content",
  "Hacked or cracked software",
  "Personal information of others",
  "Unethical or scam products",
];

export default function UploadProduct() {
  const [fileSelected, setFileSelected] = useState(false);
  const [fileName, setFileName] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UploadFormData>({
    defaultValues: {
      title: "",
      description: "",
      category: "",
      price: 0,
      acceptModeration: false,
      acceptLegal: false,
    },
  });

  const acceptMod = watch("acceptModeration");
  const acceptLegal = watch("acceptLegal");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFileSelected(true);
    }
  };

  const onSubmit = async (data: UploadFormData) => {
    console.log("Upload data:", data);
    // Handle upload
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
      <Header isLoggedIn={true} userName="Creator Pro" />

      <div className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">
              Upload Your Digital Product
            </h1>
            <p className="text-lg text-muted-foreground">
              Share your creative work with thousands of buyers worldwide. Every
              product is protected with our Rozimurod Market watermark until
              purchased.
            </p>
          </div>

          {/* Content Moderation Warning */}
          <div className="mb-8 p-6 border-2 border-destructive/50 rounded-lg bg-destructive/5">
            <div className="flex gap-4">
              <ShieldAlert className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-foreground mb-3">
                  ⚠️ Content Moderation Policy
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Rozimurod Market maintains strict content standards. The
                  following content is strictly forbidden:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {forbiddenContent.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-destructive mt-1">✕</span>
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-destructive font-semibold mt-4">
                  Violation may result in account suspension and legal action.
                </p>
              </div>
            </div>
          </div>

          {/* Upload Form */}
          <Card className="p-8 shadow-lg-elevated border-border">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Product Title */}
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="text-foreground font-semibold"
                >
                  Product Title *
                </Label>
                <Input
                  id="title"
                  placeholder="e.g., Modern E-commerce Website Template"
                  className="rounded-lg"
                  {...register("title", {
                    required: "Title is required",
                    minLength: {
                      value: 10,
                      message: "Title must be at least 10 characters",
                    },
                    maxLength: {
                      value: 100,
                      message: "Title must not exceed 100 characters",
                    },
                  })}
                />
                {errors.title && (
                  <p className="text-xs text-destructive">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Product Description */}
              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-foreground font-semibold"
                >
                  Detailed Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe your product features, what's included, system requirements, etc..."
                  className="rounded-lg min-h-[150px]"
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 50,
                      message: "Description must be at least 50 characters",
                    },
                  })}
                />
                {errors.description && (
                  <p className="text-xs text-destructive">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Category */}
                <div className="space-y-2">
                  <Label
                    htmlFor="category"
                    className="text-foreground font-semibold"
                  >
                    Category *
                  </Label>
                  <Select {...register("category", { required: true })}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select category..." />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-xs text-destructive">
                      Category is required
                    </p>
                  )}
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <Label
                    htmlFor="price"
                    className="text-foreground font-semibold"
                  >
                    Price (USD) *
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      $
                    </span>
                    <Input
                      id="price"
                      type="number"
                      placeholder="29.99"
                      step="0.01"
                      min="0"
                      className="pl-7 rounded-lg"
                      {...register("price", {
                        required: "Price is required",
                        min: {
                          value: 0.99,
                          message: "Minimum price is $0.99",
                        },
                        max: {
                          value: 999.99,
                          message: "Maximum price is $999.99",
                        },
                      })}
                    />
                  </div>
                  {errors.price && (
                    <p className="text-xs text-destructive">
                      {errors.price.message}
                    </p>
                  )}
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file" className="text-foreground font-semibold">
                  Upload Product File *
                </Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer bg-card/50">
                  <input
                    id="file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file" className="cursor-pointer block">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="font-semibold text-foreground mb-1">
                      {fileSelected
                        ? "✓ File selected"
                        : "Click to upload or drag and drop"}
                    </p>
                    {fileSelected ? (
                      <p className="text-sm text-primary">{fileName}</p>
                    ) : (
                      <p className="text-xs text-muted-foreground">
                        ZIP, RAR, or common file formats (Max 500MB)
                      </p>
                    )}
                  </label>
                </div>
              </div>

              {/* Commission Notice */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex gap-3">
                  <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-1">
                      Platform Commission
                    </p>
                    <p className="text-muted-foreground">
                      For every sale, Rozimurod Market retains 1% as platform
                      commission. You receive the remaining 99%.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Example: If product sells for $100, you receive $99 in
                      your wallet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Watermark Notice */}
              <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-1">
                      Automatic Watermark Protection
                    </p>
                    <p className="text-muted-foreground">
                      Your product will automatically display a "Rozimurod
                      Market" watermark until purchased. This protects your
                      intellectual property.
                    </p>
                  </div>
                </div>
              </div>

              {/* Moderation Checkboxes */}
              <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 rounded accent-primary"
                    {...register("acceptModeration", {
                      required: "You must accept content policies",
                    })}
                  />
                  <span className="text-sm text-foreground">
                    I confirm this product contains no adult, illegal, or
                    unethical content and complies with all moderation policies
                  </span>
                </label>
                {errors.acceptModeration && (
                  <p className="text-xs text-destructive">
                    {errors.acceptModeration.message}
                  </p>
                )}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mt-1 rounded accent-primary"
                    {...register("acceptLegal", {
                      required: "You must confirm ownership and legal rights",
                    })}
                  />
                  <span className="text-sm text-foreground">
                    I own all rights to this product and take full
                    responsibility for its content
                  </span>
                </label>
                {errors.acceptLegal && (
                  <p className="text-xs text-destructive">
                    {errors.acceptLegal.message}
                  </p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-6 border-t border-border">
                <Button
                  type="submit"
                  disabled={!acceptMod || !acceptLegal || !fileSelected}
                  className="flex-1 rounded-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-shadow disabled:opacity-50"
                >
                  Upload & List Product
                </Button>
                <Button variant="outline" className="rounded-lg" asChild>
                  <a href="/my-products">Cancel</a>
                </Button>
              </div>
            </form>
          </Card>

          {/* Security Info */}
          <div className="mt-8 p-6 bg-card border border-border rounded-lg">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              🔒 Security & Privacy
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                All files are encrypted and securely stored
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                Automatic watermarking protects your IP
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                Buyers cannot share or redistribute your content
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                Your earnings are safely held in your wallet
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
