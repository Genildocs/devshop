import Link from "next/link";

export default function CategoryList() {
  return (
    <div className="px-4 overflow-scroll">
      <div className="flex gap-4 md:gap-8">
        <Link href="/list?cat=test"></Link>
      </div>
    </div>
  );
}
