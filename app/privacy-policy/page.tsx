import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Velor Capital collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">

      <h1 className="text-5xl font-bold text-white mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Introduction
          </h2>

          <p>
            Velor Capital respects your privacy and is committed
            to protecting the personal information you provide
            through this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Information We Collect
          </h2>

          <p>
            We may collect information that you voluntarily
            provide, including your name, email address,
            company details, and any information submitted
            through contact forms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            How We Use Information
          </h2>

          <p>
            Information collected may be used to:
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Respond to inquiries and requests.</li>
            <li>Provide information about our services.</li>
            <li>Improve website functionality and user experience.</li>
            <li>Meet legal and regulatory obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Cookies & Analytics
          </h2>

          <p>
            This website may use cookies and analytics tools
            to understand visitor behavior, improve
            performance, and enhance the user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Data Security
          </h2>

          <p>
            Velor Capital takes reasonable measures to protect
            personal information from unauthorized access,
            disclosure, alteration, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Third-Party Services
          </h2>

          <p>
            We may use trusted third-party providers for
            website hosting, analytics, communication, and
            other operational purposes. These providers may
            process information on our behalf.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Your Rights
          </h2>

          <p>
            Depending on applicable laws, you may have rights
            regarding access, correction, deletion, or
            restriction of your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Contact Us
          </h2>

          <p>
            If you have questions regarding this Privacy
            Policy, please contact Velor Capital through the
            Contact page.
          </p>
        </section>

      </div>

    </main>
  );
}