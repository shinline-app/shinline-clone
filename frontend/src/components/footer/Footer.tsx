function Footer() {
  return (
    <footer className="max-h-14 flex-auto bg-gray-800 text-center text-white">
      <div className="p-4 text-center text-sm">
        © {new Date().getFullYear()} Copyright:
        <a
          className="text-whitehite ml-1"
          target="_blank"
          href="https://www.linkedin.com/in/jahongir-bektemirov-82621a246/"
        >
          React Tire
        </a>
      </div>
    </footer>
  );
}

export default Footer;
