import { NextPage } from 'next';
import { Landing, MyStory } from '../components';

const Home: NextPage = () => {
  return (
    <div>
      <Landing />
      <MyStory />
    </div>
  );
};

export default Home;
