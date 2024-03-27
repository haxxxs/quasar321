export default {
  title: 'ѣ',
  menu: {
    title: 'Навигируй',
    home: 'Домой',
    homeDesc: 'Вернуться на главную страницу',
    sign: 'Подключиться',
    signDesc: 'Получить ключ',
    clear: 'Очистить',
    clearDesc: 'Удалить следы на устройстве',
    code: 'Github',
    codeDesc: 'Репозиторий',
    help: 'Часто задаваемые вопросы',
    helpDesc: 'О системе',
    transaction: 'Транзакции',
    transactionDesc: 'Просмотреть транзакции',
    contacts: 'Контакты',
    contactsDesc: 'Смотреть контакты',
    topUsers: 'Рейтинг участников',
    topUsersDesc: 'Окажись в числе первых!'
  },
  sign: {
    t1: 'Привет! Добро пожаловать в Ятѣ, систему обмена ценностями. Я уже придумал тебе уникальную мнемоническую фразу - считай её своей цифровой подписью, необходимой для удостоверения себя. Она у меня не хранится и потому не подлежит восстановлению. Теперь её знаешь только ты, поэтому аккуратно запиши на бумаге или хотябы скопируй, кликнув на неё, и вставь куда-нибудь.',
    t2: 'А для взаимодействия со мной и остальными участниками у тебя уже есть свой публичный адрес, который вывелся напрямую из цифровой подписи',
    t3: 'Осталось только ввести и запомнить надёжный',
    copy: 'Фраза скопирована',
    pwd: 'Пароль скопирован',
    protect: 'Чтобы защитить подпись',
    pwd0: 'Слишком простой пароль',
    pwd1: 'Простой пароль',
    pwd2: 'Средний пароль',
    pwd3: 'Надёжный пароль',
    pwd4: 'Очень надёжный пароль',
    pwdMust: 'Лучше введите пароль!',
    pwdMore: 'Лучше введите больше 6 символов',
    know: 'Я помню свою фразу!'
  },
  enter: {
    remember: 'Вспомни свой пароль',
    hint: 'Пароль к мнемонической фразе'
  },
  failed: 'Провал',
  success: 'Успех',
  password: 'Пароль',
  cancel: 'Отмена',
  ok: 'Ok',
  characters: 'Цифры, буквы, знаки',
  next: 'Продолжить',
  get: 'Получить',
  send: 'Отправить',
  slider: {
    w1: 'открытость',
    w2: 'неизменяемость',
    w3: 'доказуемость',
    w4: 'безопасность',
    w5: 'надёжность'
  },
  titles: {
    topUsersTitle: 'Рейтинг участников',
    contacts: 'Контакты'
  },
  transactionMessage: {
    successfull: 'Транзакция выполнена'
  },
  import: 'Экспорт/импорт',
  dowloadJson: 'Скачать JSON-файл',
  uploadJson: 'JSON-файл',
  placeholder: 'Поиск',
  aboutPlatform: {
    bannerTexts: {
      banner1: 'Почему c нами надежно...'
    },
    navHeaderItems: {
      openness: 'Открытость',
      free: 'Свобода',
      security: 'Защищенность'
    },
    opennessText: {
      p1: 'Это открытая неизменяемая доказуемая бухгалтерская книга.',
      p2: 'Система, которая позволяет прозрачно следить за движениями средств внутри себя.'
    },
    freeText: 'Свободный доступ к истории транзакций.',
    securityText: {
      p1: 'Каждая следующая транзакция несёт на себе отпечаток предыдущей, что является непреодолимым препятствием для изменения содержания последней.',
      p2: 'Транзакции алгоритмически подписываются отправителем, что исключает возможность фальсификации.'
    }
  },
  errorMessages: {
    scanQr: {
      NotAllowedError: {
        headerErr: 'Доступ к камере не был разрешен!',
        textErr: 'В соответствии с политикой конфиденциальности и защиты данных, доступ в настройках браузера должен быть разрешен! Пожалуйста, проверьте это. Затем обновите страницу и разрешите доступ к камере устройства при повторном запросе.'
      },
      NotFoundError: '',
      NotSupportedError: '',
      NotReadableError: '',
      OverconstrainedError: '',
      StreamApiNotSupportedError: '',
      InsecureContextError: ''
    }
  },
  buttons: {
    requestCameraAccess: 'Запросить доступ к камере',
    reloadPage: 'Перезагрузить страницу'
  }
}
