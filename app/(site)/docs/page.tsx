import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agreements - GENZ Technologies",
  description: "At GENZ Technologies, your privacy, rights, and satisfaction are our top priorities. This page provides a consolidated overview of our Terms and Conditions, Privacy Policy, and Refund Policy, helping you understand how we operate, protect your information, and manage transactions safely.",
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink activeTab={0} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Agreements</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Welcome to GENZ Technologies, where your privacy, rights, and satisfaction are our top priorities. 
                  This page provides a consolidated overview of our key policies, including Terms and Conditions, Privacy Policy, and Refund Policy. 
                  Understanding these policies will help you know how we operate, protect your information, and handle transactions securely.
                </p>

                <h3 style={{ marginBottom: 2 }}>Terms and Conditions</h3>
                <p>
                  Our Terms and Conditions define the rules for using our website and services. By engaging with GENZ Technologies, you agree to comply with these terms. 
                  They cover areas such as account registration, authorized use, payment obligations, intellectual property rights, limitations of liability, and termination of services. 
                  These terms ensure a safe and reliable experience for all our clients.
                </p>

                <h3 style={{ marginBottom: 2 }}>Privacy Policy</h3>
                <p>
                  Protecting your privacy is fundamental to us. Our Privacy Policy explains the personal and business information we collect, how it is used, and the measures we take to safeguard it. 
                  This includes secure handling of IPG payment data, client project details, and communication records. We are committed to transparency, responsible data management, and compliance with applicable privacy regulations.
                </p>

                <h3 style={{ marginBottom: 2 }}>Refund Policy</h3>
                <p>
                  Your satisfaction matters. Our Refund Policy outlines the conditions under which refunds may be issued for services or products, including eligibility criteria, procedures, and timelines. 
                  It also covers how disputes related to payments or services are resolved, ensuring a fair and transparent process for our clients.
                </p>

                <p className="mt-4">
                  At GENZ Technologies, we are dedicated to clear, fair, and professional guidelines that protect both our clients and our business. 
                  For any questions or further clarifications regarding these agreements, please contact our support team directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
