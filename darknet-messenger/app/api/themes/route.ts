import { NextResponse } from 'next/server';

export async function GET() {
    const darkNetThemes = {
        status: "success",
        metadata: {
            total_active_agents: 13,
            last_scan: new Date().toISOString(),
        },
        categories: [
            "Estruturas de Poder & Controlo",
            "Fronteiras Tecnológicas",
            "Mente & Percepção",
            "Mistérios & Ocultismo",
            "Fronteiras da Ciência"
        ],
        themes: [
            // Categoria: Estruturas de Poder & Controlo
            { id: "thm_001", title: "Conspirações", description: "Análise de teorias não oficiais e agendas globais ocultas.", category: "Estruturas de Poder & Controlo", updateFrequency: "daily", minPlan: "lite" },
            { id: "thm_005", title: "Manipulação em Massa", description: "Táticas de controlo social e engenharia de massas.", category: "Estruturas de Poder & Controlo", updateFrequency: "weekly", minPlan: "lite" },
            { id: "thm_007", title: "Acesso Restrito", description: "Ficheiros e zonas digitais bloqueadas ao público comum.", category: "Estruturas de Poder & Controlo", updateFrequency: "monthly", minPlan: "premium" },
            { id: "thm_017", title: "Vigilância Global", description: "Monitorização e os olhos do estado sobre a população.", category: "Estruturas de Poder & Controlo", updateFrequency: "daily", minPlan: "lite" },
            { id: "thm_028", title: "Estruturas de Poder", description: "Organizações não governamentais que ditam o rumo mundial.", category: "Estruturas de Poder & Controlo", updateFrequency: "monthly", minPlan: "premium" },
            { id: "thm_029", title: "Engenharia Social", description: "Técnicas de infiltração e manipulação de alvos humanos.", category: "Estruturas de Poder & Controlo", updateFrequency: "weekly", minPlan: "pro" },
            { id: "thm_030", title: "Narrativas Coletivas", description: "Como a história recente tem sido reescrita em tempo real.", category: "Estruturas de Poder & Controlo", updateFrequency: "weekly", minPlan: "lite" },
            { id: "thm_031", title: "Economia Oculta", description: "Rotas de capital negro e mercados paralelos (darknet markets).", category: "Estruturas de Poder & Controlo", updateFrequency: "daily", minPlan: "premium" },
            { id: "thm_033", title: "Desinformação", description: "Operações psicológicas (psy-ops) e propagação de fake news armadas.", category: "Estruturas de Poder & Controlo", updateFrequency: "daily", minPlan: "premium" },
            { id: "thm_036", title: "História Alternativa", description: "Versões censuradas de eventos históricos cruciais.", category: "Estruturas de Poder & Controlo", updateFrequency: "monthly", minPlan: "lite" },

            // Categoria: Fronteiras Tecnológicas
            { id: "thm_002", title: "Cibermistérios", description: "Enigmas criptográficos não resolvidos na web profunda.", category: "Fronteiras Tecnológicas", updateFrequency: "weekly", minPlan: "lite" },
            { id: "thm_015", title: "Distopias", description: "Previsões sombrias baseadas no rumo da tecnologia atual.", category: "Fronteiras Tecnológicas", updateFrequency: "monthly", minPlan: "lite" },
            { id: "thm_016", title: "Inteligência Artificial", description: "Modelos Rogue (sem censura) e a ascensão da IA autónoma.", category: "Fronteiras Tecnológicas", updateFrequency: "daily", minPlan: "premium" },
            { id: "thm_018", title: "Tecnologias Emergentes", description: "Hardware e software desenvolvidos fora do radar comercial.", category: "Fronteiras Tecnológicas", updateFrequency: "weekly", minPlan: "pro" },
            { id: "thm_019", title: "Teoria da Simulação", description: "Provas digitais e filosóficas de que não vivemos na realidade base.", category: "Fronteiras Tecnológicas", updateFrequency: "monthly", minPlan: "lite" },
            { id: "thm_020", title: "A Internet Oculta", description: "Deep web, darknets e redes P2P invisíveis.", category: "Fronteiras Tecnológicas", updateFrequency: "daily", minPlan: "premium" },
            { id: "thm_021", title: "Automação Extrema", description: "Substituição biológica e colapso do trabalho tradicional.", category: "Fronteiras Tecnológicas", updateFrequency: "weekly", minPlan: "pro" },
            { id: "thm_022", title: "Bioengenharia", description: "Transumanismo, edição genética ilegal (CRISPR) e biohacking.", category: "Fronteiras Tecnológicas", updateFrequency: "monthly", minPlan: "pro" },
            { id: "thm_023", title: "Imortalidade", description: "Estudos secretos sobre a extensão indefinida da vida.", category: "Fronteiras Tecnológicas", updateFrequency: "monthly", minPlan: "premium" },
            
            // Categoria: Mente & Percepção
            { id: "thm_008", title: "Expansão da Consciência", description: "Técnicas proibidas e neurotecnologia para transcender a mente.", category: "Mente & Percepção", updateFrequency: "monthly", minPlan: "lite" },
            { id: "thm_009", title: "Ilusões Perceptivas", description: "Como os nossos sentidos são enganados pela tecnologia moderna.", category: "Mente & Percepção", updateFrequency: "weekly", minPlan: "lite" },
            { id: "thm_010", title: "Psicologia Sombria", description: "O uso da mente humana como arma de influência profunda.", category: "Mente & Percepção", updateFrequency: "daily", minPlan: "premium" },
            { id: "thm_011", title: "O Inconsciente", description: "O que realmente habita na parte invisível da nossa mente.", category: "Mente & Percepção", updateFrequency: "monthly", minPlan: "premium" },
            { id: "thm_012", title: "Estados Alterados", description: "Ondas cerebrais, indução tecnológica e privação sensorial.", category: "Mente & Percepção", updateFrequency: "weekly", minPlan: "pro" },
            { id: "thm_013", title: "Subconsciente", description: "Programação neurolinguística oculta nos media.", category: "Mente & Percepção", updateFrequency: "daily", minPlan: "lite" },
            { id: "thm_032", title: "Controlo Mental", description: "Herança dos projetos MK Ultra aplicados à era digital.", category: "Mente & Percepção", updateFrequency: "weekly", minPlan: "pro" },
            { id: "thm_046", title: "Existencialismo", description: "O impacto da tecnologia extrema na condição humana.", category: "Mente & Percepção", updateFrequency: "monthly", minPlan: "lite" },
            { id: "thm_049", title: "Distorção da Verdade", description: "O efeito Mandela e falhas cognitivas em massa.", category: "Mente & Percepção", updateFrequency: "weekly", minPlan: "premium" },
            
            // Categoria: Mistérios & Ocultismo
            { id: "thm_003", title: "Ciência Oculta", description: "Documentos recuperados que unem misticismo e física quântica.", category: "Mistérios & Ocultismo", updateFrequency: "monthly", minPlan: "premium" },
            { id: "thm_006", title: "Conhecimento Proibido", description: "Livros e grimórios expurgados da internet de superfície.", category: "Mistérios & Ocultismo", updateFrequency: "monthly", minPlan: "pro" },
            { id: "thm_014", title: "Simbolismo", description: "Comunicação visual cifrada em eventos corporativos e estatais.", category: "Mistérios & Ocultismo", updateFrequency: "weekly", minPlan: "lite" },
            { id: "thm_034", title: "Civilizações Perdidas", description: "Vestígios apagados por satélites e arquivos confidenciais.", category: "Mistérios & Ocultismo", updateFrequency: "monthly", minPlan: "lite" },
            { id: "thm_035", title: "Artefatos Misteriosos", description: "Objetos fora do seu tempo recuperados na deep web.", category: "Mistérios & Ocultismo", updateFrequency: "weekly", minPlan: "premium" },
            { id: "thm_037", title: "Relíquias Antigas", description: "Mercado negro focado em antiguidades com propriedades anómalas.", category: "Mistérios & Ocultismo", updateFrequency: "monthly", minPlan: "pro" },
            { id: "thm_038", title: "Esoterismo", description: "Seitas e grupos fechados a operar ativamente no digital.", category: "Mistérios & Ocultismo", updateFrequency: "weekly", minPlan: "lite" },
            { id: "thm_039", title: "Mitologia Oculta", description: "Verdades escondidas nas lendas que moldaram a humanidade.", category: "Mistérios & Ocultismo", updateFrequency: "monthly", minPlan: "premium" },
            { id: "thm_047", title: "Espaços Liminares", description: "Zonas transitórias, backrooms e locais onde a realidade se desfoca.", category: "Mistérios & Ocultismo", updateFrequency: "weekly", minPlan: "lite" },

            // Categoria: Fronteiras da Ciência
            { id: "thm_004", title: "Fenómenos Inexplicáveis", description: "Registos classificados de UAPs (OVNIs) e anomalias atmosféricas.", category: "Fronteiras da Ciência", updateFrequency: "daily", minPlan: "lite" },
            { id: "thm_024", title: "Fronteiras da Ciência", description: "Estudos não revistos por pares sobre manipulação da matéria.", category: "Fronteiras da Ciência", updateFrequency: "monthly", minPlan: "premium" },
            { id: "thm_025", title: "Física Desconhecida", description: "Antigravidade e propulsão classificada militarmente.", category: "Fronteiras da Ciência", updateFrequency: "weekly", minPlan: "pro" },
            { id: "thm_026", title: "Multidimensões", description: "Testes laboratoriais não divulgados sobre física de cordas.", category: "Fronteiras da Ciência", updateFrequency: "monthly", minPlan: "pro" },
            { id: "thm_027", title: "Energias Invisíveis", description: "Sinais de rádio fantasma, anomalias magnéticas e frequências obscuras.", category: "Fronteiras da Ciência", updateFrequency: "weekly", minPlan: "premium" },
            { id: "thm_040", title: "Padrões Secretos", description: "Matemática oculta presente nos mercados financeiros e clima.", category: "Fronteiras da Ciência", updateFrequency: "daily", minPlan: "premium" },
            { id: "thm_041", title: "Sincronicidade", description: "Estudo dos algoritmos por trás das 'coincidências' numéricas.", category: "Fronteiras da Ciência", updateFrequency: "weekly", minPlan: "lite" },
            { id: "thm_042", title: "Geometria Sagrada", description: "Construções modernas baseadas no poder vibracional de formas.", category: "Fronteiras da Ciência", updateFrequency: "monthly", minPlan: "lite" },
            { id: "thm_043", title: "Ciclos Repetitivos", description: "Cálculos sobre eventos massivos que operam em loop temporal.", category: "Fronteiras da Ciência", updateFrequency: "monthly", minPlan: "premium" },
            { id: "thm_044", title: "Conexões Ocultas", description: "Análise de rede (Network Analysis) ligando indivíduos aparentemente não relacionados.", category: "Fronteiras da Ciência", updateFrequency: "weekly", minPlan: "pro" },
            { id: "thm_045", title: "O Desconhecido", description: "Anomalias marítimas e exploração deep-sea classificada.", category: "Fronteiras da Ciência", updateFrequency: "monthly", minPlan: "lite" },
            { id: "thm_048", title: "Teoria do Caos", description: "Modelos preditivos em sistemas aparentemente aleatórios.", category: "Fronteiras da Ciência", updateFrequency: "weekly", minPlan: "premium" },
            { id: "thm_050", title: "O Invisível", description: "Campos de força, camuflagem ótica e metamateriais.", category: "Fronteiras da Ciência", updateFrequency: "monthly", minPlan: "pro" }
        ]
    };

    return NextResponse.json(darkNetThemes);
}