type Props = {
  title: string;
};

export function SectionHeader({ title }: Props) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      <h2 className="shrink-0 whitespace-nowrap text-xs font-bold uppercase tracking-[0.3em] text-primary">
        [{title}]
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
