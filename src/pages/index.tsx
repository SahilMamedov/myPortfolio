import ParticlesContainer from "components/ParticlesContainer";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function Home() {
  // const [text] = useTypewriter({
  //   words: ["Front end Developer", "Full Stack Developer"],
  //   loop: true,
  //   typeSpeed: 40,
  //   deleteSpeed: 30,
  //   delaySpeed: 2000,
  // });
  return (
    <main>
      <div>
        Home pages
        {/* <span>{text}</span>
        <Cursor cursorBlinking={true} cursorColor="red" /> */}
      </div>
      <ParticlesContainer />
    </main>
  );
}
