import Pricing from "@/components/Pricing";
import Pricing2 from "@/components/Pricing2";
import SidebarLink from "@/components/Pricing";
import { Metadata } from "next";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Packages - GENZ Technologies",
  description: "Package Deatils for GENZ Technologies Services",
  // other metadata
};

export default function Packages() {
  return (
    <>
      <div className="mt-4 pt-4">
      <Pricing />
      
      </div>
      <div className="mt-4 pt-4">
      <Pricing2 />
      
      </div>
      <div className="mt-1 pt-1">
      <CTA />
      
      </div>
      
      
    </>
  );
}
