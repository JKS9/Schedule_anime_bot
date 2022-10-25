import {htag} from '../constant/htag';

const FormatContent = async (data: any) => {
  const random = Math.floor(Math.random() * 500);

  let tweet: string =
    random +
    ' - ' +
    data.day +
    ' - ' +
    data.elementTime +
    '\n\n' +
    data.animeTitle +
    '\n\n' +
    data.elementEpisode +
    '\n\n' +
    htag;

  return tweet;
};

export default FormatContent;
