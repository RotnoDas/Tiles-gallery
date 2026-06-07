"use client";
import React from 'react';
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import { toast, Zoom } from 'react-toastify';

const SignInPage = () => {
    const handleSignIn = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || 'Failed to sign in', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
        else {
            toast.success('Account login successfully', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }

    const handleGoogleSignIn = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    }

    return (
        <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 flex items-center justify-center bg-linear-to-b from-white to-gray-50">
            <Card className="w-full max-w-md border border-gray-200 bg-white/95 px-4 py-8 shadow-lg shadow-gray-200/60 sm:px-6 sm:py-10">
                <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-950">Sign In</h1>

                <Form className="mx-auto flex w-full max-w-sm flex-col gap-4 pt-6" onSubmit={handleSignIn}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        <Button type="submit" className="w-full">
                            <Check />
                            Login
                        </Button>
                        <Button type="reset" variant="secondary" className="w-full">
                            Reset
                        </Button>
                    </div>

                    <div className="flex items-center gap-3 py-2">
                        <div className="h-px flex-1 bg-gray-200" />
                        <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">OR</p>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    <div>
                        <Button
                            type="button"
                            variant="secondary"
                            onPress={handleGoogleSignIn}
                            className="w-full border border-gray-200 bg-white text-gray-900 font-semibold hover:bg-gray-50"
                        >
                            <FaGoogle /> Continue with Google
                        </Button>
                    </div>

                    <p className="text-center text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="font-semibold text-gray-950 hover:underline">
                            Register
                        </Link>
                    </p>
                </Form>
            </Card>
        </main>
    );
};

export default SignInPage;