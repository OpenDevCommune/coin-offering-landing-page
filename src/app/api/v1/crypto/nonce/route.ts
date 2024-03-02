import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { isValidChecksumAddress } from 'ethereumjs-util'
import { prisma } from '@/shared/lib/prisma/prisma'
interface CryptoNonceResponse {
    nonce: string;
    expires: string;
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const publicAddress:string = body.publicAddress;
        if (!publicAddress) {
            return new NextResponse("not public address", {status: 400})
        }
        if (!isValidChecksumAddress(publicAddress)) {
            return new NextResponse("Not valid public address", {status: 400})
        }

        const nonce = crypto.randomBytes(32).toString("hex")
        const expires = new Date(new Date().getTime() + 1000 * 60 * 60);

        // TODO: Save nonce and expires to database
        await prisma.user.upsert({
            where: {publicAddress},
            create: {
                publicAddress,
                nonce,
                expires
            },
            update: {
                nonce,
                expires
            },
        });


        const data:CryptoNonceResponse = {
            nonce,
            expires: expires.toISOString()
        }
        return NextResponse.json(data)

    } catch (error: any) {
        return new NextResponse("Internal Error", {status: 500})
    }
}