# MVP 1 — Sistema de Usuarios y Personajes

> Base funcional de InterWorld. Define el sistema de identidad del bot: registro de usuarios y gestión completa de personajes, incluyendo el sistema de roleplay mediante webhooks.

---

## Objetivo

Implementar el núcleo del sistema de identidad de InterWorld, compuesto por el módulo de usuarios y el módulo de personajes, como prerequisito para todos los módulos futuros del ecosistema.

---

## Comandos

| Comando | Descripción | Alias | Estado |
|---------|-------------|-------|--------|
| `!create` | Registra al usuario en el sistema de InterWorld | — | ✅ |
| `!newchart` | Crea un nuevo personaje vinculado al usuario y servidor | — | ✅ |
| `!chart-list` | Lista personajes con opciones de edición y eliminación | `charts`, `personajes`, `characters` | ✅ |
| `!help` | Información general del bot y comandos disponibles | — | ⏳ |

---

## Funcionalidades

### Sistema de Roleplay
Activación al escribir `[nickname]: <texto>`. El bot elimina el mensaje original y lo reenvía como el personaje vía webhook.

- [x] Verificación de propiedad del personaje
- [x] Verificación de vinculación al servidor
- [x] Caché local de webhooks (TTL 8 min)
- [x] Recuperación ante reinicios del bot (Discord como fuente de verdad)
- [x] Limpieza automática de webhooks expirados

---

## Schemas involucrados

- `users` — Usuarios registrados en el sistema
- `characters` — Personajes vinculados a usuarios y servidores

---

## Criterio de Completado

- [ ] Usuario puede registrarse con `!create`
- [ ] Usuario puede crear, ver, editar y eliminar personajes
- [ ] Sistema de roleplay detecta y envía mensajes como el personaje
- [ ] Webhooks operan con caché y se recuperan ante reinicios
- [ ] Comando `!help` implementado

---

## Pendientes

- [ ] `!help` — Información básica del bot y lista de comandos
