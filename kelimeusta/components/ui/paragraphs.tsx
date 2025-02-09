import { cn } from "@/lib/utils";

export function Paragraph({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "leading-relaxed text-gray-700 dark:text-gray-300 text-justify",
        className
      )}
    >
      {children}
    </p>
  );
}

export function BlockedChars({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mr-2 inline-block text-2xl font-medium tracking-wide bg-gray-200 dark:bg-gray-700 px-2 rounded-md shadow-sm",
        className
      )}
    >
      {children}
    </span>
  );
}