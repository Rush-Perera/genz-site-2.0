import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agreements - GENZ Technologies",
  description: "Welcome to GenZ Technologies, where your privacy, rights, and satisfaction are our top priorities. This consolidated overview provides key insights into our Terms and Conditions, Privacy Policy, and Refund Policy. Please take a moment to familiarize yourself with these policies to understand how we operate, protect your information, and address any concerns related to your transactions with us.",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink activeTab={0}/>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Agreements</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                Welcome to GenZ Technologies, where your privacy, rights, and satisfaction are our top priorities. 
                This consolidated overview provides key insights into our Terms and Conditions, Privacy Policy, and Refund Policy. 
                Please take a moment to familiarize yourself with these policies to understand how we operate, protect your information, 
                and address any concerns related to your transactions with us.
                </p>
                <h3 style={{ marginBottom: 2 }}>Terms and Conditions</h3>
                <p >Our Terms and Conditions govern the use of our website and services. By engaging with GENZ Technologies, you agree to abide by these rules and regulations. They cover various aspects, including intellectual property rights, user contributions, limitations of liability, and the termination of services.</p>
                <h3 style={{ marginBottom: 2 }}>Privacy Policy</h3>
                <p>Respecting your privacy is fundamental to us. Our Privacy Policy outlines the information we collect, how it's used, and the measures we take to safeguard your personal data. We're committed to transparency and ensuring that your data is handled responsibly and in accordance with applicable privacy laws.</p>
                <h3 style={{ marginBottom: 2 }}>Refund Policy</h3>
                <p>Your satisfaction is essential. Our Refund Policy details the conditions under which refunds may be processed for products or services. It clarifies eligibility criteria, refund procedures, and the steps you should take in case you're dissatisfied with your purchase.</p>
                <p>Your trust is crucial to us, and we are dedicated to providing clear and fair guidelines to make your experience with GENZ Technologies positive and secure. If you have any questions or require further clarification, feel free to contact our customer support team.</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
