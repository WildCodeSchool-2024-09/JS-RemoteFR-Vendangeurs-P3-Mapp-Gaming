import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AdminEditGame = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState({
    title: "",
    price: "",
    release_date: "",
    category: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    description: "",
    is_upcoming: false,
    is_preorder: false,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/videoGames/${id}`)
      .then((response) => setGameData(response.data))
      .catch((error) =>
        console.error("Erreur lors du chargement du jeu:", error),
      );
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setGameData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3310/api/videoGames/${id}`, gameData)
      .catch((error) => console.error("Erreur lors de la mise à jour:", error));
  };

  return (
    <div className="AdminEditGame">
      <h2>Modifier le jeu</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          value={gameData.title}
          className="text-black"
          onChange={handleChange}
          placeholder="Titre du jeu"
          required
        />
        <input
          type="number"
          name="price"
          value={gameData.price}
          className="text-black"
          onChange={handleChange}
          placeholder="Prix"
        />
        <input
          type="date"
          name="release_date"
          value={gameData.release_date}
          className="text-black"
          onChange={handleChange}
        />
        <select
          name="category"
          value={gameData.category}
          className="bg-slate-600 text-slate-200"
          onChange={(e) =>
            setGameData((prevData) => ({
              ...prevData,
              category: e.target.value as
                | "Action-Adventure"
                | "Platformer"
                | "Action-RPG"
                | "FPS"
                | "Racing"
                | "Survival Horror"
                | "Sandbox"
                | "Survival"
                | "Survival-City Builder"
                | "City Builder"
                | "Strategy-RPG"
                | "Simulation"
                | "Sports"
                | "Fighting"
                | "RPG",
            }))
          }
          required
        >
          <option value="Action-Adventure">Action-Adventure</option>
          <option value="Platformer">Platformer</option>
          <option value="Action-RPG">Action-RPG</option>
          <option value="FPS">FPS</option>
          <option value="Racing">Racing</option>
          <option value="Survival Horror">Survival Horror</option>
          <option value="Sandbox">Sandbox</option>
          <option value="Survival">Survival</option>
          <option value="Survival-City Builder">Survival-City Builder</option>
          <option value="City Builder">City Builder</option>
          <option value="Strategy-RPG">Strategy-RPG</option>
          <option value="Simulation">Simulation</option>
          <option value="Sports">Sports</option>
          <option value="RPG">RPG</option>
        </select>

        <input
          type="text"
          name="image1"
          value={gameData.image1}
          className="text-black"
          onChange={handleChange}
          placeholder="URL de l'image"
        />
        <input
          type="text"
          name="image2"
          value={gameData.image2}
          className="text-black"
          onChange={handleChange}
          placeholder="URL de l'image"
        />
        <input
          type="text"
          name="image3"
          value={gameData.image3}
          className="text-black"
          onChange={handleChange}
          placeholder="URL de l'image"
        />
        <input
          type="text"
          name="image4"
          value={gameData.image4}
          className="text-black"
          onChange={handleChange}
          placeholder="URL de l'image"
        />
        <input
          type="text"
          name="image5"
          value={gameData.image5}
          className="text-black"
          onChange={handleChange}
          placeholder="URL de l'image"
        />
        <textarea
          name="description"
          value={gameData.description}
          className="text-black"
          onChange={handleChange}
          placeholder="Description"
        />
        <div className="flex gap-10">
          <button type="submit">Enregistrer</button>
          <Link to="/admin/tous-les-jeux">Retour</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminEditGame;
