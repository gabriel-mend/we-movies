export function CardListHeader() {
  return (
    <div className="sm:flex hidden items-center justify-between mb-4 text-sm text-gray-regular font-bold">
      <p className="w-full max-w-[280px]">PRODUTO</p>
      <p className="w-full max-w-[348px]">QTD</p>
      <p className="w-full max-w-[348px]">SUBTOTAL</p>
      <p className="w-full text-right max-w-[24px]"> </p>
    </div>
  )
}
