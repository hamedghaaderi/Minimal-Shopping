import logo from "../assets/image/logo.jpg";
import minimal from "../assets/image/Minimal Shopping.jpg";
import hero from "../assets/image/hero-section.jpg";

const HomePage = () => {
  return (
    <>
      <header className="bg-back flex justify-between items-center sticky z-10 top-0 p-8">
        <div className="flex justify-between items-center w-21r">
          <img className="object-contain" src={logo} alt="Logo" />
          <img className="object-contain" src={minimal} alt="Minimal" />
        </div>
        <button className="font-outfit text-gray text-base">Cart</button>
      </header>
      <main className="bg-back px-8">
        <section>
          <img className="object-contain rounded-lg w-full" src={hero} alt="Hero" />
        </section>
      </main>
    </>
  );
};

export default HomePage;
