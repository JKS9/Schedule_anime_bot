import TweetApi from './tweet';
import FormatContent from '../helpers/formatContent';

const worker = async (data: any, count: any) => {
  let intervalId: any = null;
  let iteration = 0;

  const job = async () => {
    if (iteration < count) {
      const tweet: string = await FormatContent(data[iteration]);

      await TweetApi(tweet);

      iteration = iteration + 1;
    } else {
      clearInterval(intervalId);
    }
  };

  intervalId = setInterval(job, 3000);
};

export default worker;
