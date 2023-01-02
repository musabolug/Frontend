import * as yup from "yup"

const validations = yup.object().shape({
    email: yup.string().email("Lütfen geçerli bir email giriniz").required(),
    password: yup.string().min(6,"sifre en az 6 karakter olmalıdır").required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password")]).required(),
});
export default validations