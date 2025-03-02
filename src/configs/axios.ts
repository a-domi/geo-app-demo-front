import axios from "axios";

let instance = axios.create({
  // TODO 環境変数による切り替え
  // baseURL: process.env.NEXT_APP_API_URL,
  baseURL: 'http://localhost:8080/',
});

// 本番環境以外はリクエストとレスポンス時にデバッグ用ログを出力する
if (process.env.REACT_APP_ENV !== 'production') {
  instance.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
}

export default instance;