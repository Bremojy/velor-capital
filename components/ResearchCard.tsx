// components/ResearchCard.tsx

type ResearchCardProps = {
  category: string;
  title: string;
  summary: string;
  date: string;
};

export default function ResearchCard(props: ResearchCardProps) {
  return (
    <article
      className="
        bg-white
        border border-[#D4AF37]/20
        rounded-2xl
        p-8
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        hover:border-[#D4AF37]
        transition-all
        duration-300
      "
    >
      <span className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">
        {props.category}
      </span>

      <h3 className="mt-4 text-2xl font-bold text-[#0B1F3A]">
        {props.title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {props.summary}
      </p>

      <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
        {props.date}
      </div>
    </article>
  );
}