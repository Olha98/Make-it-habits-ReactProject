import * as Yup from 'yup';

export const passwordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'минимальное количество символов: 8')
    .max(16, 'максимальное количество символов: 16')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
      'пароль должен содежать латинские прописные, заглавные буквы и цифры',
    ),
  confirmPassword: Yup.string()
    .min(8, 'минимальное количество символов: 8')
    .max(16, 'максимальное количество символов: 16')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
      'пароль должен содежать латинские прописные, заглавные буквы и цифры',
    ),
});

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'минимальное количество символов: 2')
    .max(16, 'максимальное количество символов: 16')
    .matches(
      /^[A-Za-zА-Яа-яЇїІіА-Яа-яËё]+$/,
      'имя может содержать только алфавитные символы',
    )
    .required('обязательное поле для заполнения'),
  lastName: Yup.string()
    .min(2, 'минимальное количество символов: 2')
    .max(16, 'максимальное количество символов: 16')
    .matches(
      /^[A-Za-zА-Яа-яЇїІіА-Яа-яËё]+$/,
      'фамилия может содержать только алфавитные символы',
    ),
  phone: Yup.number().min(11, 'указан не полный номер'),
  email: Yup.string()
    .email('неправильный формат email')
    .max(30, 'максимальное количество символов: 30')
    .required('введите свой email'),
});

//!"password" must has min 8 symbols, max 16 symbols, only digital letters and literal letters
