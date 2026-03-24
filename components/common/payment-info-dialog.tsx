"use client";

import { AlertCircle, CreditCard } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { usePayment } from "@/hooks/use-payment";

export default function PaymentInfoDialog() {
  const { isOpen, onClose } = usePayment();
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const accountNumber = "5692121918";
  const price = 40000;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle className="sr-only">Төлбөр төлөх</DialogTitle>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] p-0 gap-0 overflow-hidden overflow-y-auto">
        {/* Header Section with Gradient */}
        <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Төлбөр төлөх</h2>
                <p className="text-muted-foreground">Үйлчилгээний төлбөр</p>
              </div>
            </div>
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 h-12 px-6 text-xl font-semibold">
              {price.toLocaleString()}₮
            </Badge>
          </div>
        </div>

        {/* Status Card */}
        <div className="px-8 py-6 bg-gradient-to-br from-orange-50 to-orange-100/30 dark:from-orange-950/30 dark:to-transparent border-y">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <h3 className="font-medium text-orange-600 dark:text-orange-400">
                Төлбөр төлөөгүй
              </h3>
              <p className="text-sm text-orange-600/80 dark:text-orange-400/80">
                Таны бүртгэл одоогоор идэвхгүй байна
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Bank Details Card */}
          <Card className="overflow-hidden border-none ring-1 ring-border/50 shadow-md">
            <div className="bg-muted/50 px-6 py-4 border-b">
              <h4 className="font-medium">Дансны мэдээлэл</h4>
            </div>
            <div className="divide-y">
              <div className="px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                <div className="text-sm text-muted-foreground">Банк</div>
                <div className="font-medium">Хаан банк</div>
              </div>
              <div className="px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors group">
                <div className="text-sm text-muted-foreground">
                  Дансны дугаар
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-medium">{accountNumber}</div>
                </div>
              </div>
              <div className="px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                <div className="text-sm text-muted-foreground">
                  Хүлээн авагч
                </div>
                <div className="font-medium">Гео инженер сүрвэй” ХХК</div>
              </div>
              <div className="px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors">
                <div className="text-sm text-muted-foreground">
                  Гүйлгээний утга
                </div>
                <div className="font-medium">Нэр, утасны дугаар</div>
              </div>
            </div>
          </Card>

          {/* Notice Card */}
          <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-4 flex items-start gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg shrink-0">
              <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
              <p className="font-medium">Анхааруулга</p>
              <p>
                Төлбөр төлсний дараа таны бүртгэл 24 цагийн дотор идэвхжих
                болно. Асууж тодруулах зүйл байвал{" "}
                <span className="font-semibold">9999-9999</span> дугаарт
                холбогдоно уу.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="px-8 font-medium hover:bg-background"
            >
              Хаах
            </Button>
            <Button
              className="px-8 font-medium bg-primary hover:bg-primary/90"
              onClick={() => handleCopy(accountNumber)}
            >
              {copied ? "Хуулагдлаа" : "Дансны дугаар хуулах"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
