import TwitterApi, {TwitterApiReadWrite} from 'twitter-api-v2';

import 'dotenv/config';

const client: TwitterApi = new TwitterApi({
  appKey: process.env.BOT_ANIME_TWITTER_APP_KEY as string,
  appSecret: process.env.BOT_ANIME_TWITTER_APP_SECRET as string,
  accessToken: process.env.BOT_ANIME_TWITTER_ACCESS_TOKEN as string,
  accessSecret: process.env.BOT_ANIME_TWITTER_ACCESS_SECRET as string,
});

const rwClient_BOT_ANIME: TwitterApiReadWrite = client.readWrite;

export default rwClient_BOT_ANIME;
