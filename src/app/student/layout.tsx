import ApplyHeader from "@/components/common/ApplyHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ApplyHeader />
      {children}
    </>
  );
}
