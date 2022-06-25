import Image from 'next/image';

export const MyStory = () => {
  return (
    <div className="min-h-screen py-16 flex flex-col md:flex-row items-stretch md:items-center justify-center md:justify-between px-6 lg:px-0 gap-6">
      <div className="flex-[3]">
        <h2 className="text-2xl md:text-3xl font-bold">My story</h2>
        <p className="pt-4 md:pt-6">
          I was born in a small city in Egypt called Al-Mansoura in 2000, from a
          young age I was always fascinated with technology, tweaking and
          playing with them.
          <br />
          <br /> On a late night when I was 14, I was simply browsing the
          internet when I got the curiousity about how websites are made and
          that&apos;s the night that decided what my career will be.
          <br />
          <br /> I started developing my skills as time progressed, getting into
          JavaScript, React and everything to do with the development flow of
          web applications.
          <br />
          <br /> I also developed skills on the backend with GraphQL and REST,
          but I hated how ugly my projects looked and that’s when I also started
          studying design.
          <br />
          <br /> Over the years, I grew a passion for building WYSIWYG editors,
          design systems and monorepos, mostly in React projects. I became very
          skilled in those areas and I keep improving every day!
        </p>
      </div>
      <div className="flex-1">
        <div className="max-w-[200px] mx-auto">
          <Image
            src="/baby-me.png"
            alt="Baby Me"
            layout="responsive"
            width={300}
            height={366}
          />
        </div>
        <p className="text-center pt-1 text-sm text-zinc-500">
          yes that&apos;s me :)
        </p>
      </div>
    </div>
  );
};
