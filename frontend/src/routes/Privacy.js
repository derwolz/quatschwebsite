import React from "react";
import Layout from "../components/Layout";
const Privacy = ({ email }) => {
    const pClass = "mb-4";
    const h2Class = "mb-4 text-xl";
    const h3Class = "mb-4 text-lg";
    const h4Class = "";
    const ulClass = "mx-4";
    return (
        <Layout>
            <div className="flex flex-row justify-center center-items">
                <div className="w-[80%]">
                    <h2 className={h2Class}>Privacy Policy</h2><p className={pClass}>
                        At Quatsch, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard the information we gather from our users. By using our services, you consent to the practices described in this Privacy Policy.

                    </p><h2 className={h2Class}>Information We Collect:</h2><ul className="list-disc">
                        We only collect the minimum amount of personal information necessary to provide you with our services. The information we collect may include:
                        <li className="mx-4">
                            Email Address: We collect email addresses from potential customers who voluntarily provide them to receive information about our products and services.</li>

                    </ul>
                    <h2 className={h2Class}>Use of Information:</h2>

                    We use the collected information for the following purposes:
                    <ul className={ulClass}>
                        <li>
                            <h3 className={h3Class}>Communication:</h3><p className={pClass}>
                                We use your email address to send you information about our products, services, promotions, and other relevant updates.
                            </p>
                        </li>
                    </ul>
                    <h2 className={h2Class}>Information Sharing and Disclosure:</h2><p className={pClass}>
                        We do not sell, trade, or otherwise transfer your personal information to third parties. We only share your information in the following limited circumstances:
                    </p>
                    <ul className={ulClass}>
                        <li>
                            <h3 className={h3Class}>
                                Service Providers:
                            </h3>
                            <p className={pClass}>
                                We may disclose your information to trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you. These service providers have agreed to keep your information confidential and are prohibited from using it for any other purpose.
                            </p>
                            <h3 className={h3Class}>
                                Legal Requirements:
                            </h3>
                            <p className={pClass}>
                                We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with applicable laws, regulations, or legal processes.
                            </p>
                        </li>
                    </ul>
                    <h2 className={h2Class}>Data Security:</h2><p className={pClass}>
                        We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no data transmission over the internet or electronic storage method is completely secure. Therefore, we cannot guarantee absolute security of your information.
                    </p>
                    <h2 className={h2Class}>
                        Data Retention:
                    </h2><p className={pClass}>
                        We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. When your information is no longer needed, we will securely delete or anonymize it.
                    </p>
                    <h2 className={h2Class}>Your Rights:</h2>
                    <ul className={ulClass}>

                        <li>
                            <p className={pClass}>
                                You can request to access, review, or update the personal information we hold about you by contacting us using the information provided at the end of this Privacy Policy.
                            </p>
                        </li>
                        <li>
                            <p className={pClass}>
                                You can unsubscribe from our marketing emails at any time by following the instructions provided in the email or contacting us directly.
                            </p>
                        </li>
                    </ul>
                    <h2 className={h2Class}>Children's Privacy:</h2>
                    <p className={pClass}>
                        Our services are not intended for individuals under the age of 13. We do not knowingly collect or solicit personal information from children. If you believe that we have collected personal information from a child without parental consent, please contact us immediately.
                    </p>
                    <h2 className={h2Class}>
                        Changes to the Privacy Policy:
                    </h2>
                    <p className={pClass}>
                        We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on our website. Your continued use of our services after the changes constitutes your acceptance of the updated Privacy Policy.
                    </p>
                    <h2 className={h2Class}>
                        Contact Us:
                    </h2>
                    <p className={pClass}>
                        If you have any questions, concerns, or requests regarding this Privacy Policy or the privacy practices of Quatsch, please contact us at:

                        {email}

                        Thank you for trusting Quatsch with your personal information.
                    </p>



















                </div>
            </div>
        </Layout >
    )
}
export default Privacy;