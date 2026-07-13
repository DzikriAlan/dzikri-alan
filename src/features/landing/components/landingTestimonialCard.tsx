// 7. Props
interface Props {
  quote: string;
  name: string;
  role: string;
}

export default function LandingTestimonialCard({ quote, name, role }: Props) {
  const initial = name.charAt(0);

  return (
    <div className="flex h-full min-w-[280px] max-w-sm shrink-0 snap-start flex-col rounded-2xl border border-surface-border bg-black p-6 sm:min-w-0 sm:shrink">
      <span className="mb-4 text-3xl font-serif text-brand">&ldquo;</span>
      <p className="flex-1 text-sm text-neutral-300">{quote}</p>
      <div className="mt-6 flex items-center gap-3 border-t border-surface-border pt-4">
        <div className="flex size-10 items-center justify-center rounded-full bg-neutral-800 text-sm font-semibold text-brand">
          {initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
