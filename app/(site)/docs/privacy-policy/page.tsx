import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
  title: "Privacy Policy - GENZ Technologies",
  description: "At GenZ Technologies, we are committed to protecting the privacy and security of our customers' personal information.This Privacy Policy outlines how we collect, use, and safeguard your information when you visit or make a purchase on our website. By using our website, you consent to the practices described in this policy.",
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
                <SidebarLink activeTab={2}/>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
  <h1>Privacy Policy</h1>

  <p className="text-body-color dark:text-body-color-dark text-base">
    At GenZ Technologies, we are committed to protecting the privacy and security of our customers' personal information.
    This Privacy Policy outlines how we collect, use, and safeguard your information when you visit or make a purchase on our website.
    By using our website, you consent to the practices described in this policy.
  </p>

  <h3 style={{ marginBottom: 4 }}>Information We Collect</h3>
  <p>
    When you visit our website, we may collect certain information about you, including:
  </p>
  <ul>
    <li>Personal identification information (such as your name, email address, and phone number) provided voluntarily by you during the registration or checkout process.</li>
    <li>Payment and billing information necessary to process your orders, including credit card details, which are securely handled by trusted third-party payment processors.</li>
    <li>Browsing information, such as your IP address, browser type, and device information, collected automatically using cookies and similar technologies.</li>
  </ul>

  <h5 style={{ marginBottom: 8 }}>Use of Information</h5>
  <p>
    We may use the collected information for the following purposes:
  </p>
  <ul>
    <li>To process and fulfill your orders, including shipping and delivery.</li>
    <li>To communicate with you regarding your purchases, provide customer support, and respond to inquiries or requests.</li>
    <li>To personalize your shopping experience and present relevant product recommendations and promotions.</li>
    <li>To improve our website, products, and services based on your feedback and browsing patterns.</li>
    <li>To detect and prevent fraud, unauthorized activities, and abuse of our website.</li>
  </ul>

  <h5 style={{ marginBottom: 8 }}>Information Sharing</h5>
  <p>
    We respect your privacy and do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
  </p>
  <ul>
    <li>Trusted service providers: We may share your information with third-party service providers who assist us in operating our website, processing payments, and delivering products. These providers are contractually obligated to handle your data securely and confidentially.</li>
    <li>Legal requirements: We may disclose your information if required to do so by law or in response to valid legal requests or orders.</li>
  </ul>

  <h5 style={{ marginBottom: 8 }}>Data Security</h5>
  <p>
    We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
  </p>

  <h5 style={{ marginBottom: 8 }}>Cookies and Tracking Technologies</h5>
  <p>
    We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and gather information about your preferences and interactions with our website. You have the option to disable cookies through your browser settings, but this may limit certain features and functionality of our website.
  </p>

  <h5 style={{ marginBottom: 8 }}>Changes to the Privacy Policy</h5>
  <p>
    We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with a revised "last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.
  </p>

  <h5 style={{ marginBottom: 8 }}>Contact Us</h5>
  <p>
    If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us using the information provided on our website.
  </p>
</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
