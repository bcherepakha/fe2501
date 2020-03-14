/** http://usejsdoc.org/
 * @param   Object      params              request params
 * @param   String      params.method       HTTP-метод. GET/POST/TRACE/DELETE/PUT и т.п.
 * @param   String      params.url          адрес запроса. http/https/ftp/file.
 * @param   Object      params.headers      request headers
 * @param   FormData    params.body         request body
 * @param   Function    onSuccess           success handler
 * @param   Function    onError             error handler
 */
export default function ixhr(params, onSuccess, onError) {
    console.log({
        params,
        onSuccess,
        onError
    });

    // Объект XMLHttpRequest (или, как его кратко называют, «XHR»)
    // дает возможность из JavaScript делать HTTP-запросы к серверу
    // без перезагрузки страницы.
    //
    // Несмотря на слово «XML» в названии, XMLHttpRequest
    // может работать с любыми данными, а не только с XML.
    //
    // Использовать его очень просто. Для этого надо выполнить всего 5 дейчтвий

    /** 1. Создаём новый объект XMLHttpRequest */
    const xhr = new XMLHttpRequest();

    //
    /** 2. Конфигурируем его
     * @param String    method      HTTP-метод. GET/POST/TRACE/DELETE/PUT и т.п.
     * @param String    URL         адрес запроса. http/https/ftp/file.
     * @param Boolean   async       если установлено в false, то запрос производится синхронно,
     *                              если true – асинхронно.
     *
     * При выполнении запроса есть ограничения безопасности,
     * называемые «Same Origin Policy»:
     * - запрос со страницы можно отправлять только на тот же протокол://домен:порт,
     *   с которого она пришла.
     */
    xhr.open(params.method, params.url, true);

    /** 3. Конфигурируем заголовки, отсылаемые на сервер
     * XMLHttpRequest умеет как указывать свои заголовки в запросе, так и читать присланные в ответ.
     *
     * Нельзя установить заголовки, которые контролирует браузер,
     * например Referer или Host и ряд других
     * https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name
     * https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_response_header_name
     * Это ограничение существует в целях безопасности и для контроля корректности запроса.
     *
     * Особенностью XMLHttpRequest является то, что отменить setRequestHeader невозможно.
     * Повторные вызовы лишь добавляют информацию к заголовку
     */
    if (params.headers) {
        for (const header in params.headers) {
            xhr.setRequestHeader(header, params.headers[header]);
        }
    }

    /** 4. Отсылаем запрос
     * Именно в этот момент открывается соединение и отправляется запрос на сервер.
     * @param Object    body        В body находится тело запроса.
     *                              Не у всякого запроса есть тело,
     *                              например у GET-запросов тела нет,
     *                              а у POST – основные данные
     *                              как раз передаются через body.
     */
     if (params.body && params.headers['Content-Type'] === 'multipart/form-data') {
         const body = new FormData();

         Object.keys(params.body).forEach(key => {
             body.append(key, params.body[key]);
         });

         xhr.send(body);
     } else if (params.body && params.headers['Content-Type'] === 'application/json') {
         const body = JSON.stringify(params.body);

         xhr.send(body);
     } else {
         xhr.send();
     }

    /** 5. Ловим ответ сервера */

    /** "Старый" стиль */
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState, 'onreadystatechange', arguments);

        /** xhr.readyState может иметь несколько значений в ходе выполнения запроса
         * UNSENT               0       начальное состояние
         * OPENED               1       вызван open
         * HEADERS_RECEIVED     2       получены заголовки
         * LOADING              3       загружается тело (получен очередной пакет данных)
         * DONE                 4       запрос завершён
         */
        if (xhr.readyState !== 4)
            return;

        const {status, statusText, responseText} = xhr;

        console.log('load complete', {
            status,
            statusText,
            responseText
        });

        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        if (status !== 200) {
            // обработать ошибку
            console.log(`${status}:${statusText}`);
            // onError({status, responseText, xhr});
        } else {
            // вывести результат
            console.log({responseText});
            // onSuccess({status, responseText, xhr});
        }
    }

    /** "Новый" стиль использует события
     * подробнее можно почитать здесь: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Properties
     * о поддерживаемых событиях здесь: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXMLHttpRequestEventTarget
     */
    xhr.addEventListener('load', function() {
        console.log('load event', arguments);
        const {status, responseText} = xhr;

        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
        if (xhr.status < 200 || xhr.status > 299) {
            // обработать ошибку
            onError({status, responseText, xhr});
        } else {
            // вывести результат
            onSuccess({status, responseText, xhr});
        }
    });

    xhr.addEventListener('error', function() {
        console.log('error event', arguments);
        const {status, responseText} = xhr;

        onError({status, responseText, xhr});
    });
}
