export function CardRowMobileContentGroup({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full flex flex-col gap-4 min-w-[216px]">{children}</div>
  )
}
