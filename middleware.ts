import { NextRequest, NextResponse } from "next/server";
import crypto from 'node:crypto'

export function middleware(_request: NextRequest) {

	const nonce = crypto.randomBytes(16).toString('base64')

	const response = NextResponse.next()

	response.headers.set("x-nonce", nonce)

	response.headers.set(
		"Content-Security-Policy", `script-src 'nonce-${nonce}' 'strict-dynamic' 'report-sample' 'https: https:;`
	)

	return response
}

export const config = {
	matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
