import axios from 'axios';
import * as cheerio from 'cheerio';

const url = 'https://animeschedule.net/';

const scrap = async (day: string) => {
  try {
    // Fetch HTML of the page we want to scrape
    const {data} = await axios.get(url);

    const $ = cheerio.load(data);

    const listItems = $(
      '.' + day + ' > .timetable-column-show[mediatype="tv"]'
    );

    let datas: any[] = [];

    listItems.each((idx, el) => {
      const animeTitle = $(el).children('.show-link').children('h2').text();
      const animeEpisodes = $(el)
        .children('.time-bar')
        .children('.show-episode')
        .text();
      const animeTime = $(el).children('.time-bar').children('time').text();

      const elementEpisode = animeEpisodes.replace('\n', ' ').trim();
      const elementTime = animeTime.replace('\n', ' ').trim();

      datas.push({day, animeTitle, elementEpisode, elementTime});
    });

    const count: number = datas.length;

    return {datas, count};
  } catch (e) {
    console.log('error', e);
  }
};

export default scrap;
