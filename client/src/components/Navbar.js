const Navbar = () => {
    return ( 
        <div className="bg-sky-700 dark:bg-gray-800 shadow-lg fixed w-full z-20 top-0 h-20 flex justify-end items-center ">
            <button className="bg-stone-900 hover:bg-stone-700 text-white font-semibold text-xl py-2 px-4  shadow mr-8 rounded-2xl">Create Post</button>
        </div>
     );
}
 
export default Navbar;