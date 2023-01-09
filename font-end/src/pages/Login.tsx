import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //will have to trigger the login to existing account
  };
  return (
    <>
      <div className="container">
        <div className="hero h-64">
          <form action="post" onSubmit={() => {}}>
            <div className="w-full max-w-lg md:shadow-2xl bg-base-300 mt-10 lg:mt-10">
              <div className=" p-20">
                <h3 className=" text-2xl text-center">
                  Login to an existing busines account
                </h3>

                <div className="form-control w-full">
                  <label className="label" htmlFor="email">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label" htmlFor="password">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    // hidden={true}
                    name="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-6 text-center">
                  <p className="text-lg">
                   Don't belong to any business?{" "}
                    <a
                      href="/register"
                      className="link link-hover text-purple-600"
                    >
                      Register business
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
