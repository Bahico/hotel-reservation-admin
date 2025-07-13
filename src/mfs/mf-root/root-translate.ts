export type TranslateModel = { [key: string]: TranslateModel | string };

export const RootTranslate: TranslateModel = {
  errorConnectionToTheServer: {
    en: 'Error connecting to the server',
    ru: 'Ошибка подключения к серверу',
    uz: 'Server bilan bog`lanishda hatolik'
  },
  home: {
    en: 'Home',
    ru: 'Домашняя страница',
    uz: 'Bosh sahifa'
  },

  addNew: {
    en: 'Add new',
    ru: 'Добавить новый',
    uz: 'Yangi qo`shish'
  },

  addNewGroup: {
    en: 'Add group',
    ru: 'Добавить группу',
    uz: 'Yangi guruh'
  },

  id: {
    en: '№',
    ru: '№',
    uz: '№'
  },

  name: {
    en: 'Name',
    ru: 'Наименование',
    uz: 'Nomi'
  },

  code: {
    en: 'Code',
    ru: 'Код',
    uz: 'Kodi'
  },

  fullName: {
    en: 'Full name',
    ru: 'Полное имя',
    uz: 'To`liq nomi'
  },

  number: {
    en: 'Number',
    ru: 'Номер',
    uz: 'Raqami'
  },

  date: {
    en: 'Date',
    ru: 'Дата',
    uz: 'Sanasi'
  },

  sum: {
    en: 'Sum',
    ru: 'Сумма',
    uz: 'Summasi'
  },

  save: {
    en: 'Save',
    ru: 'Сохранить',
    uz: 'Saqlash'
  },

  cancel: {
    en: 'Cancel',
    ru: 'Отмена',
    uz: 'Ortga'
  },

  submit: {
    en: 'Save',
    ru: 'Сохранить',
    uz: 'Saqlash'
  },

  back: {
    en: 'Cancel',
    ru: 'Отмена',
    uz: 'Ortga'
  },

  status: {
    en: 'Status',
    ru: 'Статус',
    uz: 'Statusi',
    'true': {
      uz: 'To\'g\'ri',
      ru: 'Да'
    },
    'false': {
      uz: 'Yolg\'on',
      ru: 'Нет'
    }
  },

  comments: {
    en: 'Comments',
    ru: 'Комментарии',
    uz: 'Sharxlar'
  },

  comment: {
    en: 'Comments',
    ru: 'Комментарии',
    uz: 'Sharxlar'
  },

  data: {
    loading: {
      en: 'Data doading ...',
      ru: 'Загрузка данных ...',
      uz: 'Malumot yuklanmoqda ...'
    },
    noData: {
      en: 'No data',
      ru: 'Нет данных',
      uz: 'Malumot yo`q'
    },
    deletedAlert: {
      en: 'Data deleted',
      ru: 'Информация удалена',
      uz: 'Malumot o\'chirildi'
    }
  },

  dataSubmitProccess: {
    en: 'Data submit proccess',
    ru: 'Процесс хранения данных',
    uz: 'Malumot saqlash amaliyoti'
  },

  dataSubmitSuccess: {
    en: 'Data submit success',
    ru: 'Информация успешно сохранена',
    uz: 'Malumot muvoffaqiyatli saqlandi!'
  },

  dataSubmitError: {
    en: 'Error on data submit',
    ru: 'Произошла ошибка при сохранении данных',
    uz: 'Malumot saqlashda hatolik yuz berdi!'
  },

  error: {
    http: {
      '404': {
        uz: 'Topilmadi',
        ru: 'Не найдено'
      }
    },
    notFound: {
      uz: 'Topilmadi!!!',
      ru: 'Не найдено!!!'
    },
    validation: {
      uz: 'Validation error',
      ru: 'Ошибка проверки'
    },
    invalidParameter: {
      uz: 'Yaroqsiz parametr',
      ru: 'Неверный параметр'
    },
    idNUll: {
      uz: 'Identifikator null',
      ru: 'Идентификатор нулевой'
    },
    idInvalid: {
      uz: 'Yaroqsiz ID',
      ru: 'Неверный идентификатор'
    },
    nameAlreadyExist: {
      uz: 'Nomi allaqachon mavjud',
      ru: 'Имя уже существует'
    },
    codeAlreadyExist: {
      uz: 'Kod allaqachon mavjud',
      ru: 'Код уже существует'
    },
    idExists: {
      uz: 'ID mavjud',
      ru: 'Идентификатор существует'
    },
    usernameAlreadyUsed: {
      uz: 'Foydalanuvchi nomi allaqachon ishlatilgan',
      ru: 'Имя пользователя уже используется'
    },
    responseNull: {
      uz: 'EIMZO javobi null',
      ru: 'Ответ EIMZO нулевой'
    },
    notSuccessResponse: {
      uz: 'EIMZO javob bermadi',
      ru: 'EIMZO не успешный ответ'
    },
    notSuccessStatus: {
      uz: 'EIMZO muvaffaqiyat holati emas',
      ru: 'EIMZO не имеет статуса успеха'
    },
    userNotActivated: {
      uz: 'Foydalanuvchi faollashtirilmagan',
      ru: 'Пользователь не был активирован'
    },
    emailAlreadyUsed: {
      uz: 'Elektron pochta allaqachon ishlatilgan',
      ru: 'Электронная почта уже используется'
    },
    invalidPassword: {
      uz: 'Noto\'g\'ri parol',
      ru: 'Неверный пароль'
    }
  },

  groups: {
    en: 'Groups',
    ru: 'Группи',
    uz: 'Guruhlar'
  },

  group: {
    en: 'Group',
    ru: 'Группа',
    uz: 'Guruh'
  },

  groupParent: {
    en: 'Parent of group',
    ru: 'Родитель группы',
    uz: 'Ota guruh'
  },

  groupName: {
    en: 'Group name',
    ru: 'Название группы',
    uz: 'Guruh nomi'
  },

  pleaseFillField: {
    en: 'Please fill "{{field}}"',
    ru: 'Пожалуйста, заполните "{{field}}"',
    uz: 'Iltimos "{{field}}" malumotni kiriting!'
  },

  minLenghtShouldBe: {
    en: 'Minimum length of "{{field}}" should be "{{minLength}}"',
    ru: 'Минимальная длина "{{field}}" должна быть "{{minLength}}"',
    uz: '"{{field}}"ning minimal uzunligi "{{minLength}}" bo`lishi kerak'
  },

  maxLenghtShouldBe: {
    en: 'Maximum length of "{{field}}" should be "{{maxLength}}"',
    ru: 'Максимальная длина "{{field}}" должна быть "{{maxLength}}"',
    uz: '"{{field}}"ning maxsimal uzunligi "{{maxLength}}" bo`lishi kerak'
  },

  pleaseSelectGroup: {
    en: 'Please select group!',
    ru: 'Пожалуйста, выберите группу!',
    uz: 'Iltimos guruhni tanlang!'
  },

  pleaseSelectOwner: {
    en: 'Please select "{{owner}}"',
    ru: 'Пожалуйста, выберите "{{owner}}"',
    uz: 'Iltimos "{{owner}}" tanlang!'
  },

  passportIssueDate: {
    en: 'Passport issue date',
    ru: 'Дата выдачи паспорта',
    uz: 'Passport berilgan san'
  },

  passportSerie: {
    en: 'Passport series',
    ru: 'Серия паспорта',
    uz: 'Passport seriyasi'
  },

  passportNumber: {
    en: 'Passport number',
    ru: 'Номер паспорта',
    uz: 'Passport raqami'
  },

  passportSender: {
    en: 'Passport issued by',
    ru: 'Кем выдан паспорт',
    uz: 'Passport berilgan joy'
  },

  address: {
    en: 'Address',
    ru: 'Адрес',
    uz: 'Manzil'
  },

  postIndex: {
    en: 'Post index',
    ru: 'Индекс почта',
    uz: 'Pochta indeksi'
  },

  postAddress: {
    en: 'Post address',
    ru: 'Почтовый адрес',
    uz: 'Pochta manzili'
  },

  email: {
    en: 'Email',
    ru: 'Электронная почта',
    uz: 'Elektron pochta'
  },

  phones: {
    en: 'Phones',
    ru: 'Телефоны',
    uz: 'Telefonlar'
  },

  phone: {
    en: 'Phone',
    ru: 'Телефон',
    uz: 'Telefon'
  },

  inn: {
    en: 'INN',
    ru: 'ИНН',
    uz: 'INN'
  },

  pinfl: {
    en: 'PINFL',
    ru: 'ПИНФЛ',
    uz: 'PINFL'
  },
  required: {
    en: 'Field required',
    ru: 'Поле обязательное',
    uz: 'Maydonni toldirish majbur'
  },
  minlength: {
    ru: 'Минимальная длина поля {{requiredLength}} текущая длина {{actualLength}}',
    uz: 'Maydonning minimal uzunligi {{requiredLength}} joriy uzunlik {{actualLength}}'
  },
  maxlength: {
    ru: 'Максимальная длина поля {{requiredLength}} текущая длина {{actualLength}}',
    uz: 'Maydonning maksimal uzunligi {{requiredLength}} joriy uzunligi {{actualLength}}'
  },
  action: {
    delete: {
      ru: 'Удалить',
      uz: 'O\'chirish'
    },
    clear: {
      ru: 'Очистить',
      uz: 'Tozalash'
    },
    filter: {
      ru: 'Фильтр',
      uz: 'Filtr'
    }
  },
  question: {
    delete: {
      ru: 'Вы действительно удаляете этот объект?',
      uz: 'Siz haqiqatan ham ushbu ob\'ektni o\'chirib tashlayapsizmi?'
    }
  },
  deleteTitle: {
    ru: 'Подтвердите операцию удаления',
    uz: 'O\'chirish operatsiyasini tasdiqlang'
  },
  shortName: {
    ru: 'Короткое имя',
    uz: 'Qisqacha nomi'
  },
  city: {
    ru: 'Город',
    uz: 'Shahar'
  },
  mfo: {
    ru: 'MFO',
    uz: 'MFO'
  },
  'entity-view': {
    ru: 'Вид {{id}}',
    uz: 'View {{id}}'
  },
  from: {
    ru: 'От {{text}}',
    uz: '{{text}} dan'
  },
  to: {
    ru: 'До {{text}}',
    uz: '{{text}} gacha'
  },
  mask: {
    uz: 'Maska xatosi',
    ru: 'Ошибка маски'
  },
  max: {
    uz: 'Maydon {{max}} dan oshmasligi kerak. Joriy {{actual}}',
    ru: 'Поле не должно превышать {{max}}. текущий {{actual}}'
  },
  min: {
    uz: 'Maydon {{min}} dan kam bo\'lmasligi kerak. Joriy {{actual}}',
    ru: 'Поле не должно быть меньше {{min}}. текущий {{actual}}'
  },
  parent: {
    uz: 'Ota-ona',
    ru: 'Родитель'
  }
};
