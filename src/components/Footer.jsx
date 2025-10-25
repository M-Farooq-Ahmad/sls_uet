export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="font-semibold">SLS UET Lahore, PAKISTAN</p>
        <p className="mt-1">Tel: +92 314 1688 402 | Mail: sls.uet.lahore@gmail.com</p>
        <div className="flex justify-center space-x-4 mt-4 text-xl">
          <a href="#" className="hover:text-cyan-400"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="hover:text-cyan-400"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-cyan-400"><i className="fab fa-instagram"></i></a>
        </div>
        <p className="text-gray-400 mt-4">@2025 Serve & Lead Society.</p>
      </div>
    </footer>
  );
}
