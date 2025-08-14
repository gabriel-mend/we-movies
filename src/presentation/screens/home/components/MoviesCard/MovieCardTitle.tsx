export function MovieCardTitle({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <h3 className="text-xs font-bold text-center  text-gray-dark leading-none">
      {children}
    </h3>
  )
}
