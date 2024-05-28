"use client";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";
export default function SearchBar() {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <form
      className="flex items-center justify-between bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search"
        name="name"
        className="flex-1 bg-transparent outline-none"
      />
      <button>
        <CiSearch className="w-[16px] h-[16px]" />
      </button>
    </form>
  );
}
