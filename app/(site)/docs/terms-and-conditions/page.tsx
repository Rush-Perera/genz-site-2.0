import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
    title: "Terms and Conditions - GENZ Technologies",
    description: "These Terms and Conditions govern your use of our website and the purchase and sale of products from our platform. By accessing and using our website, you agree to comply with these terms. Please read them carefully before proceeding with any transactions.",
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
                                    <SidebarLink activeTab={1} />
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-3/4">
                            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                                <h1>Terms and Conditions</h1>

                                <p className="text-body-color dark:text-body-color-dark text-base">
                                Our Terms and Conditions govern your use of our website and the purchase and sale of products from our platform.
                                    By accessing and using our website, you agree to comply with these terms. Please read them carefully before
                                    proceeding with any transactions.
                                </p>


                                <h5 style={{ marginBottom: 8 }}>Use of the Website</h5>
                                <ul>
                                    <li>You must be at least 18 years old to use our website or make purchases.</li>
                                    <li>You are responsible for maintaining the confidentiality of your account information, including your username and password.</li>
                                    <li>You agree to provide accurate and current information during the registration and checkout process.</li>
                                    <li>You may not use our website for any unlawful or unauthorized purposes.</li>
                                </ul>

                                <h5 style={{ marginBottom: 8 }}>Product Information and Pricing</h5>
                                <ul>
                                    <li>We strive to provide accurate product descriptions, images, and pricing information.</li>
                                    <li>Prices are subject to change without notice. Promotions or discounts are valid for a limited time and may be subject to additional terms and conditions.</li>
                                </ul>

                                <h5 style={{ marginBottom: 8 }}>Orders and Payments</h5>
                                <ul>
                                    <li>By placing an order on our website, you are making an offer to purchase the selected products.</li>
                                    <li>We reserve the right to refuse or cancel any order for any reason, including product availability, pricing errors, or suspected fraudulent activity.</li>
                                    <li>You agree to provide valid and up-to-date payment information and authorize us to charge the total order amount, including applicable taxes and shipping fees.</li>
                                    <li>We use trusted third-party payment processors to handle your payment information securely. We do not store or have access to your full payment details.</li>
                                </ul>

                                <h5 style={{ marginBottom: 8 }}>Shipping and Delivery</h5>
                                <ul>
                                    <li>We will make reasonable efforts to ensure timely shipping and delivery of your orders.</li>
                                    <li>Shipping and delivery times provided are estimates and may vary based on your location and other factors.</li>
                                </ul>

                                <h5 style={{ marginBottom: 8 }}>Returns and Refunds</h5>
                                <ul>
                                    <li>Our Returns and Refund Policy governs the process and conditions for returning products and seeking refunds. Please refer to the policy provided on our website for more information.</li>
                                </ul>

                                <h5 style={{ marginBottom: 8 }}>Intellectual Property</h5>
                                <ul>
                                    <li>All content and materials on our website, including text, images, logos, and graphics, are protected by intellectual property rights and are the property of GenZ Technologies or its licensors.</li>
                                    <li>You may not use, reproduce, distribute, or modify any content from our website without our prior written consent.</li>
                                </ul>

                                <h5 style={{ marginBottom: 8 }}>Limitation of Liability</h5>
                                <ul>
                                    <li>In no event shall GenZ Technologies, its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or the purchase and use of our products.</li>
                                    <li>We make no warranties or representations, express or implied, regarding the quality, accuracy, or suitability of the products offered on our website.</li>
                                </ul>

                                <h5 style={{ marginBottom: 8 }}>Amendments and Termination</h5>
                                <ul>
                                    <li>We reserve the right to modify, update, or terminate these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes.</li>
                                </ul>

                                <p>
                                    Your trust is crucial to us, and we are dedicated to providing clear and fair guidelines to make your experience with GenZ Technologies positive and secure. If you have any questions or require further clarification, feel free to contact our customer support team.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
