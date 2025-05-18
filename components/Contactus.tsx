"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = "6289504319908";

    const message = `Halo, saya ${formData.name}.\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setFormData({ name: "", email: "", message: "" });
    alert("Pesan Anda sedang dialihkan ke WhatsApp!");
  };

  return (
    <section
      id="kontak"
      className="py-16 bg-gray-900 text-white relative mb-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have any questions or want to collaborate? We&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md p-3 text-white focus:ring-red-500 focus:border-red-500"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-md transition-all transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 text-gray-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Contact Information
            </h3>
            <p>
              Feel free to reach out to us through any of the following methods:
            </p>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <span>Tegal City , Central Java , Indonesia ID 52121</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500 text-xl" />
              <span>colorblindwire@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500 text-xl" />
              <span>+62 895 0431 9908</span>
            </div>
            <p className="pt-4">
              We typically respond within 24-48 hours. For urgent inquiries,
              please call us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
