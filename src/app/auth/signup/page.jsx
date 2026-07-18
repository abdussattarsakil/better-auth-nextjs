"use client";

import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";


const SignUpPage = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        
        // const name = e.target.name.value
        // console.log(name);

        const formData = new FormData(e.currentTarget);
        console.log(formData);
        const data = Object.fromEntries(formData.entries());
        console.log("From submitted with:", data);

    };

    return (
        <div className="container mx-auto">
            <div>
                <h1 className="text-center p-5 text-2xl font-mono">Please Sign Up</h1>
                <div className="flex justify-center">
                    <Form className="flex w-96 flex-col gap-5" onSubmit={onSubmit}>

                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Name</Label>
                            <Input name="name" placeholder="Your Name" />
                            <FieldError />
                        </TextField>

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
                            <Input name="email" placeholder="Your Email Address" />
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
                            <Input name="password" placeholder="Enter your password" />
                            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError />
                        </TextField>
                        <div className="flex gap-2">
                            <Button type="submit">
                                <Check />
                                Submit
                            </Button>
                            <Button type="reset" variant="secondary">
                                Reset
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    );
};

export default SignUpPage;