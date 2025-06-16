import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CardDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // 👈 default role
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const user = JSON.parse(storedUser);

    if (storedUser && user.role === "user") {
      navigate("/landPageUser");
    } else if (storedUser && user.role === "admin") {
      navigate("/dashboard");
    } else if (storedUser && user.role === "s_admin") {
      navigate("/superadminDashboard");
    }
    
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reefresh.onrender.com/login", {
        username: email,
        password: password,
        role: role, // 👈 use selected role
      });

      const data = response.data;

      if (data.success) {
        console.log("Login successful", data.msg);
        localStorage.setItem("user", JSON.stringify(data.user));
        if (data.user.role === "user") {
          navigate("/landPageUser");
        } else if (data.user.role === "admin") {
          navigate("/dashboard");
        } else if (data.user.role === "s_admin") {
          navigate("/superadminDashboard");
        }
      } else {
        alert("Login failed: " + data.msg);
      }
    } catch (error) {
      console.log("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="w-screen flex justify-center items-center h-auto">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* 👇 Role Selector */}
              <div className="grid gap-2">
                <Label htmlFor="role">Sign in as</Label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="border p-2 rounded-md"
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="s_admin">Super Admin</option>
                </select>
              </div>
            </div>

            <CardFooter className="flex-col gap-2 mt-4">
              <Button type="submit" className="w-full">
                Login
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
