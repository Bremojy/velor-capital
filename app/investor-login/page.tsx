import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Login",
};

export default function InvestorLoginPage() {
  return (
    <main className="min-h-screen bg-[#071632] text-white flex items-center justify-center">

      <div className="max-w-3xl px-6 text-center">

        <div className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 text-[#D4A017] uppercase tracking-widest text-sm font-medium">
          Velor Capital Investor Portal
        </div>

        <h1 className="mt-8 text-6xl md:text-7xl font-bold">
          Coming Soon
        </h1>

        <p className="mt-8 text-2xl text-white font-medium">
          Exclusive access for approved investors.
        </p>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Our secure investor portal is currently under development.
          Soon, approved investors will be able to access portfolio
          updates, research reports, performance summaries, and
          important investor communications through a dedicated
          private dashboard.
        </p>

        <div className="mt-12 flex justify-center">
          <div className="bg-white/5 border border-white/10 rounded-3xl px-8 py-6 backdrop-blur-sm">
            <p className="text-[#D4A017] font-semibold">
              Investor Access Launching Soon
            </p>

            <p className="mt-2 text-gray-300">
              Thank you for your patience while we build a secure
              institutional-grade experience.
            </p>
          </div>
        </div>

      </div>

    </main>
  );
}