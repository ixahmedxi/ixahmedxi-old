import { NextPage } from 'next';
import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen grid">
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-lg md:text-2xl text-zinc-200">
          Hi!👋, I&apos;m Ahmed Elsakaan
        </h1>
        <h3 className="text-2xl md:text-4xl font-bold py-2">
          Creating extraordinary user experiences with web technologies.
        </h3>
        <p className="text-sm md:text-base text-zinc-400 max-w-[80ch]">
          I&apos;m a Frontend Engineer based in London, United Kingdom and from
          Alexandria, Egypt. <br /> I&apos;m currently pursuing a BSc Computer
          Science degree at Royal Holloway University of London.
        </p>

        <p className="pt-3 text-sm md:text-base">
          <span className="text-zinc-400">Read my latest blog post! </span>
          <a
            href="https://medium.com/p/c2670285ff46"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500 underline font-semibold"
          >
            Building Typesafe APIs with tRPC
          </a>
        </p>
        <ul className="text-lg md:text-2xl pt-6 text-zinc-400 flex gap-4 md:gap-6">
          <li>
            <a
              className="hover:text-zinc-200 transition-colors"
              href="https://github.com/ixahmedxi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              className="hover:text-zinc-200 transition-colors"
              href="https://twitter.com/ixahmedxii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </a>
          </li>
          <li>
            <a
              className="hover:text-zinc-200 transition-colors"
              href="mailto:ahmedtarek3214@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
