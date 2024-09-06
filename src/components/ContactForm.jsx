const ContactForm = () => {
  return (
    <div className="w-full min-h-screen flex justify-between items-start gap-32 text-white px-32 pb-20 mt-20">
      {/* Left Div */}
      <div className="w-[36vw] h-[50vw] rounded-lg bg-pink-300 overflow-hidden">
        <img
          src="/contact-form.png"
          alt="Decorative"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Div */}
      <div className="flex-1">
        <h2 className="text-3xl font-semibold text-white mb-6">
          Have a question
          <span role="img" aria-label="wave">
            👋
          </span>
        </h2>
        <p className="text-gray-300 mb-8">
          Clarity gives you the blocks and components you need to create a truly
          professional website.
        </p>

        <form>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="name">
              First & Last Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="i.e. Davon Lean"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="i.e. davon@mail.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full h-48 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Text Here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-1/2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
          >
            Send mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
