import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmitStatus("success");
        console.log("Form submitted successfully");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
        console.error("Form submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Card className="w-full py-10 flex items-center justify-center">
      <CardContent className="w-full px-10">
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="w-full"
                />
              </div>

              <div className="flex flex-col space-y-1.5 w-full lg:w-1/2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Phone Number"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                className="w-full"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message">Additional information</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                className="w-full"
              />
            </div>
          </div>
          <CardFooter className="flex flex-col items-start mt-6">
            <Button type="submit" className="w-full lg:w-auto">
              Send Message
            </Button>
            {submitStatus === "success" && (
              <p className="text-green-600 mt-2 text-center">
                Form submitted successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 mt-2 text-center">
                Error submitting form. Please try again.
              </p>
            )}
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
