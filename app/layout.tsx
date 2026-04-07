import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PromotionBanner from "@/components/PromotionBanner";


const raleway = Raleway({
  subsets: ["latin"],
  display: "swap", 
});

export const metadata: Metadata = {
  title: "Virtual Assistant Services in London | ReliAssist",
  description: "Hire reliable, affordable virtual assistants in London. ReliAssist helps entrepreneurs and businesses scale without overhead stress.",
  keywords: "virtual assistant services, hire virtual assistant, business virtual assistant, outsourcing virtual assistant, remote assistant services, virtual assistant for small business, professional virtual assistant, affordable virtual assistant services, dedicated virtual assistant, customer service outsourcing, live chat support services, remote customer support assistant, customer support virtual assistant, administrative virtual assistant, email management services, calendar management assistant, data entry virtual assistant, social media management services, content creation virtual assistant, social media assistant for business, remote social media manager, website support services, technical virtual assistant, UI UX design services, CMS management services, graphic design virtual assistant, branding design services, social media graphics design, project management virtual assistant, research assistant services, business operations support, hire a virtual assistant UK, virtual assistant pricing plans, monthly virtual assistant packages, dedicated assistant service UK, outsource business tasks, hire remote staff for business, virtual assistant subscription, increase productivity with virtual assistant, reduce workload for business owners, save hiring costs with virtual assistants, scalable business support services, flexible outsourcing solutions, time-saving business services, hire a virtual assistant for small business UK, affordable virtual assistant services for startups, virtual assistant for customer service support, outsource admin tasks to virtual assistant, social media management virtual assistant UK, dedicated virtual assistant with flexible hours, virtual assistant services for entrepreneurs, ReliAssist virtual assistant services, ReliAssist outsourcing solutions, ReliAssist business support, productivity partner virtual assistant, Fiverr virtual assistant alternative, Upwork virtual assistant services alternative, agency virtual assistant services",
  openGraph: {
    title: "Virtual Assistant Services in London | ReliAssist",
    description: "Hire reliable, affordable virtual assistants in London. ReliAssist helps entrepreneurs and businesses scale without overhead stress.",
    url: "https://reliassist.co/",
    siteName: "ReliAssist",
    // images: [
    //   {
    //     url: "https://reliassist.co/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "ReliAssist Virtual Assistant Services",
    //   },
    // ],
    // locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bannerData = {
    message: "Subscribe to any plan, pay for 2 months and get 1 month free.",
    ctaText: "Hire Now",
    ctaLink: "https://forms.zohopublic.com/reliassist1/form/LetsMergeYouWithThePerfectVAForYou/formperma/zl7SfYPqi2ajNM1jisikGepE6qym_zjwblIx_WvweM0",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      {/* 3. Use raleway.className instead of variable */}
      <body className={`${raleway.className} antialiased`}>
        <PromotionBanner
          message={bannerData.message}
          ctaText={bannerData.ctaText}
          ctaLink={bannerData.ctaLink}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}