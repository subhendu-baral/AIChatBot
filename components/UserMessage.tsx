import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function UserMessage({content}: {content:string}) {
    return (
        <div className="flex justify-end items-center gap-3">
            <Badge className="right" >{content}</Badge>
            <Avatar>
                <AvatarImage src="/profile.png" />
                <AvatarFallback>Subhendu AI</AvatarFallback>
            </Avatar>
        </div>
    )
}
