export function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="w-full max-w-[1048px] px-4 mx-auto">{children}</div>
}
