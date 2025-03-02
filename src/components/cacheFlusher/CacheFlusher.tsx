import { revalidatePath } from 'next/cache'
import { Suspense } from 'react'
import { CacheFlusherClient } from './CacheFlusherClient'

export const CacheFlusher = () => {
	const revalidate = async (path: string) => {
		'use server'
		revalidatePath(path, 'layout')
	}

	return (
		<Suspense>
			<CacheFlusherClient revalidate={revalidate} />
		</Suspense>
	)
}
