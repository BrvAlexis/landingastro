import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const TestimonialAvatar = ({ src, alt, fallback }) => {
    return (
        <Avatar>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
}; 