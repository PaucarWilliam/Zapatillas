import { montserrat } from "@/components/fonts";
import "./globals.css";


export default function Inicial({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = {`${montserrat.className} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
