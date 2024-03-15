# Asincronía

- Concurrencia
- Paralelismo

## Concurrencia

- Es un concepto más amplio que el paralelismo
- Se refiere a la capacidad de un sistema para manejar múltiples tareas al mismo tiempo
- No necesariamente implica que las tareas se ejecuten al mismo tiempo
- Ejemplo: Un sistema operativo que maneja múltiples procesos
- ES (Javascript) es un lenguaje concurrente: solo puede hacer una cosa a la vez
- Es muy importante evitar bloquear el hilo principal de ejecución -> `event loop` y la asincronía
- Actualmente puede delegar tareas a otros procesos

## Paralelismo

- Se refiere a la ejecución simultánea de múltiples tareas
- Implica concurrencia
- Ejemplo: Un sistema con múltiples núcleos de procesamiento
- Ejemplo de la vida real: Un equipo de trabajo ruinoso

## API Rest

Protocolo de comunicación entre cliente y servidor: http(s)

- Request: Petición del cliente
  - Method: Verbo http: GET, POST, PATCH / PUT, DELETE, etc.
  - URL: Dirección del recurso
  - Headers: Metadatos de la petición
  - Body: Datos de la petición
  - Query: Parámetros de la petición
  - Params: Parámetros de la petición
- Response: Respuesta del servidor

Ejemplo de petición:

```http
GET /users HTTP/1.1 
Host: api.example.com
```

Ejemplo de respuesta:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "users": [
    {
      "id": 1,
      "name": "John Doe"
    }
  ]
}
```

En un backend que implementa una API Rest, 
se pueden implementar diferentes funciones para manejar diferentes peticiones:

CRUD:

Read -> GET,
Create -> POST,
Update -> PATCH / PUT,  
Delete -> DELETE
