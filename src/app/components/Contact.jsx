import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Contact = () => {
  return (
    <section className=" py-10">
      <div className=" container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="py-6">
              <h2 className=" font-bold text-secend text-[1.3rem]">
                Lets Connect
              </h2>
              <p className=" tex-sm text-gray-500 pt-4 ">
                Please fill out the form on this section to contact with me. Or
                call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
              </p>
            </div>

            <div className="social flex space-x-5">
              <BsFacebook className="  text-sm text-gray-500  text-[1.3rem]" />
              <AiFillLinkedin className="  text-sm text-gray-500  text-[1.3rem]" />
              <AiFillTwitterCircle className="  text-sm text-gray-500  text-[1.3rem]" />
            </div>
          </div>

          <div>
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">
                Sign Up
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                  <Input size="lg" label="Name" />
                  <Input size="lg" label="Email" />
                  <Input type="password" size="lg" label="Password" />
                </div>
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I agree the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-blue-500"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth>
                  Register
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                  >
                    Sign In
                  </a>
                </Typography>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
