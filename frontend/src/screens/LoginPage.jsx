import React, { useContext, useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxios from "../hooks/useAxios";
import AuthContext from "../context/AuthContext";
import HeaderLandingPage from "../components/HeaderLandingPage";

const LoginPage = () => {
  const navigate = useNavigate();
  const { state, login } = useContext(AuthContext);
  const { makeRequest, loading, response, error } = useAxios(
    "/api/users/auth",
    "POST"
  );

  const redirect = "/";

  useEffect(() => {
    if (response) {
      // console.log("response from login page", response);
      login(response);
      navigate("/dashboard");
      toast.success("Login successful!"); // Display success notification
    }
  }, [response, navigate, login, redirect]);

  useEffect(() => {
    if (error) {
      console.error("Login failed:", error);
      toast.error(`Login Failed: ${error?.message}`); // Display error notification
      navigate("/LoginPage");
    }
  }, [error, navigate]);

  const onFinish = async (values) => {
    try {
      makeRequest(values);
    } catch (error) {
      console.error("Login failed:", error);
    }

    console.log("Success:", values);
  };

  useEffect(() => {
    if (state.isAuthenticated) {
      navigate(redirect);
    }
  }, [state, navigate, redirect]);

  const onFinishFailed = (errorInfo) => {
    toast.error("Login failed: Invalid email or password"); // Display error notification
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <HeaderLandingPage />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
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
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
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
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
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
                Submit
              </Button>
            </Form.Item>
          </Form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not have account yet?{" "}
            <Link
              to="/SignUpPage"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
