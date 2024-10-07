import { Search } from "lucide-react"
import { Input } from "../ui/input"

export default function SearchBar() {
  return (
    <form className="hidden md:block">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-[200px] pl-8 md:w-[300px]"
        />
      </div>
    </form>
  )
}