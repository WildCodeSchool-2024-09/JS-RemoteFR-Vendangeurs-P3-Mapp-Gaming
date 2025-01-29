import Copyright from "../assets/Icons/Copyright.svg";

export default function Footer() {
  return (
    <div className="bg-background text-primary text-xs flex justify-center items-center gap-2 p-4">
      <img src={Copyright} alt="" />
      <span className="font-text">Mapp Gaming 2024</span>
    </div>
  );
}
