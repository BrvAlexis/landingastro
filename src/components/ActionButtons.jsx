import React from "react";
import { Button } from "@/components/ui/button";

export const ActionButtons = () => {
    return (
        <div className="flex items-center space-x-4">
            <Button variant="outline" asChild>
                <a href="#contact">Contact</a>
            </Button>
            <Button asChild>
                <a href="#contact">Prendre RDV</a>
            </Button>
        </div>
    );
}; 