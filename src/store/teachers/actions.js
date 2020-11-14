"use strict";

import cheerio from "cheerio";

import { createRequest, changeTeacherID } from '../URL/actions';
import { fetchLessons } from '../lessons/actions';

export const TEACHERS_HAS_ERRORED = "TEACHERS_HAS_ERRORED";
export const TEACHERS_IS_LOADING = "TEACHERS_IS_LOADING";
export const TEACHERS_TABLE_CREATED = "TEACHERS_TABLE_CREATED";
// export const TEACHERS_CHANGED_LESSONS = 'TEACHERS_CHANGED_LESSONS';

const hasErrored = hasErrored => ({
  type: TEACHERS_HAS_ERRORED,
  hasErrored
});

const isLoading = isLoading => ({
  type: TEACHERS_IS_LOADING,
  isLoading
});

const teachersTableCreated = teachersForView => ({
  type: TEACHERS_TABLE_CREATED,
  teachersForView
});

// Менять lesson только в текущей записи - отдельного свойства (поля) lessons нет
// const teachersChangeLessons = lessons => ({
//   type: TEACHERS_CHANGED_LESSONS,
//   lessons
// });

// export const fetchTeachers = req => {
export const fetchTeachers = URL => {
  return dispatch => {
    dispatch(isLoading(true));

    // fetch(req)
    fetch(createRequest(URL, 'GET'))
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        dispatch(isLoading(false));

        return res.text();
      })
      .then(html => {
        // console.log('actons: ' + html);
        // const teachersForView = Array.from(cheerio.load(html)("#TimeTableForm_teacher option"), teacher => ({
        //   ID: teacher.attribs.value,      // Код преподавателя
        //   name: teacher.children[0].data, // ФИО, должность
        //   coeffRate: 1,                   // Коэф. ставки
        // })
        // ).slice(1);                       // Без 1-й строки-пустышки
        console.log('actons: ' + cheerio.load(html));
        const teachersForView = Array.from(cheerio.load(html)("#timetableform-teacherid option"), teacher => ({
          ID: teacher.attribs.value,      // Код преподавателя
          name: teacher.children[0].data, // ФИО, должность
          coeffRate: 1,                   // Коэф. ставки
        })
        ).slice(1);                       // Без 1-й строки-пустышки

        // Добавить кол-во пар преподавателей кафедры
        Promise.all(teachersForView.map(teacher => {
          URL.params[2].value = teacher.ID; // Не есть хороше - нужно в action
          return fetchLessons(createRequest(URL, 'POST'));
        }))
          .then(lessons => {
            lessons.forEach((lesson, index) => teachersForView[index].lessons = lesson); // Не есть хороше - нужно в action
            // Сохранить в store список преподавателей в виде таблицы
            dispatch(teachersTableCreated(teachersForView));
          });

      })
      .catch(() => dispatch(hasErrored(true)));
  };
};

// Вынести в ../lessons/actions.js
// const fetchLessons = req => {
//   return new Promise((resolve, reject) => {
//     fetch(req.url, req.init)
//       .then(res => {
//         if (!res.ok) {
//           reject(new Error(res.statusText));
//         }

//         return res.text();
//       })
//       .then(html => resolve(cheerio.load(html)('#timeTableGroup td [data-content!=""]').length))
//   });
// };