# 💇‍♀️ Kokosalon.com  
### Proyecto Intermodular – Sistemas Microinformáticos y Redes  
### Centro Integrado María Ana Sanz (Pamplona)  
### Grado Medio SMR

Este repositorio contiene el desarrollo completo del proyecto intermodular del ciclo **Sistemas Microinformáticos y Redes (SMR)** del **Centro Integrado María Ana Sanz**.  
El objetivo principal es crear una solución tecnológica real para una peluquería, incluyendo:

- Una **página web funcional**  
- Un **sistema de reservas online**  
- Una **base de datos integrada**  
- Una **infraestructura de red documentada**

---

## 📌 Descripción del proyecto

Kokosalon.com es una plataforma web diseñada para digitalizar la gestión de citas de una peluquería.  
El proyecto combina:

- Desarrollo web (HTML, CSS, JavaScript)  
- Backend con **Cloudflare Pages Functions**  
- Base de datos SQL con **Cloudflare D1**  
- Simulación y documentación de red local con **Cisco Packet Tracer**

El resultado es un sistema real de reservas online que almacena los datos en una base de datos en la nube y permite al negocio gestionar citas de forma moderna y eficiente.

---

## 🎯 Objetivos del proyecto

- Diseñar una página web minimalista, funcional y responsive.  
- Implementar un sistema de reservas online.  
- Integrar una base de datos SQL para almacenar citas.  
- Configurar un backend mediante Cloudflare Pages Functions.  
- Documentar la red local del negocio.  
- Simular la infraestructura en Cisco Packet Tracer.  
- Realizar pruebas reales de funcionamiento.

---

## 🛠️ Tecnologías utilizadas

### **Frontend**
- HTML5  
- CSS3  
- JavaScript  

### **Backend**
- Cloudflare Pages  
- Cloudflare Pages Functions (JavaScript)

### **Base de datos**
- Cloudflare D1 (SQLite gestionado en la nube)

### **Herramientas adicionales**
- Visual Studio Code  
- Cisco Packet Tracer  
- GitHub para control de versiones  

---

## 🗄️ Integración con la base de datos (Cloudflare D1)

La base de datos utilizada es **D1**, un motor SQL integrado en Cloudflare.  
Se creó una tabla llamada `citas` con los campos:

- id  
- nombre  
- email  
- fecha  
- sexo  
- mensaje  

El backend inserta los datos mediante una función ubicada en:

