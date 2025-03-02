'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const CacheFlusherClient = ({ revalidate }: { revalidate: (path: string) => void }) => {
	const router = useRouter()

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.shiftKey && e.metaKey && e.key === 'R') {
				revalidate('/')
			} else if (e.metaKey && e.altKey && e.key === '®') {
				e.preventDefault()
				revalidate('/')
				router.refresh()
			}
		}

		window.addEventListener('keydown', handleKeyPress)
		return () => window.removeEventListener('keydown', handleKeyPress)
	}, [])

	return null
}
