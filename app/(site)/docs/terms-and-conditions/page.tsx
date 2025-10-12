import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - GENZ Technologies",
  description:
    "These Terms and Conditions outline the rules and regulations for using the GENZ Technologies website and services. By accessing our website or making a payment, you agree to comply with these terms.",
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
                  <SidebarLink activeTab={1} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Terms and Conditions</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Welcome to GENZ Technologies. These Terms and Conditions
                  govern your use of our website, online payment services, and
                  any products or services offered by us. By using our platform,
                  you agree to follow these terms. Please read them carefully
                  before making any transaction.
                </p>

                <h5 style={{ marginBottom: 8 }}>Use of Our Website</h5>
                <ul>
                  <li>
                    You must be at least 18 years old or have parental consent
                    to use our services.
                  </li>
                  <li>
                    You agree to provide accurate, complete, and up-to-date
                    information during registration and payment.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account credentials.
                  </li>
                  <li>
                    You may not use our website for illegal, fraudulent, or
                    unauthorized activities.
                  </li>
                </ul>

                <h5 style={{ marginBottom: 8 }}>Orders and Payments</h5>
                <ul>
                  <li>
                    Payments are processed securely via our integrated local
                    payment gateway (IPG) to make transactions easy and reliable
                    for our customers.
                  </li>
                  <li>
                    By completing a transaction, you authorize GENZ Technologies
                    and its payment partners to charge your payment method for
                    the agreed amount.
                  </li>
                  <li>
                    Recurring transactions may be set up for certain services,
                    and you will always be informed and able to cancel at any
                    time before the next payment date.
                  </li>
                  <li>
                    All prices are listed in Sri Lankan Rupees (LKR) and are
                    applicable only to customers within Sri Lanka.
                  </li>
                  <li>
                    We reserve the right to decline or cancel any order if
                    fraudulent or suspicious activity is detected.
                  </li>
                </ul>

                <h5 style={{ marginBottom: 8 }}>Refunds and Disputes</h5>
                <ul>
                  <li>
                    Refunds are handled according to our Refund Policy, which
                    allows for fair resolution in case of disputes.
                  </li>
                  <li>
                    Customers must contact our support team within the specified
                    period with valid proof of payment and issue details.
                  </li>
                  <li>
                    Once approved, refunds will be made to the same payment
                    method used for the original transaction.
                  </li>
                </ul>

                <h5 style={{ marginBottom: 8 }}>Service Availability</h5>
                <ul>
                  <li>
                    We strive to keep our services operational at all times but
                    may perform maintenance or updates occasionally.
                  </li>
                  <li>
                    GENZ Technologies will not be liable for downtime or service
                    interruptions due to external factors.
                  </li>
                </ul>

                <h5 style={{ marginBottom: 8 }}>Intellectual Property</h5>
                <ul>
                  <li>
                    All content, software, and materials on this website are the
                    property of GENZ Technologies and protected by applicable
                    copyright laws.
                  </li>
                  <li>
                    You may not reproduce, reuse, or distribute our content
                    without prior written consent.
                  </li>
                </ul>

                <h5 style={{ marginBottom: 8 }}>Limitation of Liability</h5>
                <ul>
                  <li>
                    GENZ Technologies will not be held responsible for any
                    indirect, incidental, or consequential damages resulting
                    from the use or inability to use our website or services.
                  </li>
                  <li>
                    We do not guarantee uninterrupted or error-free access to
                    our website but always aim to maintain smooth service.
                  </li>
                </ul>

                <h5 style={{ marginBottom: 8 }}>Amendments</h5>
                <ul>
                  <li>
                    We reserve the right to modify or update these Terms and
                    Conditions at any time. Any changes will be effective
                    immediately upon posting on this page.
                  </li>
                  <li>
                    Continued use of our services after updates indicates your
                    acceptance of the revised terms.
                  </li>
                </ul>

                <h5 style={{ marginBottom: 8 }}>Contact Us</h5>
                <p>
                  If you have questions or concerns regarding these Terms and
                  Conditions, please contact our support team through the
                  contact page on our website.
                </p>

                <p className="mt-4 text-sm italic">
                  Effective Date: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
