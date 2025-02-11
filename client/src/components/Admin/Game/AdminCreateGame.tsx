import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminCreateGame: React.FC = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [release_date, setRelease_date] = useState("");
  const [category, setCategory] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [description, setDescription] = useState("");
  const [is_upcoming, setIs_upcoming] = useState(false);
  const [is_preorder, setIs_preorder] = useState(false);

  const addGame = async () => {
    if (!title || !price || !release_date || !category || !description) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const newGame = {
      title,
      price: Number(price),
      release_date,
      category,
      image1,
      image2,
      image3,
      image4,
      image5,
      description,
      is_upcoming,
      is_preorder,
    };

    try {
      const response = await axios.post(
        "http://localhost:3310/api/videoGames",
        newGame,
      );

      // Réinitialisation du formulaire après l'ajout
      console.info(response.data);
      setTitle("");
      setPrice("");
      setRelease_date("");
      setCategory("");
      setImage1("");
      setImage2("");
      setImage3("");
      setImage4("");
      setImage5("");
      setDescription("");
      setIs_upcoming(false);
      setIs_preorder(false);
    } catch (error) {
      console.error("erreur lors de la creation du jeu!", error);
    }
  };

  return (
    <div className="flex flex-col gap-10 relative z-10 bg-slate-900/50 border border-primary p-9 rounded-lg mb-6">
      <div className="flex justify-center">
        <h1>Créer un jeu</h1>
      </div>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          addGame(); // Appeler la fonction addGame lors de la soumission du formulaire
        }}
      >
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          value={title}
          className="text-black p-2 rounded-lg"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="price">Prix :</label>
        <input
          type="number"
          id="price"
          value={price}
          className="text-black p-2 rounded-lg"
          onChange={(e) =>
            setPrice(e.target.value ? Number.parseFloat(e.target.value) : "")
          }
          min="0"
          step="0.01"
          required
        />
        <label htmlFor="release_date">Date de sortie :</label>
        <input
          type="date"
          id="release_date"
          value={release_date}
          className="text-black p-2 rounded-lg"
          onChange={(e) => setRelease_date(e.target.value)}
        />
        <label htmlFor="category">Categorie :</label>
        <select
          id="category"
          value={category}
          className="bg-slate-600 text-slate-200 p-2 rounded-lg"
          onChange={(e) =>
            setCategory(
              e.target.value as
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
            )
          }
        >
          <option value="">Selectionner la categorie</option>
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
          <option value="Fighting">Fighting</option>
          <option value="RPG">RPG</option>
        </select>
        <label htmlFor="image1">Image 1 :</label>
        <input
          type="text"
          id="image1"
          value={image1}
          className="text-black p-2 rounded-lg"
          onChange={(e) => setImage1(e.target.value)}
          placeholder="Entrer l'url de l'image"
        />
        <label htmlFor="image2">Image 2 :</label>
        <input
          type="url"
          id="image2"
          value={image2}
          className="text-black p-2 rounded-lg"
          onChange={(e) => setImage2(e.target.value)}
          placeholder="Entrer l'url de l'image"
        />
        <label htmlFor="image3">Image 3 :</label>
        <input
          type="url"
          id="image3"
          value={image3}
          className="text-black p-2 rounded-lg"
          onChange={(e) => setImage3(e.target.value)}
          placeholder="Entrer l'url de l'image"
        />
        <label htmlFor="image4">Image 4 :</label>
        <input
          type="url"
          id="image4"
          value={image4}
          className="text-black p-2 rounded-lg"
          onChange={(e) => setImage4(e.target.value)}
          placeholder="Entrer l'url de l'image"
        />
        <label htmlFor="image5">Image 5 :</label>
        <input
          type="url"
          id="image5"
          value={image5}
          className="text-black p-2 rounded-lg"
          onChange={(e) => setImage5(e.target.value)}
          placeholder="Entrer l'url de l'image"
        />
        <label htmlFor="description">Description :</label>
        <input
          type="text"
          id="description"
          value={description}
          className="text-black p-2 rounded-lg"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="is_upcoming">À venir :</label>
        <input
          type="checkbox"
          id="is_upcoming"
          checked={is_upcoming}
          onChange={(e) => setIs_upcoming(e.target.checked)}
        />
        <label htmlFor="is_preorder">Précommande :</label>
        <input
          type="checkbox"
          id="is_preorder"
          checked={is_preorder}
          onChange={(e) => setIs_preorder(e.target.checked)}
        />
        <div className="flex justify-center gap-10">
          <button type="submit">Créer</button>
          <Link to="/admin/tous-les-jeux">Retour</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateGame;
