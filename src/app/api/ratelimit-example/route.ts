import { NextRequest, NextResponse } from 'next/server';
import { unkey } from '../../../server/ratelimit';

export async function GET(req: NextRequest) {
    const ip = getClientIp(req);
    const ratelimit = await unkey.limit(ip);

    if (!ratelimit.success) {
        return createErrorResponse("Chillax, you've been ratelimited", 429);
    }

    return createSuccessResponse(
        `Cool, you have a limit of ${ratelimit.limit} requests.`
    );
}

function getClientIp(req: NextRequest): string {
    const forwarded = req.headers.get('x-forwarded-for');
    return forwarded
        ? forwarded.split(',')[0]
        : req.headers.get('x-real-ip') || 'not.found';
}

function createErrorResponse(message: string, status: number): NextResponse {
    return NextResponse.json({ message }, { status });
}

function createSuccessResponse(message: string): NextResponse {
    return NextResponse.json({ message }, { status: 200 });
}
