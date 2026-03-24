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
      <main className="flex-1 pt-20 px-3 md:px-0 py-5 w-full overflow-auto container mx-auto">
        {children}
      </main>
      <PaymentInfoDialog />
    </div>
  );
}
