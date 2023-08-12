// import { RiEdit2Fill } from "react-icons/hi2";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div>
      <div className="flex gap-12 items-start ">
        <div className="flex flex-col gap-5 md:flex-[5]">
          <img
            className="w-full max-h-[600px] object-cover"
            src="https://th.bing.com/th/id/OIP.V3AxPZxiOBrpHWNms6RsgAHaJ_?pid=ImgDet&rs=1"
            alt="loading"
          />

          <div className="text-lg flex items-center gap-3">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src="https://c1.staticflickr.com/3/2141/2483942249_987b204bd3_z.jpg?zz=1"
              alt="loading"
            />
            <div>
              <span className="font-bold">Jhon Abraham</span>
              <p className="text-sm">Posted 5 days ago</p>
            </div>
            <div className="flex text-white gap-2">
              <Link to="/write">
                <AiOutlineEdit className="bg-lightGreen w-8 h-8 rounded-full p-1 cursor-pointer" />
              </Link>
              <AiOutlineDelete className="bg-red w-8 h-8 rounded-full  p-1 cursor-pointer" />
            </div>
          </div>

          <h1 className="text-4xl font-bold mt-4">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="md:text-xl text-lg text-justify mt-1">
            Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Assumenda, labore, facilis possimus{" "}
            <br />
            <br /> accusamus ullam fugit eligendi vero aspernatur explicabo
            nesciunt amet quis iusto repellendus quo dolore! Labore modi aut,
            non hic tempora obcaecati perspiciatis iure, quibusdam dolorem harum
            consectetur laboriosam aliquam? Totam aliquid beatae dolor atque,
            officiis incidunt voluptatibus nulla consequuntur repellat
            necessitatibus minus impedit placeat dolorem sint porro vero
            corrupti labore optio omnis dignissimos nesciunt? Officiis mollitia
            quo rerum <br /> <br /> dolore non dolor excepturi ipsum omnis
            nostrum, magni in aliquid, esse porro dolores, pariatur
            exercitationem tempore tempora iure. Nam inventore quibusdam quae
            odio reprehenderit alias quo, fugiat adipisci quis velit.
            adipisicing elit. Quod neque provident et animi atque, cumque
            dolore. ,<br /> Velit culpa voluptatibus reprehenderit tempora
            deserunt itaque praesentium, placeat corrupti quidem cumque
            blanditiis impedit? Labore soluta numquam excepturi commodi maxime
            consectetur error repellat natus veniam laudantium, voluptatum
            corrupti hic aut. <br /> <br /> Dicta, facilis ea, esse excepturi
            temporibus, blanditiis fuga rerum quaerat veniam obcaecati deleniti
            voluptates aut dolore sed? Quae, voluptate quasi. Magni dolorem
            cumque porro.
          </p>
        </div>
        <div className="hidden md:block md:flex-[2]">
          <Menu t={true} />
        </div>
      </div>
      <div className="w-full md:hidden mt-4">
      <Menu t={false} />
      </div>
    </div>
  );
};

export default Single;
