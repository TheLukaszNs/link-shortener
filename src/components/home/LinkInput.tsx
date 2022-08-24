export const LinkInput = () => {
  return (
    <div className="w-full flex  items-center gap-4">
      <div className="flex flex-1 flex-col md:flex-row border-2 border-teal-400 transition-all rounded-md shadow-md focus:shadow-xl overflow-hidden ">
        <input className="flex-1 p-4 duration-150 outline-none bg-transparent dark:text-white" />
        <button className="py-4 px-8 text-teal-400 border-t-2 md:border-l-2 md:border-t-0 border-teal-400 font-bold hover:bg-teal-400 hover:text-white transition-all duration-150">
          create
        </button>
      </div>
    </div>
  );
};
