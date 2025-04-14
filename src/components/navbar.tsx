import { SchemaToggle } from '@/components/schema-toggle';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Navbar({ className }: { className: string }) {
  return (
    <div
      className={cn(
        'flex justify-between items-center h-[64px] dark:bg-neutral-900 text-neutral-foreground backdrop-blur-sm px-4 mt-8 w-[70%] mx-auto rounded-lg shadow-md',
        className,
      )}
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo.webp"
          alt="logo"
          width={100}
          height={100}
          className="h-8 w-auto object-contain"
        />
        <span className="text-xl">Form Stepper</span>
      </Link>
      <SchemaToggle />
    </div>
  );
}
