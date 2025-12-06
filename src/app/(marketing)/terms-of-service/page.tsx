import { Metadata } from "next";
import { Section } from "../../../../app/(components)/components";

export const metadata: Metadata = {
  title: "Terms of Service – StackFold",
  description: "StackFold&apos;s terms of service for data analytics and signal intelligence services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-12">
      <Section>
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-white/70 mb-6">Last updated: December 1, 2025</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="text-white/70 mb-4">
            By accessing or using StackFold&apos;s services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Services</h2>
          <p className="text-white/70 mb-4">
            StackFold provides signal intelligence and data analytics services including but not limited to:
          </p>
          <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
            <li>Real-time market data analysis</li>
            <li>Signal generation and alerts</li>
            <li>Data visualization and reporting</li>
            <li>API access to our data services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. User Accounts</h2>
          <p className="text-white/70 mb-4">
            To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Acceptable Use</h2>
          <p className="text-white/70 mb-4">You agree not to:</p>
          <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
            <li>Use our services for any illegal purpose</li>
            <li>Interfere with or disrupt our services</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Share your account credentials with others</li>
            <li>Use our services to harass or harm others</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Intellectual Property</h2>
          <p className="text-white/70 mb-4">
            All content, features, and functionality of StackFold services are owned by StackFold, Inc. and are protected by international copyright, trademark, and other intellectual property laws.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Payment and Billing</h2>
          <p className="text-white/70 mb-4">
            Paid subscriptions are billed in advance on a monthly or annual basis. You can cancel your subscription at any time, but no refunds will be provided for partial months or years.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Disclaimer of Warranties</h2>
          <p className="text-white/70 mb-4">
            Our services are provided &quot;as is&quot; without any warranties, express or implied. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="text-white/70 mb-4">
            StackFold shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Changes to Terms</h2>
          <p className="text-white/70 mb-4">
            We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our platform.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Contact Information</h2>
          <p className="text-white/70 mb-4">
            For questions about these Terms of Service, please contact us at:
          </p>
          <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
            <li>Email: legal@stackfold.com</li>
            <li>Address: StackFold, Inc., Legal Department, San Francisco, CA</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
