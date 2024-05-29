import Image from 'next/image';
import Link from 'next/link';

export default function ProductList() {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/teste" className="relative w-full h-80">
        <Image
          src={
            'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800'
          }
          alt=""
          fill
          sizes="25vw"
        />
      </Link>
    </div>
  );
}
