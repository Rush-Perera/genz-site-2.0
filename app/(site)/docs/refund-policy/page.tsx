import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
  title: "Refund Policy - GENZ Technologies",
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
                  <SidebarLink activeTab={3} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Refund Policy</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Thank you for shopping at GenZ Technologies. We value your satisfaction and strive to provide you with the best online shopping experience possible. If, for any reason, you are not completely satisfied with your purchase, we are here to help.
                </p>

                <h3 style={{ marginBottom: 4 }}>Returns</h3>
                <p>
                  We accept returns within 3 days from the date of purchase. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                </p>

                <h5 style={{ marginBottom: 8 }}>Refunds</h5>
                <p>
                  Once we receive your return and inspect the item, we will notify you of the status of your refund. If your return is approved, we will initiate a refund to your original method of payment. Please note that the refund amount will exclude any shipping charges incurred during the initial purchase.
                </p>

                <h5 style={{ marginBottom: 8 }}>Exchanges</h5>
                <p>
                  If you would like to exchange your item for a different size, color, or style, please contact our customer support team within 3 days of receiving your order. We will provide you with further instructions on how to proceed with the exchange.
                </p>

                <h5 style={{ marginBottom: 8 }}>Non-Returnable Items</h5>
                <p>
                  Certain items are non-returnable and non-refundable. These include:
                </p>
                <ul>
                  <li>Gift cards</li>
                  <li>Downloadable software products</li>
                  <li>Personalized or custom-made items</li>
                  <li>Perishable goods</li>
                </ul>

                <h5 style={{ marginBottom: 8 }}>Damaged or Defective Items</h5>
                <p>
                  In the unfortunate event that your item arrives damaged or defective, please contact us immediately. We will arrange for a replacement or issue a refund, depending on your preference and product availability.
                </p>

                <h5 style={{ marginBottom: 8 }}>Return Shipping</h5>
                <p>
                  You will be responsible for paying the shipping costs for returning your item unless the return is due to our error (e.g., wrong item shipped, defective product). In such cases, we will provide you with a prepaid shipping label.
                </p>

                <h5 style={{ marginBottom: 8 }}>Processing Time</h5>
                <p>
                  Refunds and exchanges will be processed within 3 business days after we receive your returned item. Please note that it may take additional time for the refund to appear in your account, depending on your payment provider.
                </p>

                <h5 style={{ marginBottom: 8 }}>Contact Us</h5>
                <p>
                  If you have any questions or concerns regarding our refund policy, please contact our customer support team. We are here to assist you and ensure your shopping experience with us is enjoyable and hassle-free.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
