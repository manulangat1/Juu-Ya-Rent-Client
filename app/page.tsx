"use client";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import { Mail, Lock } from "lucide-react"; 

export default function HomePage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    alert(`Form submitted successfully`);
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-semibold text-center text-gray-800">Sign In</h2>

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          icon={<Mail size={16} />}
          value={formData.email}
          onChange={handleChange}
          error={error && !formData.email ? "Email is required" : ""}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          icon={<Lock size={16} />}
          value={formData.password}
          onChange={handleChange}
          error={error && !formData.password ? "Password is required" : ""}
        />

        <Button type="submit" fullWidth>
          Login
        </Button>
      </form>
    </div>
  );
}

