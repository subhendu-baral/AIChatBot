"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { LoaderCircle, Send } from "lucide-react";
import AiMessage from "@/components/AiMessage";
import UserMessage from "@/components/UserMessage";
import { useChat } from 'ai/react';





export default function Home() {

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({});

  console.log(messages);

  return (
    <main className="max-w-3xl mx-auto my-10">
      <Card className="min-h-[100vh]">
        <CardHeader>
          <CardTitle className="text-[30px] text-center">AI Bot By Subhendu</CardTitle>
          <hr></hr>
        </CardHeader>
        <CardContent>
          {messages.length > 0 ? (
            messages.map((message: { id: string; role: string; content: string }) => (
              <div key={message.id}>
                {message.role === 'user' ?
                  <UserMessage content={message.content} />
                  :
                  <AiMessage content={message.content} />
                }
              </div>
            ))
          ) : (
            <p className="text-center mt-[10%]">Hey I am Subhendu your AI Assitant. Ask Me Anything</p>
          )
          }
        </CardContent>
        <CardFooter className="fixed w-full max-w-3xl bottom-0 ">
          <hr />
          <form onSubmit={handleSubmit} className="flex justify-between items-center w-full">
            <Input name="prompt" value={input} onChange={handleInputChange} className="h-14 mr-5 bg-white" placeholder="Ask Me Anything..." />
            <Button disabled={isLoading} type="submit" className="h-14 w-14">{isLoading ? <LoaderCircle className="animate-spin" />: <Send size={28} />}</Button>
          </form>
        </CardFooter>
      </Card>

    </main>
  );
}
