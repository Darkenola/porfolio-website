import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

type CTAButtonsProps = {
  primaryHref: string;
  secondaryHref: string;
};

export function CTAButtons({
  primaryHref,
  secondaryHref
}: CTAButtonsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link href={primaryHref} className="button-primary">
        View Projects
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
      <Link href={secondaryHref} className="button-secondary">
        Contact Me
        <Mail className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
