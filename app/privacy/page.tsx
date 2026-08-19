// app/privacy/page.tsx

import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | TruckEase Solutions',
  description:
    'Privacy Policy for TruckEase Solutions Inc. Learn how we collect, use, protect, and retain your personal and fleet compliance information.',
}

const sections = [
  { id: 'section-1', label: '1. Important: Nature of Our Services' },
  { id: 'section-2', label: '2. Privacy Officer & Contact Information' },
  { id: 'section-3', label: '3. Information We Collect' },
  { id: 'section-4', label: '4. How We Collect Information' },
  { id: 'section-5', label: '5. How We Use Information' },
  { id: 'section-6', label: '6. Disclosures of Information' },
  { id: 'section-7', label: '7. International Data Transfers' },
  { id: 'section-8', label: '8. Data Retention' },
  { id: 'section-9', label: '9. Data Security' },
  { id: 'section-10', label: '10. Data Breach Response' },
  { id: 'section-11', label: '11. Your Privacy Rights' },
  { id: 'section-12', label: '12. Children’s Privacy' },
  { id: 'section-13', label: '13. Accuracy & Your Responsibility' },
  { id: 'section-14', label: '14. Cookies & Tracking Technologies' },
  { id: 'section-15', label: '15. Automated Decision-Making & Risk Screening' },
  { id: 'section-16', label: '16. Changes to This Privacy Policy' },
  { id: 'section-17', label: '17. Governing Law & Severability' },
  { id: 'section-18', label: '18. Contact Us' },
  { id: 'section-19', label: '19. Financial Incentives' },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      {/* Hero */}
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.35))]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
                Legal
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
              <span className="font-semibold text-blue-400">
                Last Updated: August 11, 2026
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Legal navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-4 sm:px-6 lg:px-8">
          <Link
            href="/privacy"
            className="border-b-2 border-blue-600 px-4 py-4 text-sm font-semibold text-blue-600"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="border-b-2 border-transparent px-4 py-4 text-sm font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
          >
            Terms of Service
          </Link>

          <Link
            href="/disclaimer"
            className="border-b-2 border-transparent px-4 py-4 text-sm font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
          >
            Legal Disclaimer
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                On this page
              </p>

              <nav className="border-l border-slate-200">
                <div className="space-y-0.5">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block border-l-2 border-transparent py-1.5 pl-4 text-[12px] leading-5 text-slate-500 transition hover:border-blue-500 hover:text-slate-900"
                    >
                      {section.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </aside>

          {/* Article */}
          <article className="min-w-0 rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="space-y-12 text-[15px] leading-7 sm:text-base">
              {/* Introduction */}
              <section className="space-y-5">
                <p>
                  TruckEase Solutions Inc. (“TruckEase,” “we,” “our,” or “us”) operates the website located at{' '}
                  <a
                    href="https://truckease.co"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    https://truckease.co
                  </a>{' '}
                  (the “Site”) and provides digital compliance tracking, desk review, and risk-screening services for owner-operators and commercial motor carriers operating in the United States and Canada (collectively, the “Services”).
                </p>

                <p>
                  We are committed to protecting your privacy and handling your personal and fleet information in a transparent, secure, and responsible manner. This Privacy Policy explains:
                </p>

                <ul className="list-disc space-y-1.5 pl-6 text-slate-700">
                  <li>What information we collect</li>
                  <li>How and why we use it</li>
                  <li>How we protect it</li>
                  <li>How long we retain it</li>
                  <li>Your privacy rights and how to exercise them</li>
                </ul>

                <p>
                  This Policy applies to information we collect through the Site, the Services, and related communications (email, support channels, integrations). By accessing or using truckease.co or our Services, you consent to the practices described in this Privacy Policy and any applicable notices at collection.
                </p>

                <p>
                  This Policy is intended to comply with applicable privacy laws, including:
                </p>

                <ul className="list-disc space-y-1.5 pl-6 text-slate-700">
                  <li>Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
                  <li>California’s Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA)</li>
                  <li>Other applicable provincial, state, and federal privacy laws in the U.S. and Canada</li>
                </ul>
              </section>

              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  1. Important: Nature of Our Services & Limitation of Liability
                </h2>

                <p>
                  TruckEase provides administrative desk assistance, compliance organization tools, and risk-screening software for motor carriers. Our Services:
                </p>

                <ul className="list-disc space-y-1.5 pl-6">
                  <li>Do not constitute legal advice, regulatory advice, or a government safety rating.</li>
                  <li>Do not transfer statutory liability from the motor carrier to TruckEase.</li>
                  <li>Do not guarantee compliance with FMCSA, DOT, NSC, IFTA, IRP, or any other regulatory regime.</li>
                </ul>

                <p>
                  Motor carriers remain solely responsible for the accuracy, completeness, and timeliness of all filings, logs, and regulatory submissions. Risk-screening outputs, dashboards, alerts, and recommendations are assistive only and must be independently verified by the carrier and its compliance personnel.
                </p>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  2. Privacy Officer & Contact Information (Accountability)
                </h2>

                <p>
                  In accordance with PIPEDA’s accountability principle and CCPA transparency requirements, TruckEase has designated a Privacy Officer responsible for overseeing our privacy compliance program.
                </p>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-900">
                    TruckEase Solutions Inc. — Privacy Officer
                  </p>

                  <p className="mt-2">
                    Email:{' '}
                    <a
                      href="mailto:privacy@truckease.co"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      privacy@truckease.co
                    </a>
                  </p>

                  <p className="text-slate-600"></p>
                </div>

                <p>
                  We aim to respond to privacy requests within applicable legal timeframes (e.g., 45 days under CCPA, as may be extended by law).
                </p>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-8 space-y-5 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  3. Information We Collect
                </h2>

                <p>
                  We collect information you provide directly, information generated through your use of our Services, and information received from authorized third-party sources. We limit collection to what is reasonably necessary for the purposes described in this Policy.
                </p>

                <h3 className="pt-2 text-base font-bold text-slate-900">
                  A. Information You Provide Directly
                </h3>

                <ul className="list-disc space-y-2 pl-6">
                  <li><strong>Contact Information:</strong> Full name, email address, phone number, mailing address (if provided).</li>
                  <li><strong>Account & Authentication Information:</strong> Username, password (stored in encrypted/hashed form), security questions and answers, multi-factor authentication details.</li>
                  <li><strong>Business & Fleet Identifiers:</strong> Company legal name, USDOT Number, MC/FF Number, NSC or CVOR Number (where applicable), operating jurisdictions, fleet size.</li>
                  <li><strong>Billing & Payment Information:</strong> Billing contact name and email, subscription details, payment confirmations, and invoice records. TruckEase does not store full credit card numbers or sensitive payment authentication data. Payments are processed by authorized third-party payment processors under separate terms and privacy policies.</li>
                  <li><strong>Compliance & Regulatory Information You Submit:</strong> Insurance certificates, maintenance records, inspection reports, registration/permit data, renewal dates, hours-of-service records, drug and alcohol program documentation, and other files voluntarily uploaded for desk review.</li>
                </ul>

                <h3 className="pt-2 text-base font-bold text-slate-900">
                  B. Fleet, Vehicle, and Driver Information
                </h3>

                <p>
                  To provide compliance tracking and risk-screening Services, we may collect and organize:
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li><strong>Vehicle Information:</strong> Vehicle Identification Numbers (VINs), license plate numbers, vehicle make/model/year, registration dates and jurisdictions.</li>
                  <li><strong>Driver Information (where provided by the carrier):</strong> Driver names, driver license numbers and jurisdictions, CDL class/endorsements, compliance-related dates (e.g., medical certificate expiry). We do not independently verify driver records unless explicitly engaged under a separate written agreement. All driver information is provided and controlled by the motor carrier.</li>
                </ul>

                <h3 className="pt-2 text-base font-bold text-slate-900">
                  C. Automatically Collected Information
                </h3>

                <p>
                  When you visit truckease.co or use the Services, we and our service providers may automatically collect:
                </p>

                <ul className="list-disc space-y-1.5 pl-6">
                  <li>IP address, browser type/version, device identifiers, and operating system</li>
                  <li>Pages viewed, time spent, navigation paths, referral URLs, and exit pages</li>
                  <li>Usage patterns, interactions, and cookies / similar technologies</li>
                </ul>

                <h3 className="pt-2 text-base font-bold text-slate-900">
                  D. Information from Third Parties
                </h3>

                <p>
                  We may receive information from FMCSA public databases, integration partners (ELDs, fleet management systems), payment processors, and third-party identity verification providers.
                </p>

                <h3 className="pt-2 text-base font-bold text-slate-900">
                  E. Sensitive Personal Information (CPRA)
                </h3>

                <p>
                  Under CPRA, certain categories of personal information are treated as sensitive personal information. Depending on your use of the Services, this includes government identification details such as driver license numbers. We do not use sensitive personal information for purposes unrelated to providing the Services, security, fraud prevention, or legal compliance.
                </p>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  4. How We Collect Information
                </h2>

                <p>We collect information through:</p>

                <ul className="list-disc space-y-1.5 pl-6">
                  <li>Account registration and profile management</li>
                  <li>Contact forms, support requests, desk reviews, and document uploads</li>
                  <li>Email, chat, and other customer communications</li>
                  <li>Website interactions, cookies, and analytics technologies</li>
                  <li>Integration partners, APIs, and public regulatory databases</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  5. How We Use Information (Purposes & Legal Bases)
                </h2>

                <p>We use collected information only for disclosed, compatible purposes including:</p>

                <ul className="list-disc space-y-2 pl-6">
                  <li><strong>Service Delivery & Contract Performance:</strong> Providing compliance tracking tools, managing accounts, organizing documents, performing desk reviews, and delivering renewal alerts.</li>
                  <li><strong>Communications:</strong> Sending service updates, administrative alerts, and responding to support inquiries.</li>
                  <li><strong>Billing & Payments:</strong> Processing subscriptions, invoices, and transaction verification.</li>
                  <li><strong>Platform Improvement & Analytics:</strong> Analyzing platform usage trends, improving features, and technical enhancements.</li>
                  <li><strong>Security, Fraud Prevention & Legal Compliance:</strong> Protecting accounts, preventing unauthorized access, and complying with legal obligations.</li>
                  <li><strong>Marketing Communications:</strong> Newsletters and product updates (where permitted). You may unsubscribe at any time. We do not sell your personal information or use compliance data for third-party marketing.</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  6. Disclosures of Information & Opt-Out Signals
                </h2>

                <p>
                  We do not “sell” personal information as defined by the CCPA. We do not “share” personal information for cross-context behavioral advertising. We disclose information to service providers (e.g., hosting, payment processing) solely to operate our platform under strict contractual confidentiality terms.
                </p>

                <p>
                  We do not use sensitive personal information for purposes beyond providing our Services. We recognize and honor universal opt-out signals (such as the Global Privacy Control) where technically feasible.
                </p>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  7. International Data Transfers
                </h2>

                <p>
                  TruckEase may store or process information in Canada, the United States, and other jurisdictions where our cloud service providers operate. We implement contractual, technical, and organizational safeguards to protect your data across borders.
                </p>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="scroll-mt-8 space-y-5 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  8. Data Retention (Limiting Use & Retention)
                </h2>

                <p>
                  We retain personal information only as long as reasonably necessary to fulfill the purposes outlined in this Policy and satisfy legal, tax, or regulatory audit requirements. When information is no longer needed, it is securely deleted or anonymized.
                </p>

                <p>
                  To provide clarity on our retention practices, we adhere to the following standard retention schedules:
                </p>

                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="border-b border-slate-200 p-4 font-semibold text-slate-900">
                            Data Category
                          </th>
                          <th className="border-b border-slate-200 p-4 font-semibold text-slate-900">
                            Retention Schedule & Criteria
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-slate-200">
                        <tr>
                          <td className="p-4 font-medium text-slate-800">
                            Active Account Data
                          </td>
                          <td className="p-4">
                            Duration of client relationship + 2 years.
                          </td>
                        </tr>

                        <tr>
                          <td className="p-4 font-medium text-slate-800">
                            Tax & Billing Records
                          </td>
                          <td className="p-4">
                            Up to 7 years (to meet statutory and accounting requirements).
                          </td>
                        </tr>

                        <tr>
                          <td className="p-4 font-medium text-slate-800">
                            Compliance Files & Audit Work
                          </td>
                          <td className="p-4">
                            Duration of service + 4 years (regulatory audit window).
                          </td>
                        </tr>

                        <tr>
                          <td className="p-4 font-medium text-slate-800">
                            Support Records
                          </td>
                          <td className="p-4">
                            Up to 2 years after last interaction.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  9. Data Security (Safeguards)
                </h2>

                <p>
                  TruckEase uses commercially reasonable administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, alteration, disclosure, and destruction.
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li><strong>Technical Safeguards:</strong> TLS/SSL encryption for data in transit, encryption at rest for sensitive data, firewalls, and role-based access controls.</li>
                  <li><strong>Administrative Safeguards:</strong> Employee confidentiality obligations, access management procedures, and incident response planning.</li>
                  <li><strong>Physical Safeguards:</strong> Secure hosting facilities operated by reputable cloud infrastructure providers with restricted physical access.</li>
                </ul>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  10. Data Breach Response
                </h2>

                <p>
                  If a security incident involving personal information occurs, TruckEase will investigate and contain the incident, assess risks to individuals, notify affected individuals and regulatory authorities where required by applicable law (such as PIPEDA or state breach notification laws), and document corrective actions to prevent recurrence.
                </p>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="scroll-mt-8 space-y-5 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  11. Your Privacy Rights, Authorized Agents & Complaints
                </h2>

                <p>
                  Depending on your location, you may have rights including access, correction, deletion, consent withdrawal, data portability, and non-discrimination under CCPA/CPRA or PIPEDA.
                </p>

                <p>
                  You may designate an authorized agent to submit privacy requests on your behalf. Where permitted by applicable law (for example, under California’s CCPA/CPRA), we may require the agent to provide proof of your signed authorization and may require you to verify your identity directly with us or confirm your authorization to the agent.
                </p>

                <p>
                  If you are not satisfied with our response to your privacy complaint, you may have the right to lodge a complaint with a relevant data protection or consumer privacy authority, such as the California Privacy Protection Agency, your state Attorney General’s office in the United States, or the Office of the Privacy Commissioner of Canada (OPC) or other provincial privacy regulator in Canada.
                </p>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-900">
                    How to Exercise Your Rights
                  </p>

                  <p className="mt-2">
                    To exercise these rights, submit requests directly to:{' '}
                    <a
                      href="mailto:privacy@truckease.co"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      privacy@truckease.co
                    </a>
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  12. Children’s Privacy
                </h2>

                <p>
                  TruckEase Services are intended exclusively for individuals who are at least 18 years of age. We do not knowingly collect personal information from anyone under 18. If we learn that we have collected personal information from a child under 18, we will take appropriate steps to delete it.
                </p>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  13. Accuracy & Your Responsibility (PIPEDA Principle)
                </h2>

                <p>
                  Under PIPEDA, we are required to keep personal information as accurate, complete, and up-to-date as necessary for the purposes for which it is used. Motor carriers are responsible for ensuring all submitted driver, vehicle, and compliance information remains accurate and current.
                </p>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  14. Cookies & Tracking Technologies
                </h2>

                <p>
                  Our website uses cookies and similar technologies to maintain user sessions, improve functionality, analyze engagement, and support security features. Essential, analytics, and preference cookies are deployed in compliance with applicable consent requirements.
                </p>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  15. Automated Decision-Making & Risk Screening (ADMT)
                </h2>

                <p>
                  TruckEase uses automated systems for compliance reminders, renewal notifications, and risk-screening indicators. These outputs are assistive tools designed for organization and risk awareness; they do not constitute government safety ratings or make legal determinations. Human review is available upon request.
                </p>
              </section>

              {/* Section 16 */}
              <section id="section-16" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  16. Changes to This Privacy Policy
                </h2>

                <p>
                  We may update this Privacy Policy periodically to reflect legal, technical, or business changes. When material changes occur, we will provide notice through our website, email, or other appropriate methods as required by law.
                </p>
              </section>

              {/* Section 17 */}
              <section id="section-17" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  17. Governing Law & Severability
                </h2>

                <p>
                  This Privacy Policy is governed by and construed in accordance with the laws of the applicable jurisdictions in which we operate. If any provision is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
                </p>
              </section>

              {/* Section 18 */}
              <section id="section-18" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  18. Contact Us
                </h2>

                <p>
                  For any privacy-related request, concern, complaint, or inquiry, please contact our Privacy Officer:
                </p>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-base font-bold text-slate-900">
                    TruckEase Solutions Inc.
                  </p>

                  <p className="mt-2">
                    Privacy Officer Email:{' '}
                    <a
                      href="mailto:privacy@truckease.co"
                      className="font-semibold text-blue-600 hover:underline"
                    >
                      privacy@truckease.co
                    </a>
                  </p>

                  <p className="text-slate-600"></p>
                </div>
              </section>

              {/* Section 19 */}
              <section id="section-19" className="scroll-mt-8 space-y-4 border-t border-slate-200 pt-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  19. Financial Incentives
                </h2>

                <p>
                  TruckEase does not offer financial incentives for the collection, sale, or deletion of personal information. Any free trials or promotional risk screenings offered are part of standard business evaluation activities and do not constitute a financial incentive program under CCPA.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
