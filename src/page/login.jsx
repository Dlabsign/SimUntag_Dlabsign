import React, { useState } from "react";

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Daniel" && password === "Daniel") {
      // Login berhasil, panggil onLogin
      onLogin();
    } else {
      // Login gagal, tampilkan pesan kesalahan
      setLoginError(true);
    }
  };

  return (
    <div className="relative mx-auto my-1 border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] ">
      <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="body rounded-[1.7rem] overflow-hidden w-[272px] h-[570px] dark:bg-white-800 py-5 overflow-hidden ">
        <div className="flex justify-center flex-col items-start h-[90%]">
          <h1 className="ml-5 text-xl font-semibold">
            AKADEMIK ONLINE INFORMATIKA
          </h1>
          <div className="login px-5 flex justify-center items-center">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  aria-label="Username"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-label="Password"
                />
              </div>
              <button
                className="w-full py-2 text-white text-base font-semibold rounded-lg"
                type="submit"
              >
                Submit
              </button>
              {loginError && (
                <p className="text-white text-sm text-center mt-1">
                  Login gagal. Silahkan coba lagi.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
