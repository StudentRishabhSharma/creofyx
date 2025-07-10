function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container mx-auto text-center border-t border-gray-700 pt-5">
        <p className="text-lg font-source">
          &copy; {new Date().getFullYear()} Creofyx - Design by Rishabh
        </p>
      </div>
    </footer>
  );
}

export default Footer;
