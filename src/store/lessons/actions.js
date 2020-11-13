"use strict";

import cheerio from "cheerio";

export const fetchLessons = req => {
  return new Promise((resolve, reject) => {
    fetch(req.url, req.init)
      .then(res => {
        if (!res.ok) {
          reject(new Error(res.statusText));
        }

        return res.text();
      })
      .then(html => resolve(cheerio.load(html)('#timeTableGroup td [data-content!=""]').length))
  });
};