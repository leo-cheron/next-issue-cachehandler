import { unstable_cache } from 'next/cache'

export const dynamic = 'force-static'

const fetchData = async () => {
	return {
		date: new Date().toISOString(),
	}
}

export default async function Home() {
	const data = await unstable_cache(fetchData, ['home'], { tags: ['home'] })()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<p><span className='opacity-60'>Last cache revalidation:</span> <br />{data.date}</p>
      </main>
    </div>
  );
}
