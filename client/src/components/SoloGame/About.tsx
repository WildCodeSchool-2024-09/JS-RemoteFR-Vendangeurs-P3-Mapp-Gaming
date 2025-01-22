import Price from "./Price";
import SupportsMenu from "./SupportsMenu";

export default function About() {
  return (
    <div>
      <h2 className="mt-8 mb-4">À PROPOS</h2>
      <div>
        <div className="grid grid-cols-3 gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
            quibusdam cumque nostrum veniam voluptates assumenda minus?
            Accusamus accusantium reprehenderit voluptatibus aut veniam. Fuga
            voluptatibus vel suscipit doloribus odit sequi! Nulla unde eligendi
            laboriosam nostrum delectus hic nesciunt, asperiores enim dolore
            fuga recusandae quo explicabo animi, deserunt dolorum, velit
            obcaecati pariatur quisquam eos quod atque consequatur. Cum quod
            obcaecati maiores. Dolor aliquam illo quia cumque sit error dolorem
            molestias nulla, nemo velit laboriosam perferendis non quis nisi
            delectus sequi nobis a id repudiandae beatae voluptatibus maiores
            eos. Voluptate, non accusamus? Cum eaque nisi, temporibus facilis,
            nemo hic officiis placeat sunt quae rem exercitationem odio quo! Est
            repellendus quia obcaecati architecto consequuntur ipsa enim cumque.
            Accusamus omnis rerum delectus numquam expedita?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
            quibusdam cumque nostrum veniam voluptates assumenda minus?
            Accusamus accusantium reprehenderit voluptatibus aut veniam. Fuga
            voluptatibus vel suscipit doloribus odit sequi! Nulla unde eligendi
            laboriosam nostrum delectus hic nesciunt, asperiores enim dolore
            fuga recusandae quo explicabo animi, deserunt dolorum, velit
            obcaecati pariatur quisquam eos quod atque consequatur. Cum quod
            obcaecati maiores. Dolor aliquam illo quia cumque sit error dolorem
            molestias nulla, nemo velit laboriosam perferendis non quis nisi
            delectus sequi nobis a id repudiandae beatae voluptatibus maiores
            eos. Voluptate, non accusamus? Cum eaque nisi, temporibus facilis,
            nemo hic officiis placeat sunt quae rem exercitationem odio quo!
          </p>
          <div className="flex flex-col gap-2 items-center">
            <SupportsMenu />
            <Price />
          </div>
        </div>
      </div>
    </div>
  );
}
