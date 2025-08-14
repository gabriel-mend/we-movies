export function ContentInfo({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="h-[516px] md:h-[596px] flex flex-col items-center w-full bg-white text-secondary rounded-sm py-16 p-2">
      <h2 className="text-[20px] font-bold text-center sm:max-w-full max-w-[200px] leading-none">
        {title}
      </h2>
      {children}
    </div>
  )
}
