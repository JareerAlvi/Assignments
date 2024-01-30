import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input className="text-xs  font-semibold text-black" type="email" placeholder="Input Your Email" />
      <Button type="submit" className="bg-black text-white pt-2 hover:bg-inherit hover:text-black">Subscribe</Button>
    </div>
  )
}
