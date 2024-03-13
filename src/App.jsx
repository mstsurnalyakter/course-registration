import Cart from "./components/Cart";
import Courses from "./components/Courses/Courses";

function App() {

  return (
    <section className="container mx-auto p-4 lg:px-12 xl:px-24">
      <h1 className="text-3xl font-bold text-center mb-10">
        Course Registration
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <Courses />
        <Cart/>
      </div>
    </section>
  );
}

export default App
