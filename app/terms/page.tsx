import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of the Velor Capital website.",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold text-[#0B1F4D] mb-8">
        Terms of Service
      </h1>

      <div className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Acceptance of Terms
          </h2>

          <p>
            By accessing and using the Velor Capital website,
            you agree to these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Website Use
          </h2>

          <p>
            This website is provided for informational purposes
            only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Intellectual Property
          </h2>

          <p>
            All content and branding belong to Velor Capital.
          </p>
        </section>
      </div>
    </main>
  );
}