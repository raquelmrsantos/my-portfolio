import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    showDivider?: boolean;
}

export default function Section({ children, className = '', showDivider = true }: SectionProps) {
    return (
        <>
            <section className={`min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 py-16 md:py-24 ${className}`}>
                <div className="max-w-4xl w-full mx-auto">
                    {children}
                </div>
            </section>
            {showDivider && <div className="section-divider" />}
        </>
    );
}