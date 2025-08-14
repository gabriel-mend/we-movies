export function CardRowMobileContent({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex flex-col gap-4 max-w-[216px]">{children}</div>
}
