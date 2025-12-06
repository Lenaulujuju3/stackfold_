import { Metadata } from "next";
import { Section } from "../../../../app/(components)/components";

export const metadata: Metadata = {
  title: "Privacy Policy – StackFold",
  description: "StackFold's privacy policy for data analytics and signal intelligence services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12">
      <Section>
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-white/70 mb-6">Last updated: December 1, 2025</p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
          <p className="text-white/70 mb-4">
            StackFold, Inc. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our signal intelligence and data analytics services.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Data We Collect</h2>
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Information You Provide</h3>
          <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
            <li>Contact information (name, email, company)</li>
            <li>Account credentials and profile information</li>
            <li>Payment and billing information</li>
            <li>Communications with our support team</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Information We Collect Automatically</h3>
          <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
            <li>Usage data and analytics</li>
            <li>Device and browser information</li>
            <li>IP addresses and location data</li>
            <li>Cookies and similar technologies</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="text-white/70 mb-4">We use your information to:</p>
          <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
            <li>Provide and improve our signal intelligence services</li>
            <li>Process payments and manage subscriptions</li>
            <li>Communicate with you about your account and services</li>
            <li>Comply with legal obligations</li>
            <li>Protect against fraud and unauthorized access</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Sharing</h2>
          <p className="text-white/70 mb-4">
            We do not sell your personal data. We may share information with:
          </p>
          <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Data Security</h2>
          <p className="text-white/70 mb-4">
            We implement industry-standard security measures including encryption, access controls, and regular security audits. Our services are SOC 2 compliant and we maintain strict data handling procedures.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Your Rights</h2>
          <p className="text-white/70 mb-4">Depending on your location, you may have rights including:</p>
          <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
            <li>Access to your personal data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data</li>
            <li>Data portability</li>
            <li>Opt-out of certain data processing</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. GDPR Compliance</h2>
          <p className="text-white/70 mb-4">
            For users in the European Union, we comply with GDPR requirements including data minimization, purpose limitation, and maintaining records of processing activities.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. CCPA Compliance</h2>
          <p className="text-white/70 mb-4">
            For California residents, we comply with CCPA requirements and provide mechanisms to exercise your privacy rights.
          </p>
          
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Contact Us</h2>
          <p className="text-white/70 mb-4">
            For privacy-related questions or to exercise your rights, contact us at:
          </p>
          <ul className="list-disc list-inside text-white/70 mb-4 space-y-2">
            <li>Email: privacy@stackfold.com</li>
            <li>Address: StackFold, Inc., Privacy Office, San Francisco, CA</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
