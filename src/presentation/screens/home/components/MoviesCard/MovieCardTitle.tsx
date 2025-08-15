export function MovieCardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="h-[18px] text-xs font-bold text-center  text-gray-dark leading-none">
      {children}
    </h3>
  )
}
