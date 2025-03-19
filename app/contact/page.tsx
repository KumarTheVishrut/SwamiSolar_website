"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Office</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1" />
                  <p className="text-muted-foreground">
                    215 , 2nd Floor. Yogi Arcade,<br />
                    Opp Yogi Heights, Yogi Chowk , Varaccha,<br />
                    Surat , India - 395010
                  </p>
                </div>
              </div>
    
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5" />
                    <p className="text-muted-foreground">+91 9925702808</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5" />
                    <p className="text-muted-foreground">info@swamisolar.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <div className="h-[300px] bg-muted rounded-lg overflow-hidden">
   
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.3364867012265!2d72.88264947530587!3d21.2084061804863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f770a90e5a1%3A0xe8a5b7706dbd3f02!2sSwami%20Solar!5e1!3m2!1sen!2sin!4v1742359394226!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                 />


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}