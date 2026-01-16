"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function DemoDisclaimer() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-slate-900 text-white text-xs py-2 px-4 relative z-50">
            <div className="container-custom flex justify-between items-center gap-4">
                <p className="font-medium text-center w-full">
                    <span className="opacity-75">Demo Mode: </span>
                    This is a concept website. Content and images are for demonstration purposes only.
                </p>
                <button
                    onClick={() => setIsVisible(false)}
                    className="opacity-60 hover:opacity-100 transition-opacity p-1"
                    aria-label="Close disclaimer"
                >
                    <X size={14} />
                </button>
            </div>
        </div>
    );
}
