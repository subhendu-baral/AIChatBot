// import { generateText } from "ai";
import { streamText } from "ai";
import { NextResponse } from "next/server";
import { togetherai } from '@ai-sdk/togetherai';

export const runtime = "edge"; // Recommended for AI SDK usage on Vercel

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // return new NextResponse(JSON.stringify(messages), { status: 200 });
    if (!messages)
      return new NextResponse("Please Type your Query", { status: 400 });

    const result = await streamText({
      model: togetherai('meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo'),
      temperature: 0.7,
      system: 'You are an AI Assistant developed by Subhendu Baral. Please respond to user\'s response within max 40 words',
      messages,
    });

    return result.toDataStreamResponse()

  } catch (error: unknown) {
    console.error("[CHAT ERROR]", error);
  }
}
