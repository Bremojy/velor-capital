import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-7xl font-bold text-[#0B1F4D]">
          404
        </h1>

        <p className="mt-4 text-gray-600">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="
            inline-block
            mt-8
            bg-[#D4A017]
            px-6
            py-3
            rounded-lg
            text-black
            font-semibold
          "
        >
          Return Home
        </Link>

      </div>
    </main>
  );
}