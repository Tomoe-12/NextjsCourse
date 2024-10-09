export const revalidate = 5 ; // 5 second
// export const dynamic = 'force-dynamic'

export default async function Home() {



  return (
    <div>
      <h2 className="text-yellow-600">{Date.now()}</h2>
      <h1>Home page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quas modi
        atque quidem? Aut, voluptate repudiandae ipsam ex tenetur architecto nam
        sit natus magnam adipisci recusandae et ipsa tempora dignissimos?
      </p>
    </div>
  );
}