import { Link } from "react-router-dom";

const Home = () => {
   const data = [
    {
      id: "1",
      title: "Lorem ipsum, dolor sit amet consectet odio ",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sint dicta alias quos nihil ea nostrum cum, molestias amet iste reiciendis sit. Distinctio cumque qui maiores culpa ipsa consequatur veniam consectetur eos exercitationem deserunt ab inventore alias debitis amet temporibus quo odio aspernatur voluptatibus quaerat, corrupti minus voluptatum libero dolore?",
      img: "https://img.freepik.com/free-photo/lovely-flowers-concept-with-notebook-coffee-cup_23-2148007007.jpg?w=1380&t=st=1685445476~exp=1685446076~hmac=000b7b4bb96993fc4820acf68373a2e72d35af877c31af4623cf93e20d8df28a",
    },
    {
      id: "2",
      title: "Lorem ipsum, dolor sit amet consectet odio ",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sint dicta alias quos nihil ea nostrum cum, molestias amet iste reiciendis sit. Distinctio cumque qui maiores culpa ipsa consequatur veniam consectetur eos exercitationem deserunt ab inventore alias debitis amet temporibus quo odio aspernatur voluptatibus quaerat, corrupti minus voluptatum libero dolore?",
      img: "https://img.freepik.com/free-photo/book-decorative-flowers-blue-wooden-surface_23-2147600552.jpg?t=st=1685445301~exp=1685445901~hmac=6855932b405c5e1743d709f548f6bf33800e5caffb537fd8d494ec6551c8840c",
    },
    {
      id: "3",
      title: "Lorem ipsum, dolor sit amet consectet odio ",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sint dicta alias quos nihil ea nostrum cum, molestias amet iste reiciendis sit. Distinctio cumque qui maiores culpa ipsa consequatur veniam consectetur eos exercitationem deserunt ab inventore alias debitis amet temporibus quo odio aspernatur voluptatibus quaerat, corrupti minus voluptatum libero dolore?",
      img: "https://webstockreview.net/images/lemon-clipart-half-lemon-1.png",
    },
    {
      id: "4",
      title: "Lorem ipsum, dolor sit amet consectet odio ",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sint dicta alias quos nihil ea nostrum cum, molestias amet iste reiciendis sit. Distinctio cumque qui maiores culpa ipsa consequatur veniam consectetur eos exercitationem deserunt ab inventore alias debitis amet temporibus quo odio aspernatur voluptatibus quaerat, corrupti minus voluptatum libero dolore?",
      img: "https://static-ai.asianetnews.com/images/01e7qghw7kskx18n6q2nckx9b0/lemons-tree-jpg.jpg",
    },
    {
      id: "5",
      title: "Lorem ipsum, dolor sit amet consectet odio ",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sint dicta alias quos nihil ea nostrum cum, molestias amet iste reiciendis sit. Distinctio cumque qui maiores culpa ipsa consequatur veniam consectetur eos exercitationem deserunt ab inventore alias debitis amet temporibus quo odio aspernatur voluptatibus quaerat, corrupti minus voluptatum libero dolore?",
      img: "https://static-ai.asianetnews.com/images/01ehrdd50rh5b60t5xmy93m445/new-project--14--jpg.jpg",
    },
    {
      id: "6",
      title: "Lorem ipsum, dolor sit amet consectet odio ",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sint dicta alias quos nihil ea nostrum cum, molestias amet iste reiciendis sit. Distinctio cumque qui maiores culpa ipsa consequatur veniam consectetur eos exercitationem deserunt ab inventore alias debitis amet temporibus quo odio aspernatur voluptatibus quaerat, corrupti minus voluptatum libero dolore?",
      img: "https://th.bing.com/th/id/OIP.qGqZz60noF1Yz69V_qyCQgHaGt?pid=ImgDet&rs=1",
    },
  ];
  return (
    <div className="flex flex-col gap-36 mt-12">
      {data.map(({ id, title, desc, img }) => {
        return (
          <div
            className="md:flex-row flex flex-col gap-8 md:gap-24 justify-center md:odd:flex-row-reverse even:ml-[15px] "
            key={id}
          >
            <div className="max-h-[400px] md:flex-[1] object-cover ">
              <img className="max-h-[400px]" src={img} alt="loading" />
            </div>
            <div className="md:flex-[2]">
              <Link to={`/post/${id}`}>
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="mt-2 text-justify">{desc}</p>
                <button className="border-[1px] border-teal text-teal hover:bg-teal hover:text-black px-5 py-2 my-2">Read More</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
