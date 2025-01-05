import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { stories } from '@/app/data/stories'

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({ data: stories }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch stories' },
            { status: 500 }
        )
    }
}
