// app/terms/page.tsx

import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | TruckEase Solutions',
  description:
    'Terms of Service for TruckEase Solutions Inc. Read our terms governing platform usage, subscription billing, limitation of liability, and service agreements.',
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-white min-h-screen text-slate-700 py-16 lg:py-24">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10 leading-relaxed text-sm sm:text-base">
        {/* Header Block */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="text-blue-600">Last Updated: August 11, 2026</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="space-y-4">
          <p className="font-semibold text-slate-900">
            PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE ACCESSING OR USING THE TRUCKEASE SOLUTIONS PLATFORM, WEBSITE, OR SERVICES.
          </p>
          <p>
            By accessing or using{' '}
            <a href="https://truckease.co" className="text-blue-600 hover:underline font-medium">
              https://truckease.co
            </a>{' '}
            (the “Site”), dashboard, web application, or any services provided by TruckEase Solutions Inc. (“TruckEase,” “Company,” “we,” “our,” or “us”), you agree to be bound by these Terms of Service (“Terms”).
          </p>
          <p>
            If you do not agree with these Terms, you must not access or use our Services. If you are using the Services on behalf of a company, fleet, or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By creating an account, accessing our platform, purchasing services, submitting information, or otherwise using our Services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms, our Privacy Policy, Cookie Policy, and any additional policies we may publish from time to time.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you and TruckEase Solutions Inc.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">2. Eligibility</h2>
          <p>You must be at least eighteen (18) years of age to use our Services. By using the Services, you represent and warrant that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You are at least 18 years old;</li>
            <li>You have the legal capacity to enter into binding agreements;</li>
            <li>Any information you provide is true, accurate, and complete;</li>
            <li>You will comply with all applicable laws and regulations.</li>
          </ul>
          <p>
            If you are using the Services on behalf of a business entity, you represent that you are authorized to act on behalf of that entity.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">3. Account Registration and Security</h2>
          
          <h3 className="text-base font-bold text-slate-800">A. Account Creation</h3>
          <p>To access certain features, you may be required to create an account. You agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate and current information;</li>
            <li>Keep your account information updated;</li>
            <li>Maintain a valid email address;</li>
            <li>Comply with all account registration requirements.</li>
          </ul>

          <h3 className="text-base font-bold text-slate-800">B. Account Security</h3>
          <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Keep your login credentials secure;</li>
            <li>Not share your account with others;</li>
            <li>Notify us immediately of any unauthorized access;</li>
            <li>Accept responsibility for all activities occurring under your account.</li>
          </ul>
          <p>
            TruckEase is not responsible for losses resulting from unauthorized use of your account due to your failure to maintain account security.
          </p>

          <h3 className="text-base font-bold text-slate-800">C. Account Termination by User</h3>
          <p>
            You may terminate your account at any time by contacting support at{' '}
            <a href="mailto:support@truckease.co" className="text-blue-600 hover:underline">
              support@truckease.co
            </a>{' '}
            or using any account deletion tools made available through the platform. Termination does not automatically eliminate any obligations that arose before termination.
          </p>

          <h3 className="text-base font-bold text-slate-800">D. Account Suspension or Termination by TruckEase</h3>
          <p>We may suspend, restrict, or terminate your account, with or without notice, if:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You violate these Terms;</li>
            <li>You engage in fraudulent or illegal activity;</li>
            <li>You misuse our Services;</li>
            <li>You fail to pay applicable fees;</li>
            <li>We reasonably believe your actions create legal, regulatory, or security risks;</li>
            <li>We discontinue the Services.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">4. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the Services for unlawful purposes;</li>
            <li>Submit false, misleading, or fraudulent information;</li>
            <li>Attempt to gain unauthorized access to systems or accounts;</li>
            <li>Introduce malware, viruses, worms, or malicious code;</li>
            <li>Interfere with platform functionality or security;</li>
            <li>Reverse engineer, decompile, or attempt to extract source code;</li>
            <li>Use automated tools to scrape or harvest platform data;</li>
            <li>Infringe intellectual property rights;</li>
            <li>Upload harmful, defamatory, abusive, or unlawful content;</li>
            <li>Impersonate another individual or organization.</li>
          </ul>
          <p>Any violation of this section may result in immediate account suspension or termination.</p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">5. Intellectual Property Rights</h2>
          
          <h3 className="text-base font-bold text-slate-800">A. TruckEase Intellectual Property</h3>
          <p>
            All rights, title, and interest in the Services, including software, content, graphics, trademarks, logos, functionality, and designs, are owned by TruckEase Solutions Inc. or its licensors. Nothing in these Terms transfers ownership of any intellectual property rights to you.
          </p>
          <p>
            You may not copy, modify, reproduce, distribute, sell, license, create derivative works from, or otherwise exploit any part of our Services without prior written consent.
          </p>

          <h3 className="text-base font-bold text-slate-800">B. User Content</h3>
          <p>
            You retain ownership of information, documents, and compliance records you upload to the platform.
          </p>
          <p>
            By submitting content, you grant TruckEase a non‑exclusive, worldwide, royalty‑free license to use, store, display, process, and transmit such content solely for the purpose of providing the Services. This license terminates when your information is deleted, subject to legal retention obligations and backup procedures.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">6. Fees, Billing, Payments, and Subscription Terms</h2>
          
          <h3 className="text-base font-bold text-slate-800">A. Fees</h3>
          <p>
            Certain features or services may require payment. Pricing will be displayed on our website, platform, or purchasing interface. All fees are stated in the applicable currency and are subject to change.
          </p>

          <h3 className="text-base font-bold text-slate-800">B. Payment Processing</h3>
          <p>
            Payments may be processed through third‑party payment processors. TruckEase does not store complete credit card information. By submitting payment information, you authorize the processing of applicable charges.
          </p>

          <h3 className="text-base font-bold text-slate-800">C. Taxes</h3>
          <p>
            You are responsible for all taxes, duties, assessments, and governmental charges associated with your use of the Services, except taxes imposed directly on TruckEase’s income.
          </p>

          <h3 className="text-base font-bold text-slate-800">D. Refunds</h3>
          <p>
            Unless otherwise required by law or explicitly stated in a separate written policy, fees paid are non‑refundable.
          </p>

          <h3 className="text-base font-bold text-slate-800">E. Subscription Terms and Auto‑Renewal</h3>
          <p>
            Unless otherwise stated in your order form or on the pricing page, paid Services are offered on a subscription basis that automatically renews at the end of each billing period (monthly or annual) unless cancelled prior to renewal.
          </p>
          <p>
            You may cancel your subscription at any time via your account settings or by contacting support at{' '}
            <a href="mailto:support@truckease.co" className="text-blue-600 hover:underline">
              support@truckease.co
            </a>. Cancellation takes effect at the end of the current billing period; fees already paid are non‑refundable except as required by law.
          </p>
          <p>
            We may change subscription fees upon at least thirty (30) days’ prior notice via email or in‑platform notice. Continued use after the effective date of a price change constitutes acceptance of the new fees.
          </p>

          <h3 className="text-base font-bold text-slate-800">F. Authorization for Recurring Charges</h3>
          <p>
            Where you enroll in a subscription or recurring service, you authorize TruckEase and our payment processors to charge the payment method on file at the beginning of each billing cycle and for any applicable taxes and fees. If you use a free trial or promotional period, you authorize us to begin charging you at the end of that period unless you cancel before it ends.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">7. Description of Services</h2>
          <p>TruckEase provides compliance tracking and fleet organization tools, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Compliance monitoring dashboards;</li>
            <li>Renewal and expiration reminders;</li>
            <li>Document management tools;</li>
            <li>Fleet management features;</li>
            <li>Compliance status tracking;</li>
            <li>Administrative workflow support;</li>
            <li>Other related technology services.</li>
          </ul>
          <p>
            TruckEase does not guarantee that use of the Services will result in compliance with any law, regulation, permit requirement, or government obligation.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">8. Third‑Party Services and Integrations</h2>
          <p>
            Our Services may include links, integrations, or references to third‑party products, websites, databases, and services, including FMCSA resources, government agencies, insurance providers, ELD providers, payment processors, and analytics services.
          </p>
          <p>
            TruckEase does not control and is not responsible for third‑party services or their content, security practices, or accuracy. Your use of third‑party services is subject to their respective terms and privacy policies.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">9. No Professional Advice; Not a Law Firm</h2>
          <p>
            TruckEase provides administrative tools and organizational software only. TruckEase does not provide legal advice, regulatory advice, compliance consulting, accounting advice, tax advice, or professional advisory services.
          </p>
          <p>
            TruckEase is not a law firm and does not provide legal services. Nothing in the Services or our communications constitutes legal advice. You are solely responsible for obtaining professional advice when required.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">10. Warranties and Disclaimers</h2>
          
          <h3 className="text-base font-bold text-slate-800">A. Services Provided “As Is”</h3>
          <p>
            The Services are provided on an “AS IS” and “AS AVAILABLE” basis. To the maximum extent permitted by law, TruckEase disclaims all warranties, including merchantability, fitness for a particular purpose, non‑infringement, accuracy, reliability, and availability.
          </p>

          <h3 className="text-base font-bold text-slate-800">B. No Guarantee of Compliance</h3>
          <p>
            TruckEase does not guarantee regulatory compliance, successful audits, filing approvals, prevention of penalties, prevention of missed deadlines, or continuous platform availability. Users remain solely responsible for complying with applicable laws and regulations.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">11. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, TruckEase Solutions Inc., its officers, directors, employees, affiliates, contractors, and agents shall not be liable for indirect, incidental, consequential, special, or punitive damages, or loss of profits, revenue, data, business opportunities, or business interruption.
          </p>

          <h3 className="text-base font-bold text-slate-800">Liability Cap</h3>
          <p>
            To the maximum extent permitted by law, TruckEase’s total aggregate liability arising from or relating to the Services shall not exceed the total fees paid by you during the twelve (12) months immediately preceding the claim, or Five Hundred U.S. Dollars (USD $500), whichever is greater. This cap applies per incident and in the aggregate for all claims arising out of or related to the Services.
          </p>

          <h3 className="text-base font-bold text-slate-800">Excluded Claims (Carve‑Outs)</h3>
          <p>The limitations in this Section 11 do not apply to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Either party’s indemnification obligations;</li>
            <li>Breach of confidentiality obligations;</li>
            <li>Gross negligence, willful misconduct, or fraud;</li>
            <li>Infringement or misappropriation of intellectual property rights;</li>
            <li>Your payment obligations that accrued prior to the claim;</li>
            <li>Liability that cannot be limited under applicable law.</li>
          </ul>

          <h3 className="text-base font-bold text-slate-800">Compliance‑Related Liability</h3>
          <p>
            TruckEase shall not be liable for missed filings, expired permits, compliance violations, regulatory penalties, government investigations, loss of operating authority, insurance consequences, audit findings, or roadside inspection violations.
          </p>
        </section>

        {/* Section 12 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">12. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless TruckEase Solutions Inc., its affiliates, employees, officers, directors, and agents from and against any claims, damages, liabilities, judgments, costs, penalties, expenses, or legal fees arising from:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your use of the Services;</li>
            <li>Your violation of these Terms;</li>
            <li>Your violation of applicable laws;</li>
            <li>Information you provide;</li>
            <li>Your negligence, misconduct, or regulatory non‑compliance.</li>
          </ul>
        </section>

        {/* Section 13 */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">13. Dispute Resolution</h2>
          
          <h3 className="text-base font-bold text-slate-800">A. Informal Resolution</h3>
          <p>
            Before initiating formal legal proceedings, both parties agree to attempt to resolve disputes through good‑faith discussions. Questions or disputes may be submitted to:{' '}
            <a href="mailto:legal@truckease.co" className="text-blue-600 hover:underline">
              legal@truckease.co
            </a>.
          </p>

          <h3 className="text-base font-bold text-slate-800">B. Arbitration; Class Action Waiver</h3>
          <p>
            Except for disputes that may be brought in small claims court, and except for claims for injunctive or equitable relief (including with respect to intellectual property rights), any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall be resolved by binding arbitration administered by the American Arbitration Association (AAA) or JAMS under its commercial arbitration rules.
          </p>
          <p>
            The arbitration shall be conducted on an individual basis; you and TruckEase waive any right to a jury trial and to participate in any class, collective, or representative action. The arbitration shall be seated in Sheridan County, Wyoming, unless the parties agree otherwise or applicable law requires a different location. Each party shall bear its own attorneys’ fees and costs in the arbitration, unless otherwise provided by applicable law or awarded by the arbitrator.
          </p>
          <p>
            For users in Canada: This arbitration agreement applies only to the extent permitted by applicable provincial law; where not permitted, disputes shall be resolved in the courts described in Section 13.C.
          </p>

          <h3 className="text-base font-bold text-slate-800">C. Governing Law and Venue</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict‑of‑law principles. Any dispute, claim, or proceeding arising out of or relating to these Terms or the Services shall be brought exclusively in the federal or state courts located in Sheridan County, Wyoming, unless mandatory arbitration applies under Section 13.B.
          </p>
        </section>

        {/* Section 14 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">14. Termination & Data Export</h2>
          <p>
            TruckEase may terminate or suspend access to the Services immediately if you violate these Terms, engage in unlawful activity, present security risks, or if the Services are discontinued. Upon termination, your access rights will cease and accrued obligations remain enforceable.
          </p>
          <p>
            <strong>Data Export:</strong> Upon termination, you may request a copy of your compliance records and data in a commonly used electronic format, subject to our Privacy Policy and applicable legal retention obligations. You may make one (1) such data export request within ninety (90) days following termination. We will make reasonable efforts to provide such data within a reasonable time frame.
          </p>
        </section>

        {/* Section 15 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">15. Changes to These Terms</h2>
          <p>
            We may modify these Terms from time to time. For material changes (including changes to fees, dispute resolution, or data use), we will provide at least thirty (30) days’ prior notice via email and/or in‑platform notice, unless a shorter notice period is required for security or legal reasons.
          </p>
          <p>
            Continued use of the Services after the effective date of such changes constitutes acceptance of the revised Terms. For material changes to paid terms, we may require affirmative acceptance before the changes take effect. Each revised version of these Terms will display an updated “Last Updated” date, and changes will become effective on the date specified in the notice or, if no date is specified, upon the expiration of the notice period.
          </p>
        </section>

        {/* Section 16 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">16. Survival</h2>
          <p>
            The following sections survive termination: Intellectual Property Rights, Warranties and Disclaimers, Limitation of Liability, Indemnification, Dispute Resolution, Payment Obligations, Data Export, Electronic Communications and Consent, and any provisions that by their nature should survive termination.
          </p>
        </section>

        {/* Section 17 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">17. General Provisions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy, Cookie Policy, and related policies, constitute the entire agreement between you and TruckEase.</li>
            <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions will remain in full force and effect.</li>
            <li><strong>Waiver:</strong> Failure to enforce any provision shall not constitute a waiver of future enforcement.</li>
            <li><strong>Force Majeure:</strong> TruckEase will not be liable for delays or failures caused by events beyond its reasonable control, including natural disasters, government actions, cyberattacks, labor disruptions, or internet failures.</li>
            <li><strong>Assignment:</strong> You may not assign your rights under these Terms without our prior written consent. TruckEase may assign these Terms without restriction.</li>
            <li><strong>Independent Contractors:</strong> The parties are independent contractors. Nothing in these Terms creates a partnership, joint venture, agency, or employment relationship between you and TruckEase.</li>
            <li><strong>Export Compliance:</strong> You represent that you are not located in a country subject to U.S. or Canadian trade sanctions and that you will comply with all applicable export, import, and sanctions laws and regulations in connection with your use of the Services.</li>
          </ul>
        </section>

        {/* Section 18 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">18. Data Processing</h2>
          <p>
            TruckEase processes personal and fleet information submitted through the Services in accordance with our Privacy Policy. To the extent required by applicable privacy laws, the Privacy Policy and any Data Processing Addendum made available to you form part of this agreement with respect to the processing of personal data.
          </p>
        </section>

        {/* Section 19 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">19. Electronic Communications and Consent</h2>
          <p>
            By using the Services, you consent to receive communications from TruckEase in electronic form, including via email, in‑platform notices, and SMS (where applicable). This includes notices about your account, these Terms, our Privacy Policy, and other legal disclosures.
          </p>
          <p>
            You agree that any agreements, notices, disclosures, and other communications that we provide electronically satisfy any legal requirement that such communications be in writing.
          </p>
        </section>

        {/* Section 20 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">20. Contact Information</h2>
          <p>For any legal, support, or privacy inquiries regarding these Terms, please contact us at:</p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-2 text-sm">
            <p className="font-bold text-slate-900 text-base">TruckEase Solutions Inc.</p>
            <p>
              General Support:{' '}
              <a href="mailto:support@truckease.co" className="text-blue-600 hover:underline font-semibold">
                support@truckease.co
              </a>
            </p>
            <p>
              Legal Inquiries:{' '}
              <a href="mailto:legal@truckease.co" className="text-blue-600 hover:underline font-semibold">
                legal@truckease.co
              </a>
            </p>
            <p>
              Privacy Inquiries:{' '}
              <a href="mailto:privacy@truckease.co" className="text-blue-600 hover:underline font-semibold">
                privacy@truckease.co
              </a>
            </p>
          </div>
        </section>
      </article>
    </div>
  )
}
