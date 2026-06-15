interface Props {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  dark = true,
}: Props) {
  return (
    <div className="mb-12 text-center">
      {/* Gold Accent */}
      <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6 rounded-full" />

      {/* Title */}
      <h2
        className={`text-4xl md:text-5xl font-bold ${
          dark ? "text-white" : "text-[#0B1F3A]"
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl mx-auto text-lg ${
            dark ? "text-white/80" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}