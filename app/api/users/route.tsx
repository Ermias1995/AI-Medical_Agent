import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/config/db"


export async function POST(request: NextRequest) {
    const user = await currentUser();

    try{
        //@ts-ignore
        const users = await db.select().from(usersTable).where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress));
        if (users?.length === 0) {
           const result = await db.insert(usersTable).values({
            name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress,
            credits: 10,
           }).returning({ usersTable });
           return NextResponse.json(result[0]?.usersTable);
        }
        return NextResponse.json(users[0]);
    } catch(e){
        return NextResponse.json({error: 'Failed to fetch user'}, {status: 500});
    }
}