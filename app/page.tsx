import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data loaded"), 3000)
  );
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
