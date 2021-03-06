/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { message, notification } from 'antd';
import { getToken } from '@/utils/authority';

const codeHandlers = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: async response => {
    const data = await response.clone().json();
    const { message = '系统错误' } = data;
    message.error(message || '系统错误');
  },
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const responseHandler = response => {
  const codeHandler = codeHandlers[response.status];
  const type = typeof codeHandler;
  if (type === 'string') {
    const errorText = codeHandler || response.statusText;
    const { status, url } = response;
    message.error(errorText);
    console.error(` ${status}: ${url} ${errorText}`);
  } else if (type === 'function') {
    codeHandler(response);
  }
};

/**
 * 异常处理程序
 */

const errorHandler = error => {
  const { response } = error;

  if (response && response.status) {
    responseHandler(response);
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  return response;
};
/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler,
  // 默认错误处理
  credentials: 'same-origin', // 默认请求是否带上cookie
  headers: {
    Authorization: getToken() || '', // 避免服务端认为是攻击
    /*
    修复问题：单号和货物RFID显示重叠
    涉及页面：订单操作页面
    问题原因：IE缓存
    解决方法：链接：https://blog.csdn.net/qq_26941173/article/details/84935421
  */
    'Cache-Control': 'no-cache', // 兼容IE11，避免使用缓存，只设置该项时IE11依然使用缓存
    Pragma: 'no-cache', // 兼容IE11，避免使用缓存，只设置该项IE11、Edge及现代浏览器均不使用缓存
  },
});

request.use(
  async (ctx, next) => {
    const { req } = ctx;
    const { url } = req;
    if (url.indexOf('/api/') !== -1) {
      ctx.req.url = `http://120.26.77.19:3000${url.replace(`/api/`, '/')}`;
    }
    await next();
  },
  { global: true },
);

/**
 * 扩展request,增加token
 */
export const setToken = token => {
  request.extendOptions({
    headers: {
      Authorization: token || '', // 避免服务端认为是攻击
    },
  });
};

export default request;
