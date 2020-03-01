/**
 * async AJAX returns promise
 *
 * @param   Object      params              request params
 * @param   String      params.method       HTTP-метод. GET/POST/TRACE/DELETE/PUT и т.п.
 * @param   String      params.url          адрес запроса. http/https/ftp/file.
 * @param   Object      params.headers      request headers
 * @param   FormData    params.body         request body
 */
export default function send(params) {
    /**
     * Promise – это специальный объект, который содержит своё состояние.
     * Вначале pending («ожидание»), затем – одно из:
     *      fulfilled («выполнено успешно»)
     *      rejected («выполнено с ошибкой»).
     */
    return new Promise((resolve, reject) => {
        /**
         * Эта функция будет вызвана автоматически
         * В ней можно делать любые асинхронные операции,
         * А когда они завершатся — нужно вызвать один из callback из:
         *      resolve(результат) при успешном выполнении
         *      reject(ошибка) при ошибке
         */

         const xhr = new XMLHttpRequest();

         xhr.open(params.method, params.url, true);

         if (params.headers) {
             for (const header in params.headers) {
                 xhr.setRequestHeader(header, params.headers[header]);
             }
         }

         if (params.body && params.headers && params.headers['Content-Type'] === 'multipart/form-data') {
             const body = new FormData();

             Object.keys(params.body).forEach(key => {
                 body.append(key, params.body[key]);
             });

             xhr.send(body);
         } else if (params.body && params.headers && params.headers['Content-Type'] === 'application/json') {
             const body = JSON.stringify(params.body);

             xhr.send(body);
         } else {
             xhr.send();
         }

         xhr.addEventListener('load', function() {
             const {status, responseText} = xhr;
             let responseData;

             try {
                 responseData = JSON.parse(responseText);
             } catch (err) {
                 responseData = responseText;
             }

             // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
             if (xhr.status < 200 || xhr.status > 299) {
                 // обработать ошибку
                 reject({status, responseData, xhr});
             } else {
                 // вывести результат
                 resolve({status, responseData, xhr});
             }
         });

         xhr.addEventListener('error', function() {
             const {status, responseText} = xhr;

             reject({status, responseText, xhr});
         });

    });
}
