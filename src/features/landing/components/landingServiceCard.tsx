// 1. Import External Library
import type { LucideIcon } from "lucide-react";

// 7. Props
interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function LandingServiceCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl border border-surface-border bg-black p-6 transition-colors hover:border-brand/30">
      <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-surface-border text-brand">
        <Icon className="size-5" />
      </div>
      <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-neutral-300">{description}</p>
    </div>
  );
}
