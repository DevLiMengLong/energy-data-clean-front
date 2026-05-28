# Energy Data Clean Front

数据清洗前端子应用，支持独立运行，也可被能源平台门户作为微前端加载。

## 本地启动

```bash
npm install
npm run dev
```

默认访问地址：

```text
http://127.0.0.1:5176
```

## 接口代理

开发环境默认代理：

```text
/api/basic -> http://127.0.0.1:8090
/config    -> http://127.0.0.1:8088
/query     -> http://127.0.0.1:8088
```

可通过环境变量覆盖：

```bash
API_PROXY_TARGET=http://127.0.0.1:8092 \
DATA_ACCESS_PROXY_TARGET=http://127.0.0.1:8088 \
npm run dev
```
