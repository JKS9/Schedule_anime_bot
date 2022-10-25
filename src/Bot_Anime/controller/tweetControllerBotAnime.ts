import scrap from '../services/scrap';
import getDayDate from '../helpers/getDayDate';
import worker from '../services/worker';

const TweetControllerBotAnime = async () => {
  const dayDate = await getDayDate(new Date());

  const data = await scrap(dayDate);

  await worker(data?.datas, data?.count);
};

export default TweetControllerBotAnime;
