import {
  FiChevronsDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from 'react-icons/fi';

export const Landing = () => {
  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto] py-8 md:py-16 px-6 lg:px-0">
      <div className="flex flex-col justify-center">
        <h3 className="text-zinc-400 text-lg md:text-xl font-semibold">
          Hi 👋, I&apos;m Ahmed Elsakaan
        </h3>
        <h1 className="text-2xl md:text-4xl font-bold py-4 md:py-6">
          I build extraordinary user interfaces with web technologies.
        </h1>
        <p className="max-w-[90ch] text-sm md:text-base">
          I&apos;m a <strong>Frontend engineer</strong> with an{' '}
          <strong>eye for design</strong>, I specialise in building{' '}
          <strong>design systems and applications in React</strong>,{' '}
          <strong>WYSIWYG editors</strong> and{' '}
          <strong>large monorepo management</strong>. Currently a core
          maintainer of{' '}
          <a href="https://trpc.io" target="_blank" rel="noopener noreferrer">
            tRPC
          </a>{' '}
          and working on{' '}
          <a
            href="https://noodle.run"
            target="_blank"
            rel="noopener noreferrer"
          >
            noodle
          </a>
          .
        </p>
        <p className="pt-3 text-sm md:text-base">
          Read my latest blog post:{' '}
          <a
            href="https://medium.com/@ixahmedxi/building-typesafe-apis-with-trpc-c2670285ff46"
            target="_blank"
            rel="noopener noreferrer"
          >
            Building typesafe APIs with tRPC.
          </a>
        </p>
        <p className="pt-6 text-sm md:text-base">Connect with me!</p>
        <div className="text-xl md:text-2xl pt-3 flex gap-6">
          <a
            href="https://github.com/ixahmedxi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            <FiGithub />
          </a>
          <a
            href="https://twitter.com/ixahmedxii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            <FiTwitter />
          </a>
          <a
            href="mailto:ahmedtarek3214@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:ahmedtarek3214@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors"
          >
            <FiMail />
          </a>
        </div>
      </div>
      <div className="flex items-center flex-col animate-bounce">
        <p className="text-sm">Scroll down</p>
        <p className="text-2xl pt-1">
          <FiChevronsDown />
        </p>
      </div>
    </div>
  );
};
