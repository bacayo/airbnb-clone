"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { onOpen } from "@/redux/slices/loginModalSlice";
import { onClose } from "@/redux/slices/registerModalSlice";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import Modal from "./Modal";

const RegisterModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.registerModal);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Success");
        dispatch(onClose());
        dispatch(onOpen());
      })
      .catch((err) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = useCallback(() => {
    dispatch(onClose());
    dispatch(onOpen());
  }, [dispatch]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-4 ">
      <hr />
      <Button
        outline
        label="Continue with google"
        icon={FcGoogle}
        onClick={() => {
          signIn("google");
        }}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {
          signIn("github");
        }}
      />
      <div className="mt-4 font-light text-neutral-500">
        <div className="flex flex-row items-center justify-center gap-2">
          Already have an account?
          <div
            onClick={toggle}
            className="text-gray-400 cursor-pointer hover:underline"
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={isOpen}
      title="Register"
      //   actionLabel="Continue"
      actionLabel="Continue"
      onClose={() => {
        dispatch(onClose());
      }}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
