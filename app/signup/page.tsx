"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FiEye, FiEyeOff, FiMail, FiLock, FiUserPlus } from "react-icons/fi";
import Link from "next/link";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signup, loading } = useAuthStore();
  const router = useRouter();

  const handleSignup = async () => {
    try {
      if (!email || !password) {
        toast.error("Credentials not provided");
        return;
      }
      await signup(email, password);
      router.push("/upload"); // Redirect after signup
    } catch (err) {
      console.log("Signup failed. Please try again. ", err);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
      <Card className="w-full max-w-2xl mt-4 shadow-2xl border-none bg-white/90 backdrop-blur-lg rounded-2xl">
        <CardContent className="px-12 py-4 space-y-10">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-blue-100 rounded-full p-3 mb-2 shadow">
              <FiUserPlus className="text-blue-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-blue-700 text-center">
              Create Account
            </h2>
            <p className="text-sm text-center text-blue-400">
              Sign up to get started
            </p>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium flex items-center gap-2 text-blue-700">
              <FiMail /> Email
            </label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="bg-white/90 text-blue-900 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium flex items-center gap-2 text-blue-700">
              <FiLock /> Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="bg-white/90 text-blue-900 border border-blue-200 rounded-xl pr-10 focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-400 hover:text-blue-600 transition"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={0}
                role="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-md font-semibold rounded-xl py-3 shadow"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 mr-1 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Creating account...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <FiUserPlus /> Sign Up
              </span>
            )}
          </Button>

          <p className="text-center text-sm text-blue-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
