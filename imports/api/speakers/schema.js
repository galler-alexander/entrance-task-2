import SimpleSchema from 'simpl-schema';

export const speakerSchema = new SimpleSchema({
  id: {
    type: String, //SimpleSchema.Integer,
    unique: true
  }, //143952
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url
  }, //https://events.yandex.ru/lib/people/143952/
  name: {
    type: String,
    unique: true //Однофамильцы - добавить модификатор для уникальности
  }, //Иван Карев
  photoUrl: {
    type: String,
    regEx: SimpleSchema.RegEx.Url
  }, //https://avatars.mds.yandex.net/get-yaevents/204268/71a0f046b6d611e687ef002590c62a5c/big_c
  about: {
    type: String,
    optional: true,
    unique: true
  }, //Окончил факультет ВМК (вычислительной математики и кибернетики) МГУ им. М.В. Ломоносова, занимается веб-программированием с 2007 года. Сначала делал админки для системы фильтрации трафика, затем — интерфейсы онлайн-карт для проекта Космоснимки. В Яндексе начинал с Народа и Я.ру, последние два года занимался главной страницей. В настоящее время специализируется на вопросах производительности: от серверного JS до оптимизации загрузки страницы на клиенте.
  jobCompany: String //Яндекс
});
