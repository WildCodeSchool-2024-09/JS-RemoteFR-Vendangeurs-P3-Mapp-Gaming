import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function RegisterPage() {
  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/register`,
      login,
      { withCredentials: true },
    );

    const currentUser = await axios.get(
      `${import.meta.env.VITE_API_URL}/auth/find/${newUser.data.userId}`,
      { withCredentials: true },
    );

    setUser(currentUser.data);

    setLogin({
      username: "",
      email: "",
      password: "",
    });

    navigate("/");
  };

  return (
    <div className="{`${theme} bg-bg-primary text-color-text-primary min-h-screen relative overflow-hidden`}">
      <div className="min-h-screen m-0 flex items-center justify-center relative z-10 ">
        <div
          id="RegisterContainer"
          className="justify-center w-full max-w-md p-8 bg-slate-900/50 border border-primary rounded-lg shadow-lg"
        >
          <form onSubmit={handleFormSubmit} className=" mb-3">
            <div className="flex-col">
              <label
                className="block text-color-text-primary text-sm font-title mb-2"
                htmlFor="username"
              >
                NOM D'UTILISATEUR
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-3 py-2 bg-bg-primary text-color-text-primary border border-primary rounded focus:outline-none mb-6"
                placeholder="Entrez votre nom d'utilisateur"
                value={login.username}
                onChange={handleInputsChange}
              />
            </div>
            <div className="flex-col">
              <label
                className="block text-color-text-primary text-sm font-title mb-2"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-3 py-2 bg-bg-primary text-color-text-primary border border-primary rounded focus:outline-none mb-4"
                placeholder="Entrez votre email"
                value={login.email}
                onChange={handleInputsChange}
                required
              />
            </div>
            <div className="flex-col">
              <label
                className="block text-color-text-primary text-sm font-title mb-2"
                htmlFor="password"
              >
                MOT DE PASSE
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 bg-bg-primary text-color-text-primary border border-primary rounded focus:outline-none mb-6"
                placeholder="Entrez votre mot de passe"
                value={login.password}
                onChange={handleInputsChange}
              />
            </div>

            <div className="text-sm mb-4" />
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-36 mr-2 px-4 py-2 bg-transparent border-primary border text-color-text-primary font-title rounded hover:bg-slate-900/50 focus:outline-none"
              >
                S'INSCRIRE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
