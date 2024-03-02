import {NextResponse} from "next/server";
import { prisma } from '@/shared/lib/prisma/prisma'
import { ethers } from "ethers";
import { isValidChecksumAddress } from 'ethereumjs-util'

function onValidUsername(username:string) {
    const pattern = /^[A-Za-z][A-Za-z0-9_]{6,29}$/
    return pattern.test(username)
}

function onValidEmail(email:string) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return pattern.test(email)
}
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {username, email, publicAddress, signedNonce} = body;

        if (!publicAddress) {
            return NextResponse.json({message: "Invalid public address"}, {status: 400})
        }
        if (!signedNonce) {
            return NextResponse.json({message: "Invalid signed nonce"}, {status: 400})
        }
        if (!username) {
            return NextResponse.json({message: "Username cannot be empty"}, {status: 400})
        }

        if (!email) {
            return NextResponse.json({message: "Email cannot be empty"}, {status: 400})
        }
        if (!onValidUsername(username)) {
            return NextResponse.json({message: "Username must contain only letters and numbers and an underscore"}, {status: 400})
        }

        if (!onValidEmail(email)) {
            return NextResponse.json({message: "Invalid Email. Try again!"}, {status: 400})
        }

        if (!isValidChecksumAddress(publicAddress)) {
            return NextResponse.json({message: "Invalid public address!"}, {status: 400});
        }
        const user = await prisma.user.findUnique({
            where: {publicAddress}
        })
        if (!user?.nonce) return NextResponse.json({message: "Invalid nonce"}, {status: 400});

        const signerAddress = ethers.verifyMessage(
            user.nonce,
            signedNonce
        );

        if (signerAddress !== publicAddress) return NextResponse.json({message: "Invalid signed address"}, {status: 400});

        if (user.expires < new Date()) return NextResponse.json({message: "Invalid nonce"}, {status: 400});

        const usernameIsExist = await prisma.user.findUnique({where: {username}})
        if (usernameIsExist) {
            return NextResponse.json({message: "Sorry, that username is already taken. Try another name!"}, {status: 401})
        }
        try {
            await prisma.user.update({
                where: {publicAddress},
                data: {
                    username,
                    email
                }
            })
        } catch (error: any) {
            console.error(error)
            return NextResponse.json({message: "Something wrong. Try again later"}, {status: 500})
        }

        return NextResponse.json({message: "Success"}, {status: 200})
    } catch (error: any) {
        console.error(error)
        return NextResponse.json({message: "Something wrong. Try again later"}, {status: 500})
    }
}
