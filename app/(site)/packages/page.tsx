import Pricing from "@/components/Pricing";
import SidebarLink from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages - GENZ Technologies",
  description: "Package Deatils for GENZ Technologies Services",
  // other metadata
};

export default function Packages() {
  return (
    <>
      <div className="mt-6 pt-5">
      <Pricing />
      </div>
      
    </>
  );
}
