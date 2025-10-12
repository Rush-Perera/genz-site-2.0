import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - GENZ Technologies",
  description:
    "GENZ Technologies is committed to protecting the privacy and confidentiality of our clients’ information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services.",
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
                  <SidebarLink activeTab={2} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Privacy Policy</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  At GENZ Technologies (Pvt) Ltd, we are committed to protecting
                  the privacy and confidentiality of our clients’ personal and
                  business information. This Privacy Policy explains how we
                  collect, use, and safeguard your data when you visit our
                  website, communicate with us, or use our digital products and
                  services. By using our website or services, you consent to the
                  practices outlined below.
                </p>

                <h3 style={{ marginBottom: 4 }}>1. Information We Collect</h3>
                <p>We collect information necessary to provide our services effectively, including:</p>
                <ul>
                  <li>
                    <strong>Personal information:</strong> such as your name,
                    email address, contact number, and company details submitted
                    through forms, quotations, or registration processes.
                  </li>
                  <li>
                    <strong>Billing and payment details:</strong> including
                    transaction-related information processed securely through
                    trusted third-party payment gateways.
                  </li>
                  <li>
                    <strong>Project and communication data:</strong> information
                    related to project discussions, requirements, and
                    correspondences.
                  </li>
                  <li>
                    <strong>Technical data:</strong> IP address, browser type,
                    and usage data collected automatically through cookies and
                    analytics tools to improve user experience.
                  </li>
                </ul>

                <h3 style={{ marginBottom: 4 }}>2. How We Use Your Information</h3>
                <p>GENZ Technologies uses collected data to:</p>
                <ul>
                  <li>Deliver and manage our software and IT services.</li>
                  <li>Process payments and manage project billing.</li>
                  <li>Communicate updates, technical notices, or support messages.</li>
                  <li>Improve our website, digital platforms, and user experience.</li>
                  <li>Comply with legal and financial recordkeeping obligations.</li>
                </ul>

                <h3 style={{ marginBottom: 4 }}>3. Information Sharing</h3>
                <p>
                  We respect your privacy and will not sell or rent your
                  information to third parties. However, we may share your data
                  with:
                </p>
                <ul>
                  <li>
                    <strong>Trusted service providers:</strong> including
                    hosting, payment processing, and analytics partners who
                    assist in operating our business. These parties are bound by
                    confidentiality and data protection agreements.
                  </li>
                  <li>
                    <strong>Legal authorities:</strong> if required by law or
                    for the protection of our rights, customers, or business.
                  </li>
                </ul>

                <h3 style={{ marginBottom: 4 }}>4. Data Security</h3>
                <p>
                  We use appropriate administrative, technical, and physical
                  safeguards to protect your information from unauthorized
                  access, misuse, or disclosure. All sensitive payment data is
                  encrypted and handled through secure third-party payment
                  gateways. While we follow best practices, no online
                  transmission is completely risk-free, and we cannot guarantee
                  absolute security.
                </p>

                <h3 style={{ marginBottom: 4 }}>5. Cookies and Analytics</h3>
                <p>
                  Our website uses cookies and similar technologies to analyze
                  site traffic and improve functionality. You can modify your
                  browser settings to disable cookies, though some features may
                  not work as intended. We may also use analytics tools (e.g.,
                  Google Analytics) to understand visitor behavior and improve
                  services.
                </p>

                <h3 style={{ marginBottom: 4 }}>6. Data Retention</h3>
                <p>
                  We retain client and transaction data for as long as necessary
                  to fulfill the purpose for which it was collected and to meet
                  legal, tax, or accounting obligations. Generally, personal and
                  project data is retained for up to <strong>5–7 years</strong>,
                  after which it may be securely deleted or anonymized.
                </p>

                <h3 style={{ marginBottom: 4 }}>7. Customer Registration & Verification</h3>
                <p>
                  To use our services or make payments through our Internet
                  Payment Gateway (IPG), clients must register an account with
                  accurate details. We verify email and/or phone information and
                  may request additional identification for high-value or
                  recurring transactions. This ensures secure and authorized
                  access for all clients.
                </p>

                <h3 style={{ marginBottom: 4 }}>8. Updates to This Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in technology, legal requirements, or our business
                  practices. Updates will be posted on this page with a revised
                  “Last Updated” date.
                </p>

                <h3 style={{ marginBottom: 4 }}>9. Contact Us</h3>
                <p>
                  For any questions or concerns about this Privacy Policy or how
                  your information is handled, please contact us at:
                </p>
                <p>
                  <strong>GENZ Technologies (Pvt) Ltd</strong> <br />
                  Email: info@genztechno.com <br />
                  Website: www.genztechno.com <br />
                  Phone: +94 717 030402
                </p>

                <p className="mt-6">
                  Your privacy is important to us, and we are committed to
                  maintaining transparency and trust in all our digital
                  interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
