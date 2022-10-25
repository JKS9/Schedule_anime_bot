import rwClient_BOT_ANIME from '../config/twitterClient';

const TweetApi = async (tweet: string) => {
  try {
    await rwClient_BOT_ANIME.v2.tweet(tweet);

    console.log('BOT ANIME || tweet send :' + new Date());
  } catch (e) {
    console.error(e);
  }
};

export default TweetApi;
