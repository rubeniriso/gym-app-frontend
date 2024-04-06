import Navbar from "@/components/ui/Navbar";

export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <Navbar />
      <div className="mt-[80px]"> {children}</div>
    </section>
  );
}
