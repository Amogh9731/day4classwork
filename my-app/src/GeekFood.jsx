import logo from './assets/logo.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { GiVikingChurch } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { PiHamburgerBold } from "react-icons/pi";
function GeekFood(){
    return (
        <div className="container ">
           <header className="flex justify-around items-center bg-gray-900 px-10 h-18 sticky top-0">
            <div className="left flex gap-8">
                <img src={logo} alt="" className="cursor-pointer"/>
                <h1 className="cursor-pointer text-white font-bold text-3xl  ">GeekFoods</h1>
            </div>
           
            
            <ul className="max-lg:invisible cursor-pointer  flex gap-8 text-lg">
            
                <li className="text-blue-700">Home</li>
                <li className="text-white ">Quote</li>
                <li className="text-white ">Resturants</li>
                <li className="text-white ">Foods</li>
                <li className="text-white ">Contact</li>
            </ul>

            
            
            <span className="hidden md:inline lg:hidden text-2xl text-blue-700 hover:text-blue-900 transition-all duration-200">
               <GiHamburgerMenu />
            </span>

            <button className="max-lg:invisible cursor-pointer text-white bg-blue-700 h-10 px-5 border-none rounded-lg hover:bg-blue-500">Get Started</button>
          
           </header>

        <div className="quotes flex flex-col gap-5 my-10 px-10 text-lg">
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-3xl text-center">It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.</h1>
                <p className="text-center text-gray-500">Adam Scott</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-3xl  text-center">Eat breakfast like a king, lunch like a prince, and dinner like a pauper.</h1>
                <p className="text-center text-gray-500">Adelle Davis</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-3xl text-center">We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.</h1>
                <p className="text-center text-gray-500">Adelle Davis</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-3xl text-center">Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.</h1>
                <p className="text-center text-gray-500">Albert Einstein</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-3xl text-center">Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.</h1>
                <p className="text-center text-gray-500">Alice May Brock</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-3xl  text-center">Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, "Your fatness is an affront to me, so we have the right to treat you as offensively as you appear." Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.</h1>
                <p className="text-center text-gray-500">Anthelme Brillat-Savarin</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-3xl text-center">Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!</h1>
                <p className="text-center text-gray-500">Calvin Trillin</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-3xl  text-center">Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.</h1>
                <p className="text-center text-gray-700">Calvin Trillin</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-4xl text-center">Tell me what you eat, and I will tell you what you are.</h1>
                <p className="text-center text-gray-500">Cyra McFadden</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-boldtext-3xl  text-center">The people who can most successfully lose weight and maintain a healthy life style are foodies. When it comes to healthy eating, people who know how to cook and make ingredients taste good have a distinct advantage over those who can't.</h1>
                <p className="text-center text-gray-500">G. K. Chesterton</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-3xl  text-center">If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.</h1>
                <p className="text-center text-gray-500">J. R. R. Tolkien</p>
            </div>
            <div className="quotes_author cursor-pointer flex flex-col gap-3 bg-gray-900 rounded-[1.5rem] px-8 py-12">
                <h1 className="text-white font-bold text-3xl  text-center">He who comes first, eats first. [Familiar as: First come first served.]</h1>
                <p className="text-center text-gray-500">Geoffrey Neighor</p>
            </div>
        </div>

        <footer className="bg-gray-300 flex flex-col justify-between items-center gap-8 mt-12 px-10 py-14" >
           
            <div className='flex gap-4'> 
            <GiVikingChurch className='text-3xl' />
            <h1 className="text-[#0d9488] text-3xl"> logoipsum</h1>
            </div>
            
            <p className="text-gray-500 text-center text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At reprehenderit maiores quidem maxime, in quia necessitatibus quasi modi</p>
            
            <div className="nav flex gap-4 text-gray-700 ">
                <a href="#">About</a>
                <a href="#">Social</a>
                <a href="#">History</a>
                <a href="#">Projects</a>
                <a href="#">Services</a>
                <a href="#">Blogs</a>
            </div>
            <div className="icon flex gap-8 text-2xl">
                <span><FaFacebook/></span>
                <span classNme=""><FaInstagramSquare /></span>
                <span><FaTwitterSquare /></span>
                <span><FaGithub /></span>
                <span><FaWhatsappSquare /></span>


            </div>
        </footer>
            
      </div>
    );
}

export default GeekFood;