import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
const Terms = ({email}) => {
    
    return (
        <Layout>
            <div className="flex flex-row justify-center m-4">
                <div className="w-[80%]">
                    <p className="mb-2">
                        Welcome to Quatsch! These Terms of Service ("Terms") govern your use of the Quatsch website (the "Site") and any services, features, or content provided by Quatsch (collectively referred to as the "Services"). By accessing or using Quatsch, you agree to be bound by these Terms. Please read them carefully.

                    </p>
                    <h2 className="mb-2 text-xl">
                        Acceptance of Terms
                    </h2>
                    <p className="mb-2">
                        By accessing or using Quatsch, you affirm that you are at least 18 years old and have the legal capacity to enter into this agreement. If you are using Quatsch on behalf of an organization, you represent and warrant that you have the authority to bind the organization to these Terms.

                    </p><h2 className="mb-2 text-xl">
                        Privacy
                    </h2><p className="mb-2">

                        Quatsch respects your privacy. Our <Link to="/privacy">Privacy Policy</Link> outlines how we collect, use, and disclose your personal information. By using Quatsch, you consent to our collection, use, and disclosure practices as described in the Privacy Policy.

                    </p><h2 className="mb-2 text-xl">
                        User Conduct
                    </h2><p className="mb-2">
                        You agree to use Quatsch in compliance with applicable laws and regulations and these Terms. You are solely responsible for your use of Quatsch and any content you submit, post, or display on the Site. You agree not to engage in any of the following prohibited activities:
                        <ul className="mx-4">

                            <li>Violating any applicable laws, regulations, or third-party rights.</li>
                            <li>Impersonating any person or entity or falsely representing your affiliation with any person or entity.</li>
                            <li>Interfering with or disrupting the integrity or performance of Quatsch or its Services.</li>
                            <li>Collecting or harvesting any information from Quatsch, including users' personal information, without their consent.</li>
                            <li>Uploading, transmitting, or distributing any viruses, malware, or other harmful computer code.</li>
                            <li>Engaging in any conduct that could harm Quatsch's reputation or goodwill.</li>
                            <li>Using Quatsch for any illegal, unauthorized, or unethical purposes.</li>

                        </ul>
                    </p><h2 className="mb-2 text-xl">
                        Intellectual Property
                    </h2><p className="mb-2">

                        Quatsch and its Services, including but not limited to the Site, trademarks, logos, graphics, and content, are protected by intellectual property laws. You agree not to modify, reproduce, distribute, transmit, display, or create derivative works of any portion of Quatsch, except as expressly permitted by Quatsch.
                    </p><h2 className="mb-2 text-xl">
                        Content Ownership
                    </h2><p className="mb-2">

                        By submitting, posting, or displaying content on Quatsch, you grant Quatsch a non-exclusive, worldwide, royalty-free license to use, copy, modify, publicly perform, publicly display, and distribute the content solely for the purposes of operating and improving Quatsch. You represent and warrant that you have the necessary rights to grant this license.

                    </p><h2 className="mb-2 text-xl">
                        Third-Party Links
                    </h2><p className="mb-2">

                        Quatsch may contain links to third-party websites or services. These links are provided for your convenience, and Quatsch does not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites or services. You access these links at your own risk.
                    </p><h2 className="mb-2 text-xl">
                        Termination
                    </h2><p className="mb-2">
                        Quatsch reserves the right, in its sole discretion, to suspend or terminate your access to Quatsch or its Services, at any time and for any reason, without notice. All provisions of these Terms that by their nature should survive termination, including but not limited to ownership provisions, warranty disclaimers, indemnity, and limitations of liability, will continue to apply.
                    </p><h2 className="mb-2 text-xl">Disclaimer of Warranties</h2><p className="mb-2">
                        Quatsch provides its Services on an "as is" and "as available" basis. Quatsch does not warrant that the Services will be uninterrupted, error-free, or secure. You use Quatsch at your own risk. Quatsch disclaims all warranties, whether express, implied, or statutory, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    </p><h2 className="mb-2 text-xl">Limitation of Liability</h2><p className="mb-2">
                        In no event shall Quatsch be liable to you or any third party for any indirect, incidental, special, or consequential damages, arising out of or in connection with your use of Quatsch or its Services. Quatsch's total cumulative liability to you or any third party for any claims arising from or related to Quatsch shall not exceed the amount paid by you, if any, for accessing Quatsch in the twelve months preceding the claim.
                    </p><h2 className="mb-2 text-xl">Governing Law and Dispute Resolution</h2><p className="mb-2">
                        These Terms shall be governed by and construed in accordance with the laws of United States. Any dispute arising out of or in connection with these Terms shall be exclusively submitted to the competent courts of United States.
                    </p><h2 className="mb-2 text-xl">Changes to the Terms</h2><p className="mb-2">
                        Quatsch may modify these Terms from time to time. Any changes will be effective upon posting the revised Terms on the Site. Your continued use of Quatsch after the changes become effective constitutes your acceptance of the updated Terms.
                    </p><h2 className="mb-2 text-xl">Severability</h2><p className="mb-2">
                        If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
                    </p><p className="mb-2">
                        If you have any questions or concerns regarding these Terms, please contact us at <span className="text-blue-500"><a href={email} >{email}</a></span>
                    </p><p className="mb-2">
                        Last updated: 05/22/2023
                    </p>
                </div>
            </div>
        </Layout>
    )
}
export default Terms;