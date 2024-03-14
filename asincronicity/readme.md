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
