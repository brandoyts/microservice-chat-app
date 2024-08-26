"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import AuthContainer from "../../common/components/auth-container";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";

type SignInCreedentials = {
  username: string;
  password: string;
};

function SignInContainer() {
  const [signInCredentials, setSignInCredentials] =
    useState<SignInCreedentials>();

  const handleSignInCredentialsChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSignInCredentials({
      ...signInCredentials,
      [event.target.name]: event.target.value,
    } as SignInCreedentials);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(signInCredentials);
  };

  return (
    <AuthContainer>
      <form
        action="#"
        className="flex flex-col gap-3"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <Input
          placeholder="username"
          name="username"
          onChange={(e) => handleSignInCredentialsChange(e)}
        />
        <Input
          placeholder="password"
          name="password"
          onChange={(e) => handleSignInCredentialsChange(e)}
        />
        <Button type="submit">Sign in</Button>
      </form>
    </AuthContainer>
  );
}

export default SignInContainer;
