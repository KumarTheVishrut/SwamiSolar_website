"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What is the cost of solar installation?",
    answer: "The cost varies depending on your energy requirements and roof space. We offer free consultations to provide accurate estimates based on your specific needs."
  },
  {
    question: "How long does the installation process take?",
    answer: "A typical residential installation takes 2-3 days, while commercial projects may take 1-2 weeks depending on the system size."
  },
  {
    question: "What maintenance is required for solar panels?",
    answer: "Solar panels require minimal maintenance. Regular cleaning and annual inspections are recommended to ensure optimal performance."
  },
  {
    question: "What warranty do you provide?",
    answer: "We offer a 25-year warranty on solar panels and a 10-year warranty on installation workmanship."
  },
  {
    question: "Do you handle permits and paperwork?",
    answer: "Yes, we handle all necessary permits, documentation, and grid connection paperwork as part of our turnkey solution."
  }
]

export default function FAQ() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState("")
  const [chatHistory, setChatHistory] = useState<Array<{ type: "user" | "bot", message: string }>>([])

  const handleQuestionClick = (question: string) => {
    const answer = faqs.find(faq => faq.question === question)?.answer
    setChatHistory([
      ...chatHistory,
      { type: "user", message: question },
      { type: "bot", message: answer || "I'm sorry, I couldn't find an answer to that question." }
    ])
    setSelectedQuestion("")
  }

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        
        <Accordion type="single" collapsible className="mb-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Chatbot */}
        <div className="fixed bottom-4 right-4 z-50">
          {isChatOpen ? (
            <Card className="w-80 h-96 flex flex-col">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="font-semibold">Chat with Us</h3>
                <Button variant="ghost" size="sm" onClick={() => setIsChatOpen(false)}>
                  ×
                </Button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    className={`${
                      chat.type === "user" ? "ml-auto bg-primary text-primary-foreground" : "mr-auto bg-muted"
                    } p-2 rounded-lg max-w-[80%]`}
                  >
                    {chat.message}
                  </div>
                ))}
              </div>

              <div className="p-4 border-t">
                <select
                  className="w-full p-2 rounded border"
                  value={selectedQuestion}
                  onChange={(e) => setSelectedQuestion(e.target.value)}
                >
                  <option value="">Select a question...</option>
                  {faqs.map((faq, index) => (
                    <option key={index} value={faq.question}>
                      {faq.question}
                    </option>
                  ))}
                </select>
                <Button
                  className="w-full mt-2"
                  disabled={!selectedQuestion}
                  onClick={() => handleQuestionClick(selectedQuestion)}
                >
                  Ask Question
                </Button>
              </div>
            </Card>
          ) : (
            <Button
              size="icon"
              className="h-12 w-12 rounded-full"
              onClick={() => setIsChatOpen(true)}
            >
              <MessageSquare className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}