import cheerio from "cheerio";

export const LESSONS_HAS_ERRORED = "LESSONS_HAS_ERRORED";
export const LESSONS_IS_LOADING = "LESSONS_IS_LOADING";

export const fetchLessons = req => {
  return new Promise((resolve, reject) => {
    fetch(req.url, req.init)
      .then(res => {
        if (!res.ok) {
          reject(new Error(res.statusText));
        }

        return res.text();
      })
      .then(html => resolve(cheerio.load(html)('#timeTable td [data-content!=""]').length))
    // .then(html => resolve(cheerio.load(html)('#timeTableGroup td [data-content!=""]').length))
  });
};