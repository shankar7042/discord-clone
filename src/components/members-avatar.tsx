import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface MembersAvatarProps {
  src?: string;
  className?: string;
}

const MembersAvatar = ({ src, className }: MembersAvatarProps) => {
  return (
    <Avatar className={cn("h-7 w-7 md:h-10 md:w-10", className)}>
      <AvatarImage src={src} />
    </Avatar>
  );
};

export default MembersAvatar;
