import Link from "next/link";
import Image from "next/image";
import { logo } from '@/lib/images'

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="JobHive">
      <Image src={logo} alt="JobHive Logo" width={32} height={32} />
    </Link>
  );
}
