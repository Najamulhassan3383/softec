import { Button, Form, Input } from "antd";
import HeaderLandingPage from "../components/HeaderLandingPage";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import AuthContext from "../context/AuthContext";
import axios from "axios";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const { makeRequest, loading, response, error } = useAxios(
    "/api/users",
    "POST"
  );

  const onFinish = async (values) => {
    const body = {
      name: values.name,
      password: values.password,
      email: values.email,
    };
    try {
      makeRequest(body);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  useEffect(() => {
    if (response) {
      console.log(response);
      login(response);
      navigate("./dashboard");
    }
  }, [response, navigate, login]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <HeaderLandingPage />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("The two passwords do not match!");
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                className="w-full bg-green-900"
                htmlType="submit"
                loading={loading}
              >
                Register
              </Button>
            </Form.Item>
          </Form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/LoginPage"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
