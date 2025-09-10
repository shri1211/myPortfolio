"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" }
    let isValid = true

    if (!formData.name) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      isValid = false
    }

    if (!formData.message) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(e.currentTarget.action, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log("Form submitted successfully");
          setFormData({ name: "", email: "", message: "" });
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("An error occurred during form submission", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-gradient-to-b from-muted to-background p-4 text-foreground py-20"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold inline border-b-4 border-primary text-foreground">Contact</h2>
          <p className="py-6 text-muted-foreground text-lg">Submit the form below to get in touch with me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="animate-slide-in-left animate-delay-200">
            <h3 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground">shrinidhihegde133@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <p className="text-muted-foreground">+91 9632271596</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground">Available for remote work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-in-right animate-delay-400 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <form 
               action="https://getform.io/f/dc629319-2bb4-4170-86d0-73c876918244"
            method="POST"
              onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-input border-border focus:border-primary transition-colors duration-300 ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-input border-border focus:border-primary transition-colors duration-300 ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Enter your message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-input border-border focus:border-primary transition-colors duration-300 resize-none ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Let's Talk
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact
