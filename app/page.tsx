import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
     <Link href={'/about'}>About</Link>
     <Link href={'/settings/profile'} >profile</Link>
    </div>
  );
}
