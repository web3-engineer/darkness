import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q") || "";

    const topics = await (prisma as any).topic.findMany({
        where: {
            name: {
                contains: query,
                mode: "insensitive",
            },
        },
        take: 8,
    });

    return NextResponse.json(topics.map((t: any) => t.name));
}