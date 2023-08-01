import axios from 'axios';
import {BASE_URL} from '../../constent/constent';
// SignUp Api Request
export function requestSignUpUser(options) {
  console.log(options);

  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}auth/sign-up`,
    data: options,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
}
export function requestSignupOtpVerify(options) {
  console.log(options);
  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}auth/sign-up/verify-otp`,
    data: options,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
}
// Sign In API Request
export function requestSignInUser(options) {
  console.log(options);
  console.log(BASE_URL);
  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}auth/login`,
    data: options,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}
export function requestSigninOtpVerify(options) {
  console.log(options);
  const res = axios.request({
    method: 'post',
    url: `${BASE_URL}auth/login-verify`,
    data: options,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}
