const Main = ({ message, handleMessage, handleClick }) => {
  return (
    <div>
      <div className="flex justify-center p-4">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        ></label>
        <textarea
          id="message"
          rows={9}
          cols={70}
          value={message}
          onChange={handleMessage}
          spellCheck="false"
          className="custom-resize-none block p-2.5 w-full text-sm text-gray-900 
        bg-gray-50 rounded-lg border focus:ring-blue-500 focus:border-blue-500 
        dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
        dark:focus:border-blue-500 outline-none"
          placeholder="Write your notes here..."
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
      dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 mb-2"
          onClick={handleClick}
        >
          POST
        </button>
      </div>
    </div>
  );
};

export default Main;
