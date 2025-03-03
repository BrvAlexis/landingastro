import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialAvatar = ({ src, alt, fallback, className }) => {
    return (
        <Avatar className={className}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
}; 