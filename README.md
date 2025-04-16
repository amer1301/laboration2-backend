# REST-webbtjänst Arbetserfarenheter

Detta repository innehåller kod för ett enklare REST API byggt med Express. 
APIet är byggt för att hantera olika arbetslivserfarenheter för tidigare och nuvarande arbetsplatser. 
Grundläggande funktionalitet för CRUD (Create, Read, Update, Delete) är implementerad.

## 🌐 Länk

För lokal utveckling:
http://localhost:3000/api/workexperience

## CRUD-endpoints

| Operation      | HTTP-metod | URI                                      | Beskrivning                              |
|----------------|------------|------------------------------------------|------------------------------------------|
| **Create**     | `POST`     | `/api/workexperience`                   | Skapa en ny arbetserfarenhet             |
| **Read (alla)**| `GET`      | `/api/workexperience`                   | Hämta alla arbetserfarenheter            |
| **Read (en)**  | `GET`      | `/api/workexperience/:id`               | Hämta en specifik erfarenhet             |
| **Update**     | `PUT`      | `/api/workexperience/:id`               | Uppdatera en specifik erfarenhet         |
| **Delete**     | `DELETE`   | `/api/workexperience/:id`               | Ta bort en specifik erfarenhet           |

## 📥 Exempel: Skapa (POST)

```json
POST /api/workexperience

{
  "companyname": "Techbolaget AB",
  "jobtitle": "Utvecklare",
  "location": "Stockholm",
  "startdate": "2023-01-01",
  "enddate": "2024-12-31",
  "description": "Arbete med frontend i React."
}
