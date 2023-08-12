import { Link } from 'react-router-dom';

const Menu = ({t}) => {
    const data = [
        {
          id: "1",
          title: "Lorem ipsum, dolor sit amet consectet odio ",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sint dicta alias quos nihil ea nostrum cum, molestias amet iste reiciendis sit. Distinctio cumque qui maiores culpa ipsa consequatur veniam consectetur eos exercitationem deserunt ab inventore alias debitis amet temporibus quo odio aspernatur voluptatibus quaerat, corrupti minus voluptatum libero dolore?",
          img: "https://i.pinimg.com/564x/d1/52/34/d15234eb83839973da3982aa0dcea165.jpg",
        },
        {
          id: "2",
          title: "Lorem ipsum, dolor sit amet consectet odio ",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sint dicta alias quos nihil ea nostrum cum, molestias amet iste reiciendis sit. Distinctio cumque qui maiores culpa ipsa consequatur veniam consectetur eos exercitationem deserunt ab inventore alias debitis amet temporibus quo odio aspernatur voluptatibus quaerat, corrupti minus voluptatum libero dolore?",
          img: "https://res-4.cloudinary.com/sharecare/image/upload/c_fill,dpr_1,f_auto,g_faces:center,h_340,w_600/v1512066293/slideshows/colorful-fruits-vegetables-01",
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
    <div>
        <h1 className='text-xl font-bold'>Other posts you may like</h1>

            <div className={`${t ? "" : "flex gap-2 overflow-x-scroll w-full"}`}>
            {
              data.slice(0,4).map(({id, title,img})=>{
                return(
                    <div className='flex flex-col gap-2 mt-4' key={id}>
                        <img className='w-full h-52 object-cover' src={img} alt="loading" />
                        <h2 className='font-semibold text-xl'>{title}</h2>
                        <Link to={`/post/${id}`}>
                        <button className='border-2 px-4 py-1'>Read More</button>
                        </Link>
                    </div>

                )
            })
            }

          </div>  

    </div>
  )
}

export default Menu