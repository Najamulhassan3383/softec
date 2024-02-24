import { Button, Form, Input } from "antd";
import HeaderLandingPage from "../components/HeaderLandingPage";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react"; // Import useState
import AuthContext from "../context/AuthContext";
import useAxios from "../hooks/useAxios";
import { toast } from "react-toastify";
import ImageUpload from "../components/ImageUpload";

const UpdateProfilePage = () => {
  const navigate = useNavigate();
  const { state, login } = useContext(AuthContext);
  const [userData, setUserData] = useState(null); // Initialize userData state

  useEffect(() => {
    // Set userData when state is available
    if (state.user) {
      console.log("state.user", state.user);
      setUserData(state.user);
    }
  }, [state.user]); // Update userData when state.user changes

  const { makeRequest, loading, response, error } = useAxios(
    "/api/users/profile",
    "PUT"
  );

  const redirect = "/dashboard";
  const onFinish = (values) => {
    console.log("Success:", values);
    try {
      makeRequest(values);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (response) {
      console.log(response);
      login(response);

      toast.success("Profile updated successful!"); // Display success notification
    }
  }, [response]);

  useEffect(() => {
    if (error) {
      console.error("Fetching failed:", error);
      toast.error(`Fetching Failed: ${error?.message}`); // Display error notification
      navigate("/dashboard");
    }
  }, [error, navigate]);

  const onFinishFailed = (errorInfo) => {
    toast.error("Update failed: Invalid email or password"); // Display error notification
    console.log("Failed:", errorInfo);
  };

  // Render component only when userData is available
  if (!userData) {
    return null;
  }

  return (
    <>
      <HeaderLandingPage />

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Update Profile
          </h2>
        </div>

        <div className="flex justify-center items-center mt-2">
          <img
            src={userData.avatar}
            alt="profile"
            className="w-28 h-28 rounded-full"
          />
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
              name: userData.name,
              email: userData.email,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>

            <Form.Item label="Password" name="password">
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
                // loading={loading}
              >
                Update Profile
              </Button>
            </Form.Item>
          </Form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Back to{" "}
            <Link
              to="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default UpdateProfilePage;
