// app/disclaimer/page.tsx

import Link from 'next/link'

export const metadata = {
  title: 'Legal Disclaimer & Service Limitation | TruckEase Solutions',
  description:
    'Legal Disclaimer and Service Limitation for TruckEase Solutions Inc. Read key disclaimers regarding government non-affiliation, regulatory compliance, and liability limits.',
}

export default function LegalDisclaimerPage() {
  return (
    <div className="bg-white min-h-screen text-slate-700 py-16 lg:py-24">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10 leading-relaxed text-sm sm:text-base">
        {/* Header Block */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Legal Disclaimer &amp; Service Limitation
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="text-blue-600">Last Updated: August 11, 2026</span>
          </div>
        </header>

        {/* Introduction & Visual Hierarchy Notice Box */}
        <section className="space-y-4">
          <p className="font-semibold text-slate-900">
            PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING TRUCKEASE SOLUTIONS INC.’S WEBSITE, PLATFORM, SOFTWARE, OR SERVICES.
          </p>
          <p>
            By accessing or using the TruckEase platform, website, software, or services, you acknowledge that you have read, understood, and agree to the terms and limitations described in this Legal Disclaimer and in our{' '}
            <Link href="/terms" className="text-blue-600 hover:underline font-medium">
              Terms of Service
            </Link>.
          </p>
          
          {/* Refined Callout Box */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5 text-slate-800 text-sm space-y-2">
            <h3 className="font-bold text-amber-900 text-base">
              Important: Relationship to Terms of Service
            </h3>
            <p>
              This Legal Disclaimer is a summary of key service limitations and does not replace our full contractual terms. For the complete agreement governing your use of TruckEase, see our{' '}
              <Link href="/terms" className="text-blue-600 hover:underline font-medium">
                Terms of Service
              </Link>. To the extent of any conflict between this Disclaimer and the Terms of Service, the Terms of Service control.
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">1. We Are Not a Government Agency</h2>
          <p>
            TruckEase Solutions Inc. (“TruckEase,” “we,” “our,” or “us”) is a private software and compliance management support provider.
          </p>
          <p>TruckEase is:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Not affiliated with the Federal Motor Carrier Safety Administration (FMCSA);</li>
            <li>Not affiliated with the United States Department of Transportation (DOT);</li>
            <li>Not affiliated with Transport Canada;</li>
            <li>Not affiliated with any provincial, state, federal, or local government agency;</li>
            <li>Not endorsed by any government authority;</li>
            <li>Not a government contractor or representative.</li>
          </ul>
          <p>Our platform and services are offered independently and are not official government services.</p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">2. You Remain Solely Responsible for Compliance</h2>
          <p>
            You, as the carrier, owner‑operator, fleet owner, business operator, or authorized representative, retain full responsibility for your regulatory, licensing, safety, and compliance obligations.
          </p>
          <p>You are solely responsible for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Understanding applicable regulations;</li>
            <li>Monitoring regulatory changes;</li>
            <li>Maintaining required licenses and permits;</li>
            <li>Verifying renewal dates and filing deadlines;</li>
            <li>Submitting required forms and documentation;</li>
            <li>Maintaining accurate records;</li>
            <li>Complying with all applicable federal, state, provincial, and local requirements;</li>
            <li>Responding to inspections, audits, reviews, and investigations;</li>
            <li>Paying all fees, taxes, fines, penalties, and assessments associated with your operations.</li>
          </ul>
          <p>Your use of TruckEase does not transfer any legal or regulatory responsibility to TruckEase.</p>
        </section>

        {/* Section 3 (Revised) */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">3. Nature of Our Services; No Legal or Tax Advice</h2>
          <p>
            All information provided through the TruckEase website, software, communications, reports, reminders, alerts, and support channels is provided for compliance management, informational, and organizational purposes only.
          </p>
          <p className="font-semibold text-slate-900 pt-1">TruckEase does provide:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Compliance tracking and organization tools;</li>
            <li>Compliance‑related consulting and guidance (including assistance with filings such as IFTA, HVUT, and state highway use tax programs such as NY, NM, KY, OR, CT, and similar);</li>
            <li>Operational and data‑driven insights to help you make more informed business and financial decisions.</li>
          </ul>
          <p className="font-semibold text-slate-900 pt-1">TruckEase does not provide:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Legal advice or representation;</li>
            <li>Official government guidance or rulings;</li>
            <li>Services that require a licensed attorney, unless expressly agreed in writing with a qualified law firm;</li>
            <li>Audited financial statements or tax advice that requires a licensed CPA, unless expressly agreed in writing with a qualified accounting firm.</li>
          </ul>
          <p className="font-semibold text-slate-900 pt-2">
            Nothing in our Services creates an attorney–client relationship or a CPA–client relationship. For matters that require legal or licensed tax/accounting advice, you should consult qualified legal counsel or a licensed tax professional regarding your specific circumstances. TruckEase is not a law firm and does not provide legal services.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">4. No Guarantee of Compliance</h2>
          <p>
            TruckEase provides compliance tracking tools, fleet organization software, document management features, reminder and notification systems, and administrative workflow assistance.
          </p>
          <p>TruckEase does not:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Guarantee compliance with any law, regulation, or permit requirement;</li>
            <li>Replace your regulatory obligations;</li>
            <li>Serve as a legal representative;</li>
            <li>Act as a compliance consultant;</li>
            <li>File documents on your behalf unless expressly agreed in writing;</li>
            <li>Represent clients before any government agency.</li>
          </ul>
          <p>We do not guarantee that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The platform will always be available;</li>
            <li>Errors will be corrected;</li>
            <li>Notifications will always be delivered;</li>
            <li>Reminder systems will prevent missed deadlines;</li>
            <li>Information will always be current.</li>
          </ul>
          <p>All compliance‑related outcomes remain solely your responsibility.</p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">5. Information Provided “As Is”</h2>
          <p>
            TruckEase strives to provide useful and accurate information; however, we make no guarantee regarding the accuracy, completeness, reliability, timeliness, or suitability of any information provided through our Services.
          </p>
          <p>
            Regulatory requirements frequently change and may vary by jurisdiction, province, state, operating authority, vehicle type, fleet size, and business structure. Users are responsible for independently verifying all deadlines, filing requirements, permits, registrations, and compliance obligations directly with the appropriate government agencies and authorities.
          </p>
          <p>
            TruckEase services are provided on an “AS IS” and “AS AVAILABLE” basis. To the fullest extent permitted by law, we disclaim all express and implied warranties, including but not limited to accuracy, reliability, availability, merchantability, fitness for a particular purpose, non‑infringement, continuous operation, and error‑free performance.
          </p>
          <p className="text-xs text-slate-500 italic">
            Some jurisdictions do not allow certain warranty disclaimers, so parts of the above limitation may not apply to you.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">6. Errors, Omissions, and Third‑Party Services</h2>
          <p>
            Compliance requirements, filing deadlines, and regulatory information may be affected by government updates, data‑entry errors, user errors, software issues, third‑party system changes, and delayed information feeds. TruckEase expressly disclaims liability for any errors, omissions, inaccuracies, delays, or interruptions related to information provided through the platform or services.
          </p>
          <p>
            The TruckEase platform may contain links, references, or integrations with third‑party services, including FMCSA, DOT, Transport Canada, other government websites, insurance providers, ELD providers, payment processors, and other vendors. These services are provided for convenience only. TruckEase does not control and is not responsible for third‑party content, availability, security practices, policies, or accuracy. Users should review the terms and policies of all third‑party services independently.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">7. Limitation of Liability; Relationship to Terms of Service</h2>
          <p>
            To the fullest extent permitted by applicable law, TruckEase Solutions Inc., its officers, directors, employees, affiliates, contractors, and agents shall not be liable for any losses, damages, costs, penalties, or consequences arising from missed deadlines, expired permits, regulatory or safety violations, audit findings, roadside inspection outcomes, government enforcement actions, suspension or revocation of operating authority, out‑of‑service orders, insurance cancellations, loss of contracts, or business interruption.
          </p>
          <p>
            Our maximum aggregate liability, if any, is limited as described in our{' '}
            <Link href="/terms" className="text-blue-600 hover:underline font-medium">
              Terms of Service
            </Link>{' '}
            (Limitation of Liability section). This Disclaimer does not create any additional liability beyond what is set out in the Terms of Service.
          </p>
          <p>
            For the full description of liability limitations, exclusions, and carve‑outs, please refer to the Limitation of Liability section of our Terms of Service. These limitations and this Disclaimer are interpreted in accordance with the governing law and venue provisions in our Terms of Service.
          </p>
          <p className="text-xs text-slate-500 italic">
            Some jurisdictions do not allow certain limitations of liability, so parts of the above limitation may not apply to you.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">8. Acknowledgment</h2>
          <p>By accessing or using TruckEase Solutions Inc.’s platform, website, or services, you acknowledge and agree that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You have read and understood this Disclaimer and our Terms of Service;</li>
            <li>You understand that TruckEase is not a government agency;</li>
            <li>You understand that TruckEase does not provide legal advice;</li>
            <li>You understand that TruckEase does not guarantee compliance;</li>
            <li>You remain solely responsible for all regulatory obligations;</li>
            <li>You agree to the limitation of liability provisions contained in our Terms of Service;</li>
            <li>You agree to indemnify TruckEase as described in our Terms of Service.</li>
          </ul>
          <p>
            Your continued use of the Services after any update to this Disclaimer or our Terms of Service constitutes your acceptance of the revised versions. If you do not agree with this Disclaimer or our Terms of Service, you must discontinue use of the Services immediately.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">9. Changes to This Disclaimer</h2>
          <p>
            TruckEase reserves the right to update or modify this Legal Disclaimer at any time. Material changes may be communicated through website notices, platform announcements, or email notifications. Continued use of the Services after changes become effective constitutes acceptance of the updated Disclaimer. Each revised version will display an updated “Last Updated” date.
          </p>
          <p>
            This Disclaimer and your use of the Services are subject to the governing law and dispute resolution provisions in our Terms of Service.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">10. Contact Information</h2>
          <p>For any legal, support, or privacy inquiries regarding this Disclaimer, please contact us at:</p>
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
          <p className="text-xs text-slate-400 pt-2">
            This Legal Disclaimer &amp; Service Limitation is effective as of April 21, 2024, and was last updated on August 11, 2026.
          </p>
        </section>
      </article>
    </div>
  )
}
