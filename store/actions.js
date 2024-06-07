export const SET_NEWS = 'SET_NEWS';

export const setNews = (news, feedUrl) => ({
  type: SET_NEWS,
  payload: { news, feedUrl },
});

export const fetchNews = (feedUrl) => {
  return async dispatch => {
    try {
      const response = await fetch(feedUrl);
      const responseText = await response.text();
      const parser = new DOMParser();
      const rss = parser.parseFromString(responseText, 'application/xml');
      const items = Array.from(rss.querySelectorAll('row')).map(item => ({
        title: item.querySelector('title').textContent,
        link: item.querySelector('link').textContent,
        description: item.querySelector('description').textContent,
        pubDate: item.querySelector('pubdate').textContent,
      }));
      dispatch(setNews(items, feedUrl));
    } catch (error) {
      console.error(error);
    }
  };
};
