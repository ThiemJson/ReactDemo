import "./App.css";
import { useHover } from "./hooks/useHover";
import useLinkNewTab from "./hooks/useLinkNewTab";
function App() {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  return (
    <div ref={contentRef}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ex
        obcaecati dicta nulla enim tempora labore{" "}
        <a
          href="https://www.google.com"
          ref={nodeRef}
          className={` ${
            hovered ? ` text-blue-500 font-bold ` : ` text-black font-normal `
          } `}
        >
          Google.com
        </a>{" "}
        ullam vel nesciunt earum, fugit deserunt saepe minima illo, deleniti
        error eveniet suscipit? Sapiente?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ex
        obcaecati dicta nulla enim tempora labore{" "}
        <a href="https://www.google.com">Google.com</a> ullam vel nesciunt
        earum, fugit deserunt saepe minima illo, deleniti error eveniet
        suscipit? Sapiente?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ex
        obcaecati dicta nulla enim tempora labore{" "}
        <a href="https://www.google.com">Google.com</a> ullam vel nesciunt
        earum, fugit deserunt saepe minima illo, deleniti error eveniet
        suscipit? Sapiente?
      </p>
    </div>
  );
}

export default App;
