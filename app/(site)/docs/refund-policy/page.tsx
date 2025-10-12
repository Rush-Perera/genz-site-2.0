import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - GENZ Technologies",
  description:
    "GENZ Technologies is committed to providing high-quality software development and IT services. This Refund Policy explains our procedures and conditions for handling refunds and disputes.",
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
                  <SidebarLink activeTab={3} />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Refund Policy</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  At GENZ Technologies (Pvt) Ltd, we are committed to delivering
                  reliable and high-quality software development, web, and IT
                  services. This Refund Policy outlines our approach to handling
                  refunds, cancellations, and disputes to ensure transparency
                  and fairness for all clients.
                </p>

                <h3 style={{ marginBottom: 4 }}>1. Project-Based Services</h3>
                <p>
                  For custom software development, website, or mobile app
                  projects, refunds are considered only if the project has not
                  yet reached the development phase or if GENZ Technologies
                  fails to deliver the agreed scope of work as per the approved
                  proposal. Any approved refund will be based on the portion of
                  work completed at the time of the request.
                </p>

                <h3 style={{ marginBottom: 4 }}>2. Non-Refundable Situations</h3>
                <ul>
                  <li>Once design, development, or deployment work has begun.</li>
                  <li>For services already rendered or deliverables already approved by the client.</li>
                  <li>For third-party costs such as domains, hosting, SSL, licenses, or API integrations.</li>
                  <li>For delays caused by client-side feedback, content submission, or scope changes.</li>
                </ul>

                <h3 style={{ marginBottom: 4 }}>3. Refund Request Process</h3>
                <p>
                  Clients may submit a refund request in writing to our support
                  team at <strong>support@genztechno.com</strong> with project
                  details and reasons for dissatisfaction. Our team will review
                  the request and respond within <strong>5–10 business days</strong>.
                  If approved, refunds will be processed via the original payment
                  method within <strong>10–15 business days</strong>, subject to
                  bank or gateway timelines.
                </p>

                <h3 style={{ marginBottom: 4 }}>4. Dispute Resolution</h3>
                <p>
                  We encourage open communication and aim to resolve all
                  concerns amicably. In case of disputes, clients can contact
                  their project manager or escalate to the management team.
                  Where resolution cannot be reached, mediation may be used as
                  per the service agreement.
                </p>

                <h3 style={{ marginBottom: 4 }}>5. Recurring or Subscription Payments</h3>
                <p>
                  For clients using our payment gateway for recurring services
                  such as maintenance or hosting, automatic payments are
                  processed monthly or annually. Cancellations must be requested
                  at least <strong>7 days before</strong> the next billing date.
                  Refunds are not applicable once a billing cycle has been processed.
                </p>

                <h3 style={{ marginBottom: 4 }}>6. Exceptional Circumstances</h3>
                <p>
                  In rare cases of technical errors, double payments, or
                  unauthorized charges, refunds will be processed after
                  verification with our payment provider. Clients must notify us
                  within <strong>7 days</strong> of such issues.
                </p>

                <h3 style={{ marginBottom: 4 }}>7. Contact Us</h3>
                <p>
                  For any queries regarding this Refund Policy or your
                  transaction, please contact our support team at:
                </p>
                <p>
                  <strong>GENZ Technologies (Pvt) Ltd</strong> <br />
                  Email: info@genztechno.com <br />
                  Website: www.genztechno.com <br />
                  Phone: +94 717 030402
                </p>

                <p className="mt-6">
                  We value our clients’ trust and are committed to handling all
                  financial matters transparently and responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
