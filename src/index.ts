import {CronJob} from 'cron';

import TweetControllerBotAnime from './Bot_Anime/controller/tweetControllerBotAnime';

/*import TweetControllerBotNasa from './Bot_Nasa/controller/tweetControllerBotNasa';*/

import {hour6, hour4, minute, second} from './config/timeCron';

const cron = async () => {
  /**
   * Bot
   * Anime
   * Schedule
   * Twitter
   */
  const BotAnimeSchedule: CronJob = new CronJob(minute, async () => {
    await TweetControllerBotAnime();
  });

  BotAnimeSchedule.start();

  /**
   * Bot
   * Nasa
   * Picture
   * Twitter
   */
  /*const BotNasaPicture: CronJob = new CronJob(second, async () => {
    await TweetControllerBotNasa();
  });

  BotNasaPicture.start();*/
};

const initStart = async () => {
  await cron();
};

initStart();
