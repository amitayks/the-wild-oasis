import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useCreateUser } from "./useCreateUser";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoasing } = useCreateUser();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label='Full name' error={errors.fullName?.message}>
        <Input
          type='text'
          id='fullName'
          disabled={isLoasing}
          {...register("fullName", {
            required: "Full name is required",
            minLength: {
              value: 3,
              message: "Full name must be at least 3 characters long",
            },
          })}
        />
      </FormRow>

      <FormRow label='Email address' error={errors.email?.message}>
        <Input
          type='email'
          id='email'
          disabled={isLoasing}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email address is not valid",
            },
          })}
        />
      </FormRow>

      <FormRow
        label='Password (min 8 characters)'
        error={errors.password?.message}
      >
        <Input
          type='password'
          id='password'
          disabled={isLoasing}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
      </FormRow>

      <FormRow label='Repeat password' error={errors.passwordConfirm?.message}>
        <Input
          type='password'
          id='passwordConfirm'
          disabled={isLoasing}
          {...register("passwordConfirm", {
            required: "Password confirmation is required",
            validate: (value) => {
              if (value !== watch("password")) {
                return "Passwords do not match";
              }
            },
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button disabled={isLoasing} variations='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isLoasing}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
