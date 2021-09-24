# javascript-asincronismo
Curso de Asincronismo con JavaScript - Platzi

Resulta que JavaScript es un lenguaje de programación asíncrono. Lo que quiere decir esto es que al ejecutar código JavaScript el hilo de ejecución continuará a pesar de encontrarse en situaciones en las que no obtenga un resultado inmediatamente. Por ejemplo, cuando hacemos el pedido de información a un servidor, la respuesta posiblemente demore un poco. Sin embargo, el hilo de ejecución de JavaScript continuará con las demás tareas que hay en el código.

Un ejemplo práctico de esto sería una aplicación web que necesita llenar una tabla de datos, así que el código hará un pedido al servidor de los datos que necesita llenar. Pero el hilo de ejecución no se detiene así que ejecutará el código que pinta la tabla en el navegador. Esto se convierte en un problema ya que los datos del servidor llegan después de que la tabla se haya pintado en pantalla, una tabla sin datos obviamente.

así que trabajar con código asíncrono puede tener muchas ventajas, pero en casos como este presenta un gran problema. Pues bien, para solucionar esto algunas funciones de JavaScript tienen como parámetro algo que se conoce como callback.

## Contenido 
- Callbacks
- Promesas
- Método Fetch
- Async Await