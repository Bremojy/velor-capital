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
        border
        rounded-2xl
        p-8
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      <span className="text-sm font-semibold text-[#D4A017]">
        {props.category}
      </span>

      <h3 className="mt-4 text-2xl font-bold text-[#0B1F4D]">
        {props.title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {props.summary}
      </p>

      <div className="mt-6 text-sm text-gray-500">
        {props.date}
      </div>
    </article>
  );
}