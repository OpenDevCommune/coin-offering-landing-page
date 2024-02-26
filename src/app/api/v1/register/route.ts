import {NextResponse} from "next/server";


export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log(body)

        return new NextResponse("Success", {status: 200})
    } catch (error: any) {
        return new NextResponse("Internal Error", {status: 500})
    }
}