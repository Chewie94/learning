// The <script> tag is used to embed a client-side script (JavaScript).
// The <script> element either contains scripting statements, or it points to an external script file through the src attribute.

// Inline javascript can't be loaded asynchronously or defer
{/* 
    <script>
        function helloWorld () { console.log('Hello World!') }
        helloWorld();
    </script> 
*/}

// Script tag Attributes:

// type - Indicates that the script is a "classic script", containing JavaScript code. Authors are encouraged to omit the attribute if the script refers to JavaScript code rather than specify a MIME type.

// crossorigin - Normal script elements pass minimal information to the window.onerror for scripts which do not pass the standard CORS checks. To allow error logging for sites which use a separate domain for static media, use this attribute.
// <script src='main.js' crossorigin='anonymous' integrity='sha384-....'/>
// You can send credential with the request: cookie, HTTP Basic Auth
// <script src='main.js' crossorigin='use-credentials'/>

// integrity - This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation
// <script src='main.js' crossorigin='anonymous' integrity='sha384-....'/>

// async - Indicates browser that script should start downloading immediately and should not block the rest of the page rendering, non-render blocking way of loading js

// defer - The script execution is defered until after all the document contents have been loaded completely, however script being downloaded immediately, but it's still not being executed

// In case script tag doesn't contain async or defer attribute it becomes render-blocking. In that case the browser will first parse and execute the script before it moves to the next line of code in your html.
// This impacts the loading of your web page