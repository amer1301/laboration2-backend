# REST-webbtjänst Arbetserfarenheter (MongoDB + Express)

Detta repository innehåller koden för en REST-baserad webbtjänst byggd i **Node.js** med **Express** och **MongoDB** som databas. Syftet är att hantera användarens arbetserfarenheter genom full CRUD-funktionalitet (Create, Read, Update, Delete).

Databaskommunikation sker via **Mongoose**, som hanterar schema och validering. API:et returnerar data i JSON-format och stödjer CORS för att kunna användas från externa webbplatser.

## 🚀 Teknisk översikt

- Backend: Node.js + Express
- Databas: MongoDB (lokal eller via Atlas)
- ODM: Mongoose
- CORS: Aktiverat för cross-origin-anrop
- Inputvalidering sker både via Mongoose-schema och på klientsidan

## 🌐 Länk (vid lokal utveckling)

http://localhost:3000/api/workexperience


## 📚 CRUD-endpoints

| Operation      | Metod  | URI                                | Beskrivning                          |
|----------------|--------|-------------------------------------|--------------------------------------|
| **Create**     | POST   | `/api/workexperience`              | Skapa en ny arbetserfarenhet         |
| **Read (alla)**| GET    | `/api/workexperience`              | Hämta alla arbetserfarenheter        |
| **Read (en)**  | GET    | `/api/workexperience/:id`          | Hämta en specifik erfarenhet         |
| **Update**     | PUT    | `/api/workexperience/:id`          | Uppdatera en specifik erfarenhet     |
| **Delete**     | DELETE | `/api/workexperience/:id`          | Ta bort en specifik erfarenhet       |

## 📥 Exempel: Skapa (POST)

```http
POST /api/workexperience
Content-Type: application/json

{
  "companyname": "Techbolaget AB",
  "jobtitle": "Utvecklare",
  "location": "Stockholm",
  "startdate": "2023-01-01",
  "enddate": "2024-12-31",
  "description": "Arbete med frontend i React."
}

## 🧩 Datamodell (via Mongoose)

const WorkExperienceSchema = new mongoose.Schema({
  companyname: { type: String, required: true },
  jobtitle:    { type: String, required: true },
  location:    { type: String, required: true },
  startdate:   { type: Date,   required: true },
  enddate:     { type: Date },
  description: { type: String }
});