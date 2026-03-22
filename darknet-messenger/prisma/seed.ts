import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL!;

async function main() {
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const db = client.db();
        const collection = db.collection("Topic");

        const topics = [
            "história não contada do Brasil",
            "império oculto brasileiro",
            "sociedades secretas no Brasil",
            "governos paralelos",
            "agenda 2030",
            "nova ordem mundial",
            "controle populacional",
            "engenharia social",
            "manipulação midiática",
            "psicologia de massas",
            "elites globais",
            "elites satanistas",
            "rituais de poder",
            "sociedades secretas antigas",
            "illuminati moderno",
            "maçonaria avançada",
            "ordens ocultas",
            "cabalas modernas",
            "controle financeiro global",
            "bancos centrais ocultos",

            "aliens",
            "vida extraterrestre",
            "contato alienígena",
            "civilizações antigas avançadas",
            "tecnologia alienígena",
            "bases secretas subterrâneas",
            "area 51",
            "engenharia reversa alien",
            "ufos modernos",
            "abduções",

            "deep web",
            "dark web",
            "mercados ocultos",
            "informações vazadas",
            "redes privadas",
            "comunicação anônima",
            "protocolos secretos",
            "infraestrutura invisível",

            "consciência expandida",
            "energia vibracional",
            "simulação da realidade",
            "matrix real",
            "multiverso",
            "viagem astral",
            "dimensões paralelas"
        ];

        const docs = topics.map(name => ({
            name,
            category: "geral",
            createdAt: new Date()
        }));

        await collection.insertMany(docs);

        console.log("✅ Seed executado com sucesso");
    } catch (err) {
        console.error("❌ Erro:", err);
    } finally {
        await client.close();
    }
}

main();