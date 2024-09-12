import "./App.css";
import Iframe from "react-iframe";
function App() {
  return (
    <>
      <div className="frame h-screen w-screen">
        <div className="flex  relative mb-[1em] w-full h-full">
          <Iframe
            url="https://my.spline.design/untitled-ca6514341383ae3018bef86408dfaa28/"
            id=""
            className="w-full"
            display="block"
            position="relative"
          />
          <div className="border bg-slate-300 z-50 absolute w-full h-[70px] bottom-0  left-0"></div>
        </div>
      </div>
    </>
  );
}

export default App;
