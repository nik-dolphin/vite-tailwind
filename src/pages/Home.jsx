import Accordion from "../components/Accordion";

const Home = () => {
  const accordionItems = [
    { title: "Accordion Item 1", content: "Content for item 1" },
    { title: "Accordion Item 2", content: "Content for item 2" },
    { title: "Accordion Item 3", content: "Content for item 3" },
  ];
  return (
    <div>
      <div className="p-4">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
};

export default Home;
