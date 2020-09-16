export const requiredField = (value) => {
  return !value && "обязательное поле";
};

export const maxLengthCreator = (maxLength) => (value) => {
  return (
    value.length > maxLength && `максимальное количество символов: ${maxLength}`
  );
};

export const minLengthCreator = (minLength) => (value) => {
  return (
    value.length < minLength && `максимальное количество символов: ${minLength}`
  );
};

// export const maxLength16 = (value) => {
//   return value.length > 16 && "максимальное количество символов 16";
// };
// export const minLength2 = (value) => {
//   return value.length < 2 && "минимальное количество символов 2";
// };

//

// validateField(fieldName, value) {
//   const { firstname, lastname, phone, email } = this.props;

//   switch (fieldName) {
//     case "firstname":
//       firstname = value.length >= 2;
//       this.state.formErrors.firstname = firstname
//         ? ""
//         : "неверно заполнено поле";
//       break;

//     case "lastname":
//       lastname = value.length >= 2;
//       this.state.formErrors.lastname = lastname
//         ? ""
//         : "неверно заполнено поле";
//       break;

//     case "phone":
//       phone = value.length >= 7;
//       this.state.formErrors.phone = phone ? "" : "неверно заполнено поле";
//       break;

//     case "email":
//       email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//       this.state.formErrors.email = email ? "" : "неверно заполнено поле";
//       break;

//     case "password":
//       this.state.passwordFields = value.length >= 6;
//       this.state.formErrors.password = this.state.passwordFields
//         ? ""
//         : "неверно заполнено поле";
//       break;

//     default:
//       break;
//   }
// }
