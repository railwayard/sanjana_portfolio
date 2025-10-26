
"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function AnimatedServiceCard() {
  return (
    <Card className="z-20">
      <CardSkeletonContainer>
        <IconSkeleton />
      </CardSkeletonContainer>
      <CardTitle>Service Title</CardTitle>
      <CardDescription>Service description goes here.</CardDescription>
    </Card>
  );
}

const IconSkeleton = () => {
  return (
    <div className="overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <IconContainer className="h-8 w-8 circle-1">
          <Image
            src="/images/placeholder.png"
            alt="icon-1"
            width={32}
            height={32}
            className="h-8 w-8 aspect-square"
          />
        </IconContainer>
        <IconContainer className="h-8 w-8 circle-2">
          <Image
            src="/images/placeholder.png"
            alt="icon-2"
            width={32}
            height={32}
            className="h-8 w-8 aspect-square"
          />
        </IconContainer>
       
      </div>
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div
    className={cn(
      "relative w-full h-full mx-auto overflow-hidden rounded-[var(--borderRadius)] border border-[rgba(255,255,255,0.10)] dark:bg-[var(--primaryColor5)] bg-[var(--primaryColor5)] shadow-[2px_4px_16px_0px_rgba(100,100,100,0.06)_inset] group",
      className
    )}
  >
    <div className="relative z-50">
      <div className="p-4">{children}</div>
    </div>
  </div>
);

export const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h3
    className={cn(
      "text-lg lg:text-xl xl:text-2xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColor)] py-2 tracking-wide",
      className
    )}
  >
    {children}
  </h3>
);

export const CardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p
    className={cn(
      "text-sm/6 lg:text-base/6 font-normal tracking-wide",
      className
    )}
  >
    {children}
  </p>
);

export const CardSkeletonContainer = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("rounded-[var(--borderRadius)] z-40 mb-4", className)}>
    {children}
  </div>
);

const IconContainer = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div
    className={cn(
      "h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]",
      className
    )}
  >
    {children}
  </div>
);