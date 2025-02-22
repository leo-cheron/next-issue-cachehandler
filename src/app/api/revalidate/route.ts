import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams
	const path = searchParams.get('path') || '/'
	const tags = searchParams.get('tags')?.split(',')

	if (!tags && path) {
		revalidatePath(path, 'page')
	}

	if (tags?.length) {
		for (const tag of tags) {
			revalidateTag(tag)
		}
	}

	return NextResponse.json({ revalidated: true, path, tags }, { status: 200 })
}
