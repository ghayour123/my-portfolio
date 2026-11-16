export function Skeleton({ className = "" }) {
  return <div className={`skeleton ${className}`} aria-hidden="true" />;
}

export function SectionSkeleton() {
  return (
    <div className="shell section" role="status" aria-label="Loading content">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="mt-5 h-12 w-full max-w-2xl sm:h-14" />
      <Skeleton className="mt-4 h-4 w-full max-w-md" />
      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        <Skeleton className="h-40" />
        <Skeleton className="h-40" />
      </div>
      <div className="mt-8 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[88%]" />
        <Skeleton className="h-4 w-[70%]" />
      </div>
    </div>
  );
}
