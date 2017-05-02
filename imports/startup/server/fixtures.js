// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Halls } from '../../api/halls/halls.js';
import { Links } from '../../api/links/links.js';
import { Schools } from '../../api/schools/schools.js';
import { Speakers } from '../../api/speakers/speakers.js';
import { HallSchedules } from '../../api/hall-schedules/hall-schedules.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date()
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date()
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date()
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date()
      }
    ];

    data.forEach(link => Links.insert(link));
  }

  if (Schools.find().count() === 0) {
    const schoolsData = [
      {
        id: 'frontend',
        name: 'Школа разработки интерфейсов',
        url: 'https://academy.yandex.ru/events/frontend/',
        manAmount: 30
      },
      {
        id: 'mobdev',
        name: 'Школа мобильной разработки',
        url: 'https://academy.yandex.ru/events/mobdev/',
        manAmount: 40
      },
      {
        id: 'design',
        name: 'Школа мобильного дизайна',
        url: 'https://academy.yandex.ru/events/design/',
        manAmount: 50
      },
      {
        id: 'management',
        name: 'Школа менеджмента',
        url: 'https://academy.yandex.ru/events/management/',
        manAmount: 60
      }
    ];

    console.log('Insert schools data.');
    schoolsData.forEach(school => Schools.insert(school));
  }

  // if the halls collection is empty
  if (Halls.find().count() === 0) {
    const hallsData = [
      {
        id: '0',
        name: 'Добрая абракадабра',
        desc: 'Рядом от входа. Это функциональное бизнес-пространство для деловых людей, которое идеально подходит для работы, проведения встреч и организации мероприятий.',
        manCapacity: 40
      },
      {
        id: '1',
        name: 'Поздравь стереотипы',
        desc: 'Вторая справа. Просторный зал с потолками 5.5 метров и панорамными окнами в аптекарский огород.',
        manCapacity: 51
      },
      {
        id: '2',
        name: 'Объятия барбариса',
        desc: 'В аптекарском огороде. Здесь можно отпраздновать детский день рождения, провести романтическое свидание, свадьбу, конференцию, корпоративный банкет, симпозиум или юбилей.',
        manCapacity: 62
      },
      {
        id: '3',
        name: 'Поцелуй северного сияния',
        desc: 'Второй этаж. Прямо по коридору. Зал оснащен всем необходимым оборудованием: проектором, экраном, тремя плазменными панелями, системой звукоусиления ​- Скоростной интернет с возможностью трансляции в любую точку мира.',
        manCapacity: 73
      },
      {
        id: '4',
        name: 'Возьми иллюзии',
        desc: 'Современная площадка для проведения крупномасштабных событий: конференций, симпозиумов, политических дебатов, форумов, семинаров, корпоративных мероприятий.',
        manCapacity: 84
      }
    ];

    console.log('Insert halls data.');
    hallsData.forEach(hall => Halls.insert(hall));
  }
  // if the speakers collection is empty
  if (Speakers.find().count() === 0) {
    const speakersData = [
      {
        id: '10135442',
        url: 'https://events.yandex.ru/lib/people/10135442/',
        name: 'Прокопюк Андрей',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/197753/08c0df918516725d5f8ac452fb8bf610/big_c',
        about: 'В 2008 году впечатлился веб-разработкой из-за скорости воплощения идей и лёгкость их донесения до пользователей. В Яндексе с 2014 года, разрабатывает страницу поисковой выдачи. Любит сложные задачи, интересуется аналитикой, тестированием и новыми способами автоматизировать рутину.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9000962',
        url: 'https://events.yandex.ru/lib/people/9000962/',
        name: 'Дмитрий Душкин',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/95043/0914ac42b6dc11e687ef002590c62a5c/big_c',
        about: 'Кандидат технических наук, научный сотрудник ИПУ РАН с 2008 по 2013. Пришёл в Яндекс.Картинки в 2014 году, отвечал за мобильную версию и рост производительности сервиса. В 2016 перешёл в Yandex Data Factory, где разрабатывает интерфейсы и дизайн веб-приложений для B2B.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9348837',
        url: 'https://events.yandex.ru/lib/people/9348837/',
        name: 'Максим Васильев',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/194464/21e1dae2b6dc11e687ef002590c62a5c/big_c',
        about: 'Во фронтенд-разработке с 2007 года. До 2013-го, когда пришёл в Яндекс, работал технологом в студии Лебедева и других компаниях.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9727130',
        url: 'https://events.yandex.ru/lib/people/9727130/',
        name: 'Андрей Морозов',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/204268/478d8b92b6dc11e687ef002590c62a5c/big_c',
        about: 'Окончил радиофизический факультет Киевского Национального Университета. Автор трёх патентных заявок. В Яндексе с 2014 года, разрабатывает интерфейсы Яндекс.Карт.',
        jobCompany: 'Яндекс'
      },
      {
        id: '143952',
        url: 'https://events.yandex.ru/lib/people/143952/',
        name: 'Иван Карев',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/204268/71a0f046b6d611e687ef002590c62a5c/big_c',
        about: 'Окончил факультет ВМК (вычислительной математики и кибернетики) МГУ им. М.В. Ломоносова, занимается веб-программированием с 2007 года. Сначала делал админки для системы фильтрации трафика, затем — интерфейсы онлайн-карт для проекта Космоснимки. В Яндексе начинал с Народа и Я.ру, последние два года занимался главной страницей. В настоящее время специализируется на вопросах производительности: от серверного JS до оптимизации загрузки страницы на клиенте.',
        jobCompany: 'Яндекс'
      },
      {
        id: '8953757',
        url: 'https://events.yandex.ru/lib/people/8953757/',
        name: 'Антон Тен',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/204268/07bb5f8ab6dc11e687ef002590c62a5c/big_c',
        about: 'В Яндексе с 2014 года. Ведущий дизайнер продукта в сервисах Переводчик, Расписания и Видео.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9513302',
        url: 'https://events.yandex.ru/lib/people/9513302/',
        name: 'Алексей Макаров',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/194464/246b1f3ab6dc11e687ef002590c62a5c/big_c',
        about: 'Выпускник Московского Института Электронной Техники. Android- и Python-разработчик. В команде мобильного Яндекс.Браузера с 2015 года.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9664312',
        url: 'https://events.yandex.ru/lib/people/9664312/',
        name: 'Дарья Старицына',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/194464/441378dcb6dc11e687ef002590c62a5c/big_c',
        about: 'Дизайнер мобильных продуктов. До прихода в компанию занималась интерфейсами мобильных игр. В Яндексе делает Браузер под все платформы. Также успела поработать над экспериментальными голосовыми интерфейсами и мобильной версией главной страницы Яндекса.',
        jobCompany: 'Яндекс'
      },
      {
        id: '8979250',
        url: 'https://events.yandex.ru/lib/people/8979250/',
        name: 'Дмитрий Складнов',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/197753/08c605ecb6dc11e687ef002590c62a5c/big_c',
        about: 'Окончил факультет ИТ Московского Технического Университета. В Яндексе с 2015 года, разрабатывает приложение Auto.ru для Android.',
        jobCompany: 'Яндекс'
      },
      {
        id: '3530628',
        url: 'https://events.yandex.ru/lib/people/3530628/',
        name: 'Сергей Томилов',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/194464/9d003c48b6da11e687ef002590c62a5c/big_c',
        about: 'Серёжа: Профессионально занимается дизайном с 2009 года. В 2010 году переключился на работу исключительно над интерфейсами, по большей части мобильными. В Яндекс пришёл в 2011 году. Участвовал в создании разных продуктов Поиска, Диска, Фоток и Музыки для всех популярных платформ.',
        jobCompany: 'Яндекс'
      },
      {
        id: '10113492',
        url: 'https://events.yandex.ru/lib/people/10113492/',
        name: 'Денис Загаевский',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/197753/fc1d16442d6a7cbe12b154032f8a0019/big_c',
        about: 'Окончил факультет ВМК МГУ им. Ломоносова. Занимается разработкой приложений и игр с 2011 года, в 2012-м сконцентрировался на мобильных платформах Android и iOS. В Яндексе разрабатывает приложения для Android.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9149820',
        url: 'https://events.yandex.ru/lib/people/9149820/',
        name: 'Роман Григорьев',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/198307/1ce07512b6dc11e687ef002590c62a5c/big_c',
        about: 'Окончил Самарский университет. Разрабатывает приложения для Android с 2010 года. В Яндексе — с 2012-го. Руководит разработкой мобильных клиентов Яндекс.Диска.',
        jobCompany: 'Яндекс'
      },
      {
        id: '10446351',
        url: 'https://events.yandex.ru/lib/people/10446351/',
        name: 'Дмитрий Моруз',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/204268/d6f837add3cb0a859a41959b8ae14c6a/big_c',
        about: 'Работал дизайнером в студии «Трансформер», с 2014 года — дизайнер систем идентификации в Яндексе.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9320769',
        url: 'https://events.yandex.ru/lib/people/9320769/',
        name: 'Алексей Щербинин',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/95043/209761c0b6dc11e687ef002590c62a5c/big_c',
        about: 'Профессионал с глубокими познаниями в графической части Android и всего, что с ней связано. Любит нестандартные задачи и решает их в команде мобильного Яндекс Браузера.',
        jobCompany: 'Яндекс'
      },
      {
        id: '3768719',
        url: 'https://events.yandex.ru/lib/people/3768719/',
        name: 'Эдуард Мацуков',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/198307/9d9a8672b6da11e687ef002590c62a5c/big_c',
        about: 'Разрабатываю приложения для Android с 2010 года. В 2014 делал высоконагруженное финансовое приложение. Тогда же начал осваивать АОП, внедряя язык в продакшн. В 2015 разрабатывал инструменты для Android Studio, позволяющие использовать aspectJ в своих проектах. В Яндексе занят на проекте Авто.ру.',
        jobCompany: 'Яндекс'
      },
      {
        id: '34',
        url: 'https://events.yandex.ru/lib/people/34/',
        name: 'Сергей Бережной',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/194464/2e89984ab6d511e687ef002590c62a5c/big_c',
        about: 'Веб-разработчик в Яндексе с 2005 года. Успел поработать над Поиском, Почтой, Поиском по блогам, Я.ру, Картинками, Видео. Помимо этого, активно занимается развитием внутренних инструментов для создания сайтов.',
        jobCompany: 'Яндекс'
      },
      {
        id: '10291395',
        url: 'https://events.yandex.ru/lib/people/10291395/',
        name: 'Дмитрий Попов',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/197753/61b9c073415fbaea4bce3851900c28c8/big_c',
        about: 'Окончил факультет ПМТ Вятского государственного университета в 2012 году. В Яндексе с 2015-го, занимается разработкой продуктов медийных сервисов.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9513351',
        url: 'https://events.yandex.ru/lib/people/9513351/',
        name: 'Владимир Тагаков',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/197753/24d12686b6dc11e687ef002590c62a5c/big_c',
        about: 'Энтузиаст разработки под Android, в Яндексе занимается оптимизацией и разработкой мобильного приложения Карт.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9123538',
        url: 'https://events.yandex.ru/lib/people/9123538/',
        name: 'Васюнин Николай',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/194464/1c55b8d2b6dc11e687ef002590c62a5c/big_c',
        about: 'Пришёл в Яндекс в 2014 году. Дизайнер продукта в музыкальных сервисах компании, участник команды разработки Яндекс.Радио.',
        jobCompany: 'Яндекс'
      },
      {
        id: '10682529',
        url: 'https://events.yandex.ru/lib/people/10682529/',
        name: 'Илья Сергеев',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/198307/bbe3a45e099d739cfb5bba6f96ae07f8/big_c',
        about: 'Разрабатывает приложения под мобильные платформы с 2009 года. За это время принял участие более чем в 30 законченных проектах под Android, iOS, и Windows Phone. В Яндексе с 2015 года, занимается разработкой КиноПоиска под Android и iOS.',
        jobCompany: 'Яндекс'
      },
      {
        id: '417',
        url: 'https://events.yandex.ru/lib/people/417/',
        name: 'Максим Хромцов',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/198307/781ede98b6d511e687ef002590c62a5c/big_c',
        about: 'Учится в магистратуре на факультете информатики и вычислительной техники Московского института радиотехники, электроники и автоматики. С 2005 года занимается разработкой приложений (игры, бизнес-приложения) для мобильных устройств на платформах J2ME, Windows Mobile, Android, Symbian, участвовал в разработке веб-приложений на Java EE. В Яндексе с 2010 года, занимается разработкой для мобильных устройств на платформах J2ME и Android.',
        jobCompany: 'Яндекс'
      },
      {
        id: '10090355',
        url: 'https://events.yandex.ru/lib/people/10090355/',
        name: 'Кондратьев Александр',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/198307/2e07060227e202433f0bf1d483ee0a15/big_c',
        about: 'Занимается исследованиями интерфейсов в Яндексе больше 5 лет. За это время поработал с десятками продуктов Поиска, Карт, Маркета, Почты и других сервисов компании. Заинтересовался интерфейсами в 2005 году, по образованию специалист по защите информации.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9295914',
        url: 'https://events.yandex.ru/lib/people/9295914/',
        name: 'Сергей Калабин',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/198307/1e200dacb6dc11e687ef002590c62a5c/big_c',
        about: 'Пришёл в компанию дизайнером мобильных приложений в 2013-м. Три года занимался музыкальными сервисами Яндекса, сейчас руководит дизайном турецкого направления. Считает что дизайнера должна отличать любовь к людям.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9664406',
        url: 'https://events.yandex.ru/lib/people/9664406/',
        name: 'Rijshouwer Krijn',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/198307/447ca5b4b6dc11e687ef002590c62a5c/big_c',
        about: 'Krijn Rijshouwer is a product designer. \r\n“I like to create and work on products that have a positive impact in the world. The thing that attracts me most in doing what I do at Framer, and did before at other companies, is changing the way a lot of people work, live and consume on a daily basis with just the push of a button.',
        jobCompany: 'Framer'
      },
      {
        id: '664322',
        url: 'https://events.yandex.ru/lib/people/664322/',
        name: 'Андрей Гевак',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/197753/6f74eb0eb6d811e687ef002590c62a5c/big_c',
        about: 'В конце 2013 года команда сервиса Яндекс.Музыка начала разработку новой версии. Новой получилась не только «шкурка», то есть дизайн, но и сами возможности. Мы переосмыслили поведение пользователей на сайте и в приложении и иначе оценили потребность людей в новой музыке. В результате этого получилась нынешняя версия music.yandex.ru и её мобильные клиенты.\r\nВ докладе я расскажу о том, как шёл процесс переосмысления, почему мы сделали именно так, как сделали, и что из этого всего вышло.',
        jobCompany: 'Яндекс'
      },
      {
        id: '10446382',
        url: 'https://events.yandex.ru/lib/people/10446382/',
        name: 'Ждан Филиппов',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/204268/c2548e0badfa7a678fecb2127d44828f/big_c',
        about: 'Арт-директор коммуникаций Яндекса. В прошлом — арт-директор журналов «CitizenK», «Эрмитаж», «Секрет Фирмы», «Top-Flight», сотрудник «Мастерской Димы Барбанеля». Занимался макетной работой для компаний Readymag, Aliexpress, ONY, Charmer, MINI, Grohe и Мосметрострой.',
        jobCompany: 'Яндекс'
      },
      {
        id: '10270070',
        url: 'https://events.yandex.ru/lib/people/10270070/',
        name: 'Юрий Подорожный',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/204268/ccd5a5c8f1abbc2c6eebca87e56b5f5a/big_c',
        about: 'Руководитель службы разработки мобильных геоинформационных сервисов «Яндекса». Работает над «Яндекс.Картами» и «Яндекс.Метро». Занимается мобильной разработкой более восьми лет.',
        jobCompany: 'Яндекс'
      },
      {
        id: '9664416',
        url: 'https://events.yandex.ru/lib/people/9664416/',
        name: 'Treub Jonas',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/198307/453b4dc0b6dc11e687ef002590c62a5c/big_c',
        about: 'Jonas Treub is a software developer.\r\n“I am a creative software developer with experience working on a variety of projects, from small prototypes to large apps for some well-known Dutch clients.”',
        jobCompany: 'Framer'
      },
      {
        id: '9907382',
        url: 'https://events.yandex.ru/lib/people/9907382/',
        name: 'Поликарпов Василий',
        photoUrl: 'https://avatars.mds.yandex.net/get-yaevents/198307/484b38eab6dc11e687ef002590c62a5c/big_c',
        about: 'Разработчик в команде мобильного Яндекс.Браузера.',
        jobCompany: 'Яндекс'
      }
    ];

    console.log('Insert speakers data.');
    speakersData.forEach(speaker => Speakers.insert(speaker));
  }

  // if the Hall Schedules collection is empty
  if (HallSchedules.find().count() === 0) {
    //Время указывается в UTC
    const hallSchedulesData = [
      /* 1 */
      {
        id: '4158',
        title: 'Лекция 1. Идея, исследование, концепт (Часть 1)',
        url: 'https://events.yandex.ru/lib/talks/4158/',
        speakers_ids: ['8953757'],
        hall_id: '0',
        startDateTime: '2016-10-18T09:00:00.000Z',
        endDateTime: '2016-10-18T09:30:00.000Z',
        desc: 'Идея определяет суть любого продукта и, вместе с тем, ничего не стоит. Чтобы работать с ней, нужен понятный процесс, который проведет дизайнера от её возникновения до реализации и оценки реальными пользователями. И на этом работа дизайнера не заканчивается — ему всегда нужно уметь заглядывать в будущее.',
        schools_ids: ['design', 'frontend', 'mobdev', 'management']
      },

      /* 2 */
      {
        id: '4159',
        title: 'Лекция 2. Идея, исследование, концепт (Часть 2)',
        url: 'https://events.yandex.ru/lib/talks/4159/',
        speakers_ids: ['8953757'],
        hall_id: '2',
        startDateTime: '2016-10-18T09:30:00.000Z',
        endDateTime: '2016-10-18T11:40:00.000Z',
        desc: 'Как блестящие идеи претворяются в жизнь, какие сложности возникают при их реализации, чем важна хорошая коммуникация в работе и что даёт проверка прототипов жизнью. Лекция с примерами ошибок и советом не бояться совершать собственные.',
        schools_ids: ['design', 'frontend', 'mobdev', 'management']
      },

      /* 3 */
      {
        id: '4160',
        title: 'Лекция 1. Java Blitz (Часть 1)',
        url: 'https://events.yandex.ru/lib/talks/4160/',
        speakers_ids: ['3768719'],
        hall_id: '3',
        startDateTime: '2016-10-19T09:00:00.000Z',
        endDateTime: '2016-10-19T10:00:00.000Z',
        desc: 'О языке программирования Java и устройстве виртуальной машины Dalvik/ART на Android. А также об отличиях среды мобильной разработки от десктопной Java и о том, что важно знать при знакомстве с экосистемой Android.',
        schools_ids: ['mobdev']
      },

      /* 4 */
      {
        id: '4161',
        title: 'Лекция 2. Git & Workflow',
        url: 'https://events.yandex.ru/lib/talks/4161/',
        speakers_ids: ['8979250'],
        hall_id: '1',
        startDateTime: '2016-10-19T10:00:00.000Z',
        endDateTime: '2016-10-19T12:30:00.000Z',
        desc: 'Обзор основных концепций git с их преимуществами и недостатками. А также о том, какие есть модели организации работы с распределенной системой и как выбрать подходящую модель для команды.',
        schools_ids: ['mobdev']
      },

      /* 5 */
      {
        id: '4162',
        title: 'Лекция 1. Адаптивная вёрстка',
        url: 'https://events.yandex.ru/lib/talks/4162/',
        speakers_ids: ['9000962'],
        hall_id: '4',
        startDateTime: '2016-10-20T09:00:00.000Z',
        endDateTime: '2016-10-20T10:00:00.000Z',
        desc: 'О проблемах отображения современного сайта на разных устройствах, с их удачными и не лучшими решениями. В практической части лекции рассматривается процесс улучшения статического сайта и основные прикладные техники адаптивной вёрстки.',
        schools_ids: ['frontend']
      },

      /* 6 */
      {
        id: '4168',
        title: 'Лекция 3. Java Blitz (Часть 2)',
        url: 'https://events.yandex.ru/lib/talks/4168/',
        speakers_ids: ['3768719'],
        hall_id: '1',
        startDateTime: '2016-10-25T09:00:00.000Z',
        endDateTime: '2016-10-25T09:30:00.000Z',
        desc: 'Что такое generics и чем они важны? Можно ли читать байткод? Как работает препроцессор и аннотации? А также о том, нужна ли рефлексия в продакшене, как не наступать на простые грабли и как выглядит контрактное программирование в Java.',
        schools_ids: ['mobdev']
      },

      /* 7 */
      {
        id: '4167',
        title: 'Лекция 3. Особенности проектирования мобильных интерфейсов',
        url: 'https://events.yandex.ru/lib/talks/4167/',
        speakers_ids: ['9123538'],
        hall_id: '3',
        startDateTime: '2016-10-25T09:00:00.000Z',
        endDateTime: '2016-10-25T10:00:00.000Z',
        desc: 'Из чего складывается внимание человека и как им управлять. А также — как применять эти знания в проектировании мобильных интерфейсов.',
        schools_ids: ['design']
      },

      /* 8 */
      {
        id: '4169',
        title: 'MyFirstApp (Часть 1)',
        url: 'https://events.yandex.ru/lib/talks/4169/',
        speakers_ids: ['9149820'],
        hall_id: '0',
        startDateTime: '2016-10-25T09:30:00.000Z',
        endDateTime: '2016-10-25T11:30:00.000Z',
        desc: 'Об основных компонентах приложений под Android и инструментах их разработки с базовыми рекомендациями по архитектуре. А также об ошибках, к которым может привести недостаточное знание инструментов.',
        schools_ids: ['mobdev']
      },

      /* 9 */
      {
        id: '4172',
        title: 'Лекция 2. Работа с сенсорным пользовательским вводом',
        url: 'https://events.yandex.ru/lib/talks/4172/',
        speakers_ids: ['9000962'],
        hall_id: '4',
        startDateTime: '2016-10-27T09:30:00.000Z',
        endDateTime: '2016-10-27T11:30:00.000Z',
        desc: 'Об отличиях интерфейсов, рассчитанных на сенсорный ввод, про новый стандарт обработки событий ввода Pointer Events и CSS-свойства, которые полезно знать при работе над сенсорными интерфейсами. Практическая часть представлена разбором реализации жеста для скрытия бокового меню.',
        schools_ids: ['frontend']
      },

      /* 10 */
      {
        id: '4189',
        title: 'Лекция 4. Продукт и платформа',
        url: 'https://events.yandex.ru/lib/talks/4189/',
        speakers_ids: ['9295914'],
        hall_id: '1',
        startDateTime: '2016-11-01T09:00:00.000Z',
        endDateTime: '2016-11-01T09:30:00.000Z',
        desc: 'Как взаимодействуют бренд платформы и бренд продукта. Как не потерять себя в гайдлайнах операционной системы и на что ориентироваться при выборе между кастомными и нативными решениями. Можно ли назвать двух близнецов абсолютно идентичными? А мёртвое дерево — всё ещё «дерево»? Лекция о дизайне с лёгким уклоном во французский язык.',
        schools_ids: ['design']
      },

      /* 11 */
      {
        id: '4190',
        title: 'Лекция 5. Природа операционных систем',
        url: 'https://events.yandex.ru/lib/talks/4190/',
        speakers_ids: ['9123538'],
        hall_id: '4',
        startDateTime: '2016-11-01T09:30:00.000Z',
        endDateTime: '2016-11-01T12:00:00.000Z',
        desc: 'Основы философии Material Design, или как проектировать интерфейсы, опираясь на знания об окружающей природе.',
        schools_ids: ['design']
      },

      /* 12 */
      {
        id: '4195',
        title: 'Лекция 5. MyFirstApp (Часть 2)',
        url: 'https://events.yandex.ru/lib/talks/4195/',
        speakers_ids: ['9149820'],
        hall_id: '4',
        startDateTime: '2016-11-02T09:00:00.000Z',
        endDateTime: '2016-11-02T09:30:00.000Z',
        desc: 'Как перестать бояться пересоздания Activity, прекратить видеть в этом ужасную трудность для разработчиков и начать рассматривать действие с компонентом как полезную особенность.',
        schools_ids: ['mobdev']
      },

      /* 13 */
      {
        id: '4196',
        title: 'Лекция 6. ViewGroup',
        url: 'https://events.yandex.ru/lib/talks/4196/',
        speakers_ids: ['9320769'],
        hall_id: '2',
        startDateTime: '2016-11-02T09:30:00.000Z',
        endDateTime: '2016-11-02T11:30:00.000Z',
        desc: 'Про классы View и ViewGroup и их ключевые компоненты — measure и layout. А также о том, как написать кастомный ViewGroup и обрабатывать касания экрана — о значении MotionEvent, пользе VelocityTracker и GestureDetector.',
        schools_ids: ['mobdev']
      },

      /* 14 */
      {
        id: '4197',
        title: 'Лекция 3. Мультимедиа: возможности браузера',
        url: 'https://events.yandex.ru/lib/talks/4197/',
        speakers_ids: ['9348837'],
        hall_id: '0',
        startDateTime: '2016-11-03T09:00:00.000Z',
        endDateTime: '2016-11-03T10:50:00.000Z',
        desc: 'О средствах для работы с графикой и звуком в браузере: Canvas, WebGL и Web Audio API.',
        schools_ids: ['frontend']
      },

      /* 15 */
      {
        id: '4267',
        title: 'Лекция 6. Прототипирование как процесс',
        url: 'https://events.yandex.ru/lib/talks/4267/',
        speakers_ids: ['3530628', '9664312'],
        hall_id: '1',
        startDateTime: '2016-11-08T09:00:00.000Z',
        endDateTime: '2016-11-08T10:00:00.000Z',
        desc: 'Как оживить идею или созданный на её основе макет и проверить их работоспособность без дорогостоящей разработки. А также об изменениях в осмыслении и подходе к реализации продуктов, когда дизайнер начинает создавать прототипы.',
        schools_ids: ['design']
      },

      /* 16 */
      {
        id: '4268',
        title: 'Лекция 7. Инструмент под задачи',
        url: 'https://events.yandex.ru/lib/talks/4268/',
        speakers_ids: ['3530628', '9664312'],
        hall_id: '0',
        startDateTime: '2016-11-08T10:00:00.000Z',
        endDateTime: '2016-11-08T11:50:00.000Z',
        desc: 'Как выбрать инструмент для создания прототипа: проверить интерфейсную гипотезу с минимальными затратами времени и усилий. Чем пользуются дизайнеры в Яндексе.',
        schools_ids: ['design']
      },

      /* 17 */
      {
        id: '4222',
        title: 'Лекция 7. Background',
        url: 'https://events.yandex.ru/lib/talks/4222/',
        speakers_ids: ['9513302'],
        hall_id: '2',
        startDateTime: '2016-11-09T09:00:00.000Z',
        endDateTime: '2016-11-09T10:00:00.000Z',
        desc: 'Как строить взаимодействие между потоками внутри приложения и с какими проблемами мы сталкиваемся при попытках сделать отзывчивые и плавные интерфейсы. А также об основных инструментах и способах установления взаимодействия между потоками, с сильными и слабыми сторонами решений.',
        schools_ids: ['mobdev']
      },

      /* 18 */
      {
        id: '4223',
        title: 'Лекция 8. RecyclerView',
        url: 'https://events.yandex.ru/lib/talks/4223/',
        speakers_ids: ['9513351'],
        hall_id: '0',
        startDateTime: '2016-11-09T10:00:00.000Z',
        endDateTime: '2016-11-09T12:10:00.000Z',
        desc: 'О виджете отображения списков RecyclerView — про всё, что нужно знать и о чём важно не забывать при его использовании. Также о жизненном цикле объектов паттерна ViewHolder и почему важно избегать их уничтожения.',
        schools_ids: ['mobdev']
      },

      /* 19 */
      {
        id: '4230',
        title: 'Лекция 4. Нативные приложения на веб-технологиях',
        url: 'https://events.yandex.ru/lib/talks/4230/',
        speakers_ids: ['34'],
        hall_id: '0',
        startDateTime: '2016-11-10T09:00:00.000Z',
        endDateTime: '2016-11-10T10:10:00.000Z',
        desc: 'Зачем и в каких случаях стоит использовать веб-технологии для создания нативных приложений. В лекции рассматриваются технологические варианты реализации, особое внимание уделено рекомендуемому способу с использованием Cordova и PhoneGap.',
        schools_ids: ['frontend']
      },

      /* 20 */
      {
        id: '4266',
        title: 'Лекция 8. Анимации',
        url: 'https://events.yandex.ru/lib/talks/4266/',
        speakers_ids: ['3530628', '9664312'],
        hall_id: '0',
        startDateTime: '2016-11-15T09:00:00.000Z',
        endDateTime: '2016-11-15T10:00:00.000Z',
        desc: 'Из чего складывается отличная анимация: её составляющие, предназначение и функции в продукте. Про физиологию визуального восприятия, ощущения от взаимодействий и анимации в iOS и Android. И об инструментах анимирования.',
        schools_ids: ['design']
      },

      /* 21 */
      {
        id: '4269',
        title: 'Дополнительная лекция. Design Everything',
        url: 'https://events.yandex.ru/lib/talks/4269/',
        speakers_ids: ['9664406', '9664416'],
        hall_id: '2',
        startDateTime: '2016-11-15T10:00:00.000Z',
        endDateTime: '2016-11-15T11:40:00.000Z',
        desc: 'Take a look as Jonas and Krijn from the Framer Team introduce you to designing with code. The talk starts with a short overview of the tool, after which they’ll take you on a head-first dive into creating your first prototypes.\nAll in all, want to learn the basics of Framer? Watch this presentation and you should be good to go.',
        schools_ids: ['design']
      },

      /* 22 */
      {
        id: '4275',
        title: 'Лекция 9. Service & Broadcasts',
        url: 'https://events.yandex.ru/lib/talks/4275/',
        speakers_ids: ['9513302'],
        hall_id: '3',
        startDateTime: '2016-11-16T09:00:00.000Z',
        endDateTime: '2016-11-16T10:00:00.000Z',
        desc: 'О двух компонентах приложений для Android — Service и BroadcastReceiver. В частности — об их роли в приложениях и о том, как с ними взаимодействовать из разных процессов.',
        schools_ids: ['mobdev']
      },

      /* 23 */
      {
        id: '4276',
        title: 'Лекция 10. Drawing',
        url: 'https://events.yandex.ru/lib/talks/4276/',
        speakers_ids: ['9320769'],
        hall_id: '4',
        startDateTime: '2016-11-16T10:00:00.000Z',
        endDateTime: '2016-11-16T11:20:00.000Z',
        desc: 'О работе с графикой в Android — про классы Bitmap, Canvas, Paint, Path и Drawable. Также о том, что такое overdraw и почему это плохо.',
        schools_ids: ['mobdev']
      },

      /* 24 */
      {
        id: '4292',
        title: 'Лекция 5. Клиентская оптимизация: базовые знания и лучшие практики',
        url: 'https://events.yandex.ru/lib/talks/4292/',
        speakers_ids: ['9727130'],
        hall_id: '1',
        startDateTime: '2016-11-17T09:00:00.000Z',
        endDateTime: '2016-11-17T11:00:00.000Z',
        desc: 'Что такое клиентская оптимизация (web performance optimization), а также о базовых техниках ускорения загрузки и лучших практиках разработки быстроработающих приложений.',
        schools_ids: ['frontend']
      },

      /* 25 */
      {
        id: '4295',
        title: 'Лекция 9. Развите продукта',
        url: 'https://events.yandex.ru/lib/talks/4295/',
        speakers_ids: ['664322'],
        hall_id: '1',
        startDateTime: '2016-11-22T09:00:00.000Z',
        endDateTime: '2016-11-22T11:00:00.000Z',
        desc: 'Про взаимоотношения пользователя и продукта: как они начинаются, как развиваются и как использование продукта входит в привычку.',
        schools_ids: ['design']
      },

      /* 26 */
      {
        id: '4296',
        title: 'Лекция 11. Content provider',
        url: 'https://events.yandex.ru/lib/talks/4296/',
        speakers_ids: ['417'],
        hall_id: '2',
        startDateTime: '2016-11-23T09:00:00.000Z',
        endDateTime: '2016-11-23T10:00:00.000Z',
        desc: 'Почему и когда нужно использовать ContentProvider, а также зачем надо всегда помнить об authority.',
        schools_ids: ['mobdev']
      },

      /* 27 */
      {
        id: '4297',
        title: 'Лекция 12. SQL&SQLite',
        url: 'https://events.yandex.ru/lib/talks/4297/',
        speakers_ids: ['9907382'],
        hall_id: '2',
        startDateTime: '2016-11-23T10:00:00.000Z',
        endDateTime: '2016-11-23T11:10:00.000Z',
        desc: 'Почему в Вашем приложении нужен SQLite, какие его основные функции, и как писать код в реальном приложении.',
        schools_ids: ['mobdev']
      },

      /* 28 */
      {
        id: '4307',
        title: 'Лекция 6. Клиентская оптимизация: мобильные устройства и инструменты',
        url: 'https://events.yandex.ru/lib/talks/4307/',
        speakers_ids: ['143952'],
        hall_id: '3',
        startDateTime: '2016-11-24T09:00:00.000Z',
        endDateTime: '2016-11-24T10:10:00.000Z',
        desc: 'Оптимизации для мобильных устройств нужно уделять больше внимания, чем для десктопных. Ведь надо обеспечивать работу в мобильных сетях и на более слабом «железе». Лекция о многообразии платформ, браузеров и их версий, с упоминанием основных проблем, влияющих на производительность, и способов их решения. Так же — об основных принципах измерений на клиенте, что позволяет видеть результаты оптимизации.',
        schools_ids: ['frontend']
      },

      /* 29 */
      {
        id: '4319',
        title: 'Лекция 10. Исследование интерфейсов',
        url: 'https://events.yandex.ru/lib/talks/4319/',
        speakers_ids: ['10090355'],
        hall_id: '4',
        startDateTime: '2016-11-29T09:00:00.000Z',
        endDateTime: '2016-11-29T11:10:00.000Z',
        desc: 'Как самостоятельно проверить свои и чужие интерфейсные решения и как узнать больше о своих пользователях. Когда такие исследования могут быть полезны, как их подготовить и провести.',
        schools_ids: ['design']
      },

      /* 30 */
      {
        id: '4320',
        title: 'Лекция 13. Fragments (Часть 1)',
        url: 'https://events.yandex.ru/lib/talks/4320/',
        speakers_ids: ['10113492'],
        hall_id: '0',
        startDateTime: '2016-11-30T09:00:00.000Z',
        endDateTime: '2016-11-30T10:00:00.000Z',
        desc: 'О фрагментах (Fragments) в Android — зачем они нужны, как с ними правильно работать и взаимодействовать. Основные методы жизненного цикла. А также о главных недостатках фрагментов и о том, как с ними бороться.',
        schools_ids: ['mobdev']
      },

      /* 31 */
      {
        id: '4321',
        title: 'Лекция 14. Fragments (Часть 2)',
        url: 'https://events.yandex.ru/lib/talks/4321/',
        speakers_ids: ['10113492'],
        hall_id: '3',
        startDateTime: '2016-11-30T10:00:00.000Z',
        endDateTime: '2016-11-30T12:10:00.000Z',
        desc: 'Во второй части лекции про фрагменты (Fragments) — о том, что собой представляет Support Library и почему её следует использовать. Также о том, что такое State loss и как его избегать. Немного об анимациях и полезных методах во Fragments API.',
        schools_ids: ['mobdev']
      },

      /* 32 */
      {
        id: '4323',
        title: 'Лекция 7. Инфраструктура веб-проектов',
        url: 'https://events.yandex.ru/lib/talks/4323/',
        speakers_ids: ['10135442'],
        hall_id: '3',
        startDateTime: '2016-12-01T09:00:00.000Z',
        endDateTime: '2016-12-01T10:00:00.000Z',
        desc: 'Что такое инфраструктура веб-проектов и зачем нужны дополнительные средства, не решающие бизнес-задачи напрямую. Какими средствами окружить проект, чтобы разработка оказалась удобной и быстрой, а сервис был стабильным. Лекция с ответами на эти вопросы на примере условного проекта, решениями инфраструктурных задач и чек-листом для старта.',
        schools_ids: ['frontend']
      },

      /* 33 */
      {
        id: '4324',
        title: 'Лекция 8. Инструменты разработки мобильного фронтенда',
        url: 'https://events.yandex.ru/lib/talks/4324/',
        speakers_ids: ['10135442'],
        hall_id: '1',
        startDateTime: '2016-12-01T10:00:00.000Z',
        endDateTime: '2016-12-01T11:30:00.000Z',
        desc: 'Как сделать процесс разработки под мобильные браузеры таким же комфортным, как под десктопные. Или об инструментах веб-разработки и о том, как использовать их под мобильные нужды.',
        schools_ids: ['frontend']
      },

      /* 34 */
      {
        id: '4345',
        title: 'Лекция 11. Работа в команде',
        url: 'https://events.yandex.ru/lib/talks/4345/',
        speakers_ids: ['10270070'],
        hall_id: '4',
        startDateTime: '2016-12-06T09:00:00.000Z',
        endDateTime: '2016-12-06T10:00:00.000Z',
        desc: 'Про командную работу: почему важно наладить качественное взаимодействие дизайнеров, разработчиков и менеджеров, и какие инструменты можно использовать, чтобы сделать это как можно эффективнее.',
        schools_ids: ['design']
      },

      /* 35 */
      {
        id: '4346',
        title: 'Лекция 15. MVP&Co',
        url: 'https://events.yandex.ru/lib/talks/4346/',
        speakers_ids: ['10291395'],
        hall_id: '1',
        startDateTime: '2016-12-07T09:00:00.000Z',
        endDateTime: '2016-12-07T10:30:00.000Z',
        desc: 'Лекция о важности работы над архитектурой приложений, с уклоном в особенности архитектуры Android и примерами шаблонов проектирования. Также о том, как писать собственные UX-тесты и советы по оформлению unit-тестов.',
        schools_ids: ['mobdev']
      },

      /* 36 */
      {
        id: '4349',
        title: 'Дополнительная лекция. Айдентика',
        url: 'https://events.yandex.ru/lib/talks/4349/',
        speakers_ids: ['10446351', '10446382'],
        hall_id: '3',
        startDateTime: '2016-12-13T09:00:00.000Z',
        endDateTime: '2016-12-13T10:40:00.000Z',
        desc: 'О визуальном образе проекта «Мобилизация»: через какие этапы мы прошли, чему научились и что получилось. Как отпускать концепции и находить новые.',
        schools_ids: ['design']
      },

      /* 37 */
      {
        id: '4352',
        title: 'Лекция 16. Debugging & Polishing',
        url: 'https://events.yandex.ru/lib/talks/4352/',
        speakers_ids: ['10682529'],
        hall_id: '2',
        startDateTime: '2016-12-14T09:00:00.000Z',
        endDateTime: '2016-12-14T10:40:00.000Z',
        desc: 'Большую часть времени разработчики тратят на отладку и оптимизацию программы. В лекции приведены основные инструменты поиска и отладки проблемных мест в приложениях на Android, а также самые частые проблемы и варианты их решения.',
        schools_ids: ['mobdev']
      },

      /* 38 */
      {
        id: '9999',
        title: 'Вводная лекция',
        speakers_ids: ['8953757'],
        hall_id: '0',
        startDateTime: '2017-07-03T09:00:00.000Z',
        endDateTime: '2017-07-03T10:40:00.000Z',
        schools_ids: ['design', 'frontend', 'mobdev', 'management']
      }
    ];

    console.log('Insert hall schedules data.');
    hallSchedulesData.forEach(hallSchedule =>
      HallSchedules.insert(hallSchedule)
    );
  }
});
