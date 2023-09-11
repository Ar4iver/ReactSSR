module.exports = function (api) {
  const IS_DEV = process.env.NODE_ENV !== 'production';
  const IS_SERVER = api.caller(caller => caller && caller.target === 'node');

  const presets = ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"];
  const plugins = [];

  console.log('Проверка сервер это или нет', IS_SERVER);

  //исключил плагин для серверной сборки
  if (IS_DEV && !IS_SERVER) {
    plugins.push("react-refresh/babel");
  }

  return {
    presets,
    plugins
  };
};