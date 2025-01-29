import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function AiMessage({ content }: { content: string }) {
  return (
    <div className="flex justify-start items-center gap-3">
    <Avatar>
      <AvatarImage src="/me.jpg" />
      <AvatarFallback>Subhendu AI</AvatarFallback>
    </Avatar>
  <Badge className="left" variant="outline">{content}</Badge>
  </div>
  )
}
