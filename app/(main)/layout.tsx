import PaymentInfoDialog from "@/components/common/payment-info-dialog";
import Navbar from "@/components/layout/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="mx-auto w-full flex-1 overflow-auto px-3 pt-[74px] md:px-0">
        {children}
      </main>
      <PaymentInfoDialog />
    </div>
  );
}
