module.exports = [
"[project]/src/ai/genkit.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ai",
    ()=>ai
]);
(()=>{
    const e = new Error("Cannot find module 'genkit'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@genkit-ai/google-genai'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
const ai = genkit({
    plugins: [
        googleAI()
    ],
    // Agora usamos a string do modelo ao invés de variáveis, conforme a nova regra
    model: 'googleai/gemini-1.5-pro'
});
}),
"[project]/src/ai/flows/business-analysis-flow.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40f8add7cb5aa34a5c17e342fe3ebbd01f539b1f4a":"analyzeBusinessPerformance"},"",""] */ __turbopack_context__.s([
    "analyzeBusinessPerformance",
    ()=>analyzeBusinessPerformance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'genkit'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/genkit.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
// 1. Schemas de Dados
const BusinessAnalysisInputSchema = z.object({
    revenue: z.number(),
    expenses: z.number(),
    netProfit: z.number(),
    topProducts: z.array(z.object({
        name: z.string(),
        quantity: z.number()
    })),
    lowStockCount: z.number(),
    periodGoal: z.number(),
    goalProgress: z.number()
});
const BusinessAnalysisOutputSchema = z.object({
    summary: z.string().describe('Resumo executivo da performance do período.'),
    insights: z.array(z.string()).describe('Lista de 3 a 4 insights acionáveis.'),
    mood: z.enum([
        'good',
        'warning',
        'critical'
    ]).describe('Sentimento geral da operação.'),
    recommendation: z.string().describe('A principal recomendação do CEO/IA para o próximo período.')
});
// 2. Definição do Prompt (Escopo Global)
const analysisPrompt = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].definePrompt({
    name: 'businessAnalysisPrompt',
    input: {
        schema: BusinessAnalysisInputSchema
    },
    output: {
        format: 'json',
        schema: BusinessAnalysisOutputSchema
    },
    prompt: `Assuma sua posição no conselho reportando diretamente ao CEO do Bar do Luis, na Tavares Bastos.
  Sintetize as análises financeiras (CFO), operacionais (COO) e de receita (CRO) no seguinte cenário:
  
  RECEITA: R$ {{revenue}}
  DESPESAS: R$ {{expenses}}
  LUCRO LÍQUIDO: R$ {{netProfit}}
  PROGRESSO DA META: {{goalProgress}}% (Alvo: R$ {{periodGoal}})
  PRODUTOS COM ESTOQUE BAIXO: {{lowStockCount}} itens críticos
  TOP PRODUTOS (MIX):
  {{#each topProducts}} * {{name}}: {{quantity}} unidades
  {{/each}}
  
  DIRETRIZES DE RESPOSTA:
  1. Entregue um 'Resumo Executivo' (summary) de no máximo 3 frases com o diagnóstico atual da empresa.
  2. Forneça 3 a 4 'Insights Acionáveis' (insights) imediatos focados em eficiência e lucro.
  3. Defina o 'Sentimento Geral' (mood) estritamente como 'good', 'warning' ou 'critical'.
  4. Dê a recomendação final (recommendation) de mais alto impacto para o crescimento do negócio.`
}); // CTO: AQUI ESTÁ O FECHAMENTO QUE ESTAVA FALTANDO! ✅
// 3. Definição do Flow (Escopo Global)
const businessAnalysisFlow = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$genkit$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ai"].defineFlow({
    name: 'businessAnalysisFlow',
    inputSchema: BusinessAnalysisInputSchema,
    outputSchema: BusinessAnalysisOutputSchema
}, async (input)=>{
    const { output } = await analysisPrompt(input);
    // CTO: Tratamento de erro caso a API falhe na resposta
    if (!output) {
        throw new Error("Falha na API: O Genkit não retornou uma análise válida.");
    }
    return output;
});
async function analyzeBusinessPerformance(input) {
    return businessAnalysisFlow(input);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    analyzeBusinessPerformance
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(analyzeBusinessPerformance, "40f8add7cb5aa34a5c17e342fe3ebbd01f539b1f4a", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/business-analysis-flow.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$business$2d$analysis$2d$flow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/business-analysis-flow.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/ai/flows/business-analysis-flow.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40f8add7cb5aa34a5c17e342fe3ebbd01f539b1f4a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$business$2d$analysis$2d$flow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["analyzeBusinessPerformance"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$ai$2f$flows$2f$business$2d$analysis$2d$flow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/ai/flows/business-analysis-flow.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$business$2d$analysis$2d$flow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/ai/flows/business-analysis-flow.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_96aea56c._.js.map