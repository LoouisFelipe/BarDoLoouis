(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/contexts/data-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataProvider",
    ()=>DataProvider,
    "useData",
    ()=>useData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/ui/use-toast.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const DataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const DataProvider = ({ children })=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [suppliers, setSuppliers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gameModalities, setGameModalities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recurringExpenses, setRecurringExpenses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [purchaseItems, setPurchaseItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DataProvider.useEffect": ()=>{
            if (!user || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]) {
                setLoading(false);
                return;
            }
            setLoading(true);
            const unsubs = [];
            // Função auxiliar para assinar coleções
            const subscribe = {
                "DataProvider.useEffect.subscribe": (collectionName, setter)=>{
                    // Tenta ordenar por createdAt se possível, senão pega a coleção padrão
                    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], collectionName));
                    const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                        "DataProvider.useEffect.subscribe.unsub": (snapshot)=>{
                            const data = snapshot.docs.map({
                                "DataProvider.useEffect.subscribe.unsub.data": (doc)=>({
                                        id: doc.id,
                                        ...doc.data()
                                    })
                            }["DataProvider.useEffect.subscribe.unsub.data"]);
                            setter(data);
                        }
                    }["DataProvider.useEffect.subscribe.unsub"], {
                        "DataProvider.useEffect.subscribe.unsub": (error)=>{
                            console.error(`Erro ao sincronizar ${collectionName}:`, error);
                        }
                    }["DataProvider.useEffect.subscribe.unsub"]);
                    unsubs.push(unsub);
                }
            }["DataProvider.useEffect.subscribe"];
            subscribe('products', setProducts);
            subscribe('orders', setOrders);
            subscribe('customers', setCustomers);
            subscribe('suppliers', setSuppliers);
            subscribe('game_modalities', setGameModalities);
            subscribe('transactions', setTransactions);
            subscribe('recurring_expenses', setRecurringExpenses);
            subscribe('purchase_items', setPurchaseItems);
            setLoading(false);
            return ({
                "DataProvider.useEffect": ()=>{
                    unsubs.forEach({
                        "DataProvider.useEffect": (unsub)=>unsub()
                    }["DataProvider.useEffect"]);
                }
            })["DataProvider.useEffect"];
        }
    }["DataProvider.useEffect"], [
        user
    ]);
    // Exemplo de funções CRUD para Produtos
    const addProduct = async (data)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'products'), {
                ...data,
                createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            });
            toast({
                title: "Produto adicionado com sucesso!"
            });
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "Erro",
                description: "Falha ao adicionar produto."
            });
            throw error;
        }
    };
    const updateProduct = async (id, data)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'products', id), {
                ...data,
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            });
            toast({
                title: "Produto atualizado!"
            });
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "Erro",
                description: "Falha ao atualizar produto."
            });
            throw error;
        }
    };
    const deleteProduct = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'products', id));
            toast({
                title: "Produto removido!"
            });
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                title: "Erro",
                description: "Falha ao remover produto."
            });
            throw error;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DataContext.Provider, {
        value: {
            products,
            orders,
            customers,
            suppliers,
            gameModalities,
            transactions,
            recurringExpenses,
            purchaseItems,
            loading,
            addProduct,
            updateProduct,
            deleteProduct
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/data-context.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DataProvider, "ukZYr8mS2xGVFRF2netVtUVj7vo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = DataProvider;
const useData = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
_s1(useData, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "DataProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-report-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReportData",
    ()=>useReportData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isWithinInterval.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfDay.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subDays.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInDays.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDaysInMonth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/getDaysInMonth.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useReportData = ({ transactions, products, gameModalities, customers, date, periodGoal })=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useReportData.useMemo": ()=>{
            if (!date?.from) return null;
            const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(date.from);
            const to = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(date.to || date.from);
            const interval = {
                start: from,
                end: to
            };
            // 1. Filtragem do Período Selecionado
            const filteredTransactions = (transactions || []).filter({
                "useReportData.useMemo.filteredTransactions": (t)=>{
                    const timestamp = t.timestamp?.toDate ? t.timestamp.toDate() : t.timestamp;
                    return timestamp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(timestamp, interval);
                }
            }["useReportData.useMemo.filteredTransactions"]);
            // 2. Lógica CFO: Cálculo de Meta Mensal (Break-Even)
            const monthStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(from);
            const monthEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(from);
            const daysInMonth = Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDaysInMonth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDaysInMonth"])(from), 1);
            const daysInPeriod = Math.max((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInDays"])(to, from) + 1, 1);
            // Soma TODAS as despesas do mês inteiro para definir o ponto de equilíbrio
            const totalMonthlyExpenses = (transactions || []).filter({
                "useReportData.useMemo.totalMonthlyExpenses": (t)=>{
                    const timestamp = t.timestamp?.toDate ? t.timestamp.toDate() : t.timestamp;
                    return t.type === 'expense' && timestamp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(timestamp, {
                        start: monthStart,
                        end: monthEnd
                    });
                }
            }["useReportData.useMemo.totalMonthlyExpenses"]).reduce({
                "useReportData.useMemo.totalMonthlyExpenses": (acc, t)=>acc + (t.total || 0)
            }["useReportData.useMemo.totalMonthlyExpenses"], 0);
            const dailyExpenseRate = totalMonthlyExpenses / daysInMonth;
            const dynamicCostGoal = dailyExpenseRate * daysInPeriod;
            // 3. Comparativo com Período Anterior (Deltas)
            const daysDiff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInDays"])(to, from) + 1;
            const prevFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(from, daysDiff));
            const prevTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subDays$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subDays"])(to, daysDiff));
            const prevInterval = {
                start: prevFrom,
                end: prevTo
            };
            const prevTransactions = (transactions || []).filter({
                "useReportData.useMemo.prevTransactions": (t)=>{
                    const timestamp = t.timestamp?.toDate ? t.timestamp.toDate() : t.timestamp;
                    return timestamp && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isWithinInterval$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithinInterval"])(timestamp, prevInterval);
                }
            }["useReportData.useMemo.prevTransactions"]);
            const calculateMetrics = {
                "useReportData.useMemo.calculateMetrics": (txs)=>{
                    let revenue = 0;
                    let gameRevenue = 0;
                    let cashInflow = 0;
                    let expenses = 0;
                    let pendingExpenses = 0;
                    let insumos = 0;
                    let salesCount = 0;
                    let cogs = 0;
                    txs.forEach({
                        "useReportData.useMemo.calculateMetrics": (t)=>{
                            const isPaid = t.status !== 'pending';
                            if (t.type === 'sale') {
                                revenue += t.total || 0;
                                salesCount++;
                                if (t.paymentMethod !== 'Fiado') {
                                    cashInflow += (t.total || 0) - (t.creditApplied || 0);
                                }
                                if (t.items) {
                                    t.items.forEach({
                                        "useReportData.useMemo.calculateMetrics": (item)=>{
                                            const isGame = (gameModalities || []).some({
                                                "useReportData.useMemo.calculateMetrics": (gm)=>gm.id === item.productId
                                            }["useReportData.useMemo.calculateMetrics"]) || !!item.identifier;
                                            if (isGame) {
                                                gameRevenue += item.unitPrice * item.quantity;
                                            }
                                            const product = (products || []).find({
                                                "useReportData.useMemo.calculateMetrics.product": (p)=>p.id === item.productId
                                            }["useReportData.useMemo.calculateMetrics.product"]);
                                            if (product) {
                                                const baseUnitSize = product.baseUnitSize || 1;
                                                const costPerMl = (product.costPrice || 0) / baseUnitSize;
                                                const itemSize = item.size || 1;
                                                const effectiveCost = item.size ? costPerMl * itemSize : product.costPrice || 0;
                                                cogs += effectiveCost * (item.quantity || 1);
                                            }
                                        }
                                    }["useReportData.useMemo.calculateMetrics"]);
                                }
                            } else if (t.type === 'payment') {
                                cashInflow += t.total || 0;
                            } else if (t.type === 'expense') {
                                if (isPaid) {
                                    expenses += t.total || 0;
                                    if (t.expenseCategory === 'Insumos') insumos += t.total || 0;
                                } else {
                                    pendingExpenses += t.total || 0;
                                }
                            }
                        }
                    }["useReportData.useMemo.calculateMetrics"]);
                    const grossProfit = revenue - cogs;
                    const netProfit = grossProfit - expenses;
                    const avgTicket = salesCount > 0 ? revenue / salesCount : 0;
                    return {
                        revenue,
                        gameRevenue,
                        cashInflow,
                        expenses,
                        pendingExpenses,
                        insumos,
                        salesCount,
                        grossProfit,
                        netProfit,
                        avgTicket
                    };
                }
            }["useReportData.useMemo.calculateMetrics"];
            const currentMetrics = calculateMetrics(filteredTransactions);
            const prevMetrics = calculateMetrics(prevTransactions);
            const calculateDelta = {
                "useReportData.useMemo.calculateDelta": (curr, prev)=>{
                    if (prev <= 0) return curr > 0 ? 100 : 0;
                    return (curr - prev) / prev * 100;
                }
            }["useReportData.useMemo.calculateDelta"];
            // 4. Mapeamento de Gráficos e Heatmap
            const topProductsMap = new Map();
            const profitByProductMap = new Map();
            const salesByPaymentMethodMap = new Map();
            const cashInflowByMethodMap = new Map();
            const expensesByCategoryMap = new Map();
            const purchasesBySupplierMap = new Map();
            const heatmapMap = new Map();
            const salesByHourMap = new Map();
            filteredTransactions.forEach({
                "useReportData.useMemo": (t)=>{
                    const endTimestamp = t.timestamp?.toDate ? t.timestamp.toDate() : t.timestamp;
                    if (!endTimestamp) return;
                    const isPaid = t.status !== 'pending';
                    if (t.type === 'sale') {
                        const hourLabel = `${String(endTimestamp.getHours()).padStart(2, '0')}:00`;
                        const hourCount = salesByHourMap.get(hourLabel) || 0;
                        salesByHourMap.set(hourLabel, hourCount + (t.total || 0));
                        const day = endTimestamp.getDay();
                        const hour = endTimestamp.getHours();
                        const heatmapKey = `${day}-${hour}`;
                        heatmapMap.set(heatmapKey, (heatmapMap.get(heatmapKey) || 0) + (t.total || 0));
                        const method = t.paymentMethod || 'Outros';
                        salesByPaymentMethodMap.set(method, (salesByPaymentMethodMap.get(method) || 0) + (t.total || 0));
                        if (method !== 'Fiado') {
                            cashInflowByMethodMap.set(method, (cashInflowByMethodMap.get(method) || 0) + (t.total || 0) - (t.creditApplied || 0));
                        }
                        if (t.items) {
                            t.items.forEach({
                                "useReportData.useMemo": (item)=>{
                                    const product = (products || []).find({
                                        "useReportData.useMemo.product": (p)=>p.id === item.productId
                                    }["useReportData.useMemo.product"]);
                                    const detail = item.doseName || item.subcategory || product?.subcategory;
                                    const displayName = detail ? `${item.name} (${detail})` : item.name;
                                    topProductsMap.set(displayName, (topProductsMap.get(displayName) || 0) + (item.quantity || 1));
                                    if (product) {
                                        const baseUnitSize = product.baseUnitSize || 1;
                                        const costPerMl = (product.costPrice || 0) / baseUnitSize;
                                        const itemSize = item.size || 1;
                                        const effectiveCost = item.size ? costPerMl * itemSize : product.costPrice || 0;
                                        const profit = ((item.unitPrice || 0) - effectiveCost) * (item.quantity || 1);
                                        profitByProductMap.set(displayName, (profitByProductMap.get(displayName) || 0) + profit);
                                    }
                                }
                            }["useReportData.useMemo"]);
                        }
                    } else if (t.type === 'payment') {
                        const method = t.paymentMethod || 'Dinheiro';
                        cashInflowByMethodMap.set(method, (cashInflowByMethodMap.get(method) || 0) + (t.total || 0));
                    } else if (t.type === 'expense' && isPaid) {
                        const cat = t.expenseCategory || 'Geral';
                        expensesByCategoryMap.set(cat, (expensesByCategoryMap.get(cat) || 0) + (t.total || 0));
                        if (cat === 'Insumos') {
                            const supplier = t.description?.replace('Compra: ', '') || 'Outros';
                            purchasesBySupplierMap.set(supplier, (purchasesBySupplierMap.get(supplier) || 0) + (t.total || 0));
                        }
                    }
                }
            }["useReportData.useMemo"]);
            // 5. Definição Final da Meta do Cockpit
            const finalGoal = periodGoal > 0 ? periodGoal : totalMonthlyExpenses;
            const goalProgress = finalGoal > 0 ? currentMetrics.revenue / finalGoal * 100 : currentMetrics.revenue > 0 ? 100 : 0;
            const salesHeatmapData = [];
            for(let day = 0; day < 7; day++){
                for(let hour = 0; hour < 24; hour++){
                    salesHeatmapData.push({
                        day,
                        hour,
                        value: heatmapMap.get(`${day}-${hour}`) || 0
                    });
                }
            }
            return {
                totalSalesRevenue: currentMetrics.revenue || 0,
                totalCashInflow: currentMetrics.cashInflow || 0,
                totalExpenses: currentMetrics.expenses || 0,
                totalPendingExpenses: currentMetrics.pendingExpenses || 0,
                totalInsumos: currentMetrics.insumos || 0,
                grossProfit: currentMetrics.grossProfit || 0,
                netProfit: currentMetrics.netProfit || 0,
                salesCount: currentMetrics.salesCount || 0,
                avgTicket: currentMetrics.avgTicket || 0,
                goalProgress,
                finalGoal,
                dailyGoal: dailyExpenseRate,
                totalMonthlyExpenses,
                daysInPeriod,
                deltas: {
                    revenue: calculateDelta(currentMetrics.revenue, prevMetrics.revenue),
                    cashInflow: calculateDelta(currentMetrics.cashInflow, prevMetrics.cashInflow),
                    expenses: calculateDelta(currentMetrics.expenses, prevMetrics.expenses),
                    insumos: calculateDelta(currentMetrics.insumos, prevMetrics.insumos),
                    grossProfit: calculateDelta(currentMetrics.grossProfit, prevMetrics.grossProfit),
                    netProfit: calculateDelta(currentMetrics.netProfit, prevMetrics.netProfit),
                    salesCount: calculateDelta(currentMetrics.salesCount, prevMetrics.salesCount),
                    avgTicket: calculateDelta(currentMetrics.avgTicket, prevMetrics.avgTicket)
                },
                topProducts: Array.from(topProductsMap.entries()).map({
                    "useReportData.useMemo": ([name, quantity])=>({
                            name,
                            quantity
                        })
                }["useReportData.useMemo"]).sort({
                    "useReportData.useMemo": (a, b)=>b.quantity - a.quantity
                }["useReportData.useMemo"]).slice(0, 10),
                profitByProduct: Array.from(profitByProductMap.entries()).map({
                    "useReportData.useMemo": ([name, profit])=>({
                            name,
                            profit
                        })
                }["useReportData.useMemo"]).sort({
                    "useReportData.useMemo": (a, b)=>b.profit - a.profit
                }["useReportData.useMemo"]).slice(0, 10),
                salesHeatmapData,
                salesByHourForChart: Array.from({
                    length: 24
                }, {
                    "useReportData.useMemo": (_, i)=>({
                            hour: `${String(i).padStart(2, '0')}:00`,
                            vendas: salesByHourMap.get(`${String(i).padStart(2, '0')}:00`) || 0
                        })
                }["useReportData.useMemo"]),
                salesTransactions: filteredTransactions.filter({
                    "useReportData.useMemo": (t)=>t.type === 'sale'
                }["useReportData.useMemo"]),
                expenseTransactions: filteredTransactions.filter({
                    "useReportData.useMemo": (t)=>t.type === 'expense'
                }["useReportData.useMemo"]),
                purchaseTransactions: filteredTransactions.filter({
                    "useReportData.useMemo": (t)=>t.type === 'expense' && t.expenseCategory === 'Insumos'
                }["useReportData.useMemo"]),
                paymentTransactions: filteredTransactions.filter({
                    "useReportData.useMemo": (t)=>t.type === 'payment'
                }["useReportData.useMemo"]),
                salesByPaymentMethodForChart: Array.from(salesByPaymentMethodMap.entries()).map({
                    "useReportData.useMemo": ([name, value])=>({
                            name,
                            value
                        })
                }["useReportData.useMemo"]),
                cashInflowByMethodForChart: Array.from(cashInflowByMethodMap.entries()).map({
                    "useReportData.useMemo": ([name, value])=>({
                            name,
                            value
                        })
                }["useReportData.useMemo"]),
                expensesByCategoryForChart: Array.from(expensesByCategoryMap.entries()).map({
                    "useReportData.useMemo": ([name, value])=>({
                            name,
                            value
                        })
                }["useReportData.useMemo"]),
                purchasesBySupplierForChart: Array.from(purchasesBySupplierMap.entries()).map({
                    "useReportData.useMemo": ([name, value])=>({
                            name,
                            value
                        })
                }["useReportData.useMemo"]),
                customersWithDebt: (customers || []).filter({
                    "useReportData.useMemo": (c)=>(c.balance || 0) > 0
                }["useReportData.useMemo"]).length,
                totalCustomerDebt: (customers || []).reduce({
                    "useReportData.useMemo": (sum, c)=>sum + (c.balance || 0)
                }["useReportData.useMemo"], 0),
                outOfStockProducts: (products || []).filter({
                    "useReportData.useMemo": (p)=>p.saleType !== 'service' && (p.stock || 0) <= 0
                }["useReportData.useMemo"]).length,
                totalProducts: (products || []).length
            };
        }
    }["useReportData.useMemo"], [
        transactions,
        products,
        gameModalities,
        customers,
        date,
        periodGoal
    ]);
};
_s(useReportData, "nwk+m61qLgjDVUp4IGV/072DDN4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/use-open-orders.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOpenOrders",
    ()=>useOpenOrders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/error-emitter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/firebase/errors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$memo$2d$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-memo-firebase.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const useOpenOrders = ()=>{
    _s();
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirestore"])();
    const [openOrders, setOpenOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // CTO: Uso do hook especializado para evitar loops infinitos em listeners
    const ordersCol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$memo$2d$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoFirebase"])({
        "useOpenOrders.useMemoFirebase[ordersCol]": ()=>db ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'open_orders') : null
    }["useOpenOrders.useMemoFirebase[ordersCol]"], [
        db
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useOpenOrders.useEffect": ()=>{
            if (!db || !ordersCol) {
                setLoading(false);
                return;
            }
            setLoading(true);
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(ordersCol, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('status', '==', 'open'));
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                "useOpenOrders.useEffect.unsubscribe": (snapshot)=>{
                    const orders = snapshot.docs.map({
                        "useOpenOrders.useEffect.unsubscribe.orders": (doc)=>{
                            const data = doc.data();
                            return {
                                id: doc.id,
                                ...data,
                                createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(),
                                closedAt: data.closedAt?.toDate ? data.closedAt.toDate() : null
                            };
                        }
                    }["useOpenOrders.useEffect.unsubscribe.orders"]);
                    setOpenOrders(orders);
                    setError(null);
                    setLoading(false);
                }
            }["useOpenOrders.useEffect.unsubscribe"], {
                "useOpenOrders.useEffect.unsubscribe": (err)=>{
                    const contextualError = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirestorePermissionError"]({
                        operation: 'list',
                        path: 'open_orders'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$error$2d$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorEmitter"].emit('permission-error', contextualError);
                    setError(err);
                    setLoading(false);
                    // CTO: Se não temos permissão, paramos de escutar para evitar loops de erro.
                    unsubscribe();
                }
            }["useOpenOrders.useEffect.unsubscribe"]);
            return ({
                "useOpenOrders.useEffect": ()=>unsubscribe()
            })["useOpenOrders.useEffect"];
        }
    }["useOpenOrders.useEffect"], [
        db,
        ordersCol
    ]);
    const createOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOpenOrders.useCallback[createOrder]": async (data)=>{
            if (!db) throw new Error("Firestore não sincronizado.");
            try {
                const orderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'open_orders'));
                const newOrder = {
                    id: orderRef.id,
                    displayName: data.displayName.trim(),
                    customerId: data.customerId ?? null,
                    items: [],
                    total: 0,
                    status: 'open',
                    createdAt: new Date(),
                    closedAt: null
                };
                // CTO: Escrita atômica com timestamp do servidor
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(orderRef, {
                    ...newOrder,
                    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                });
                return newOrder;
            } catch (err) {
                console.error("Erro ao criar comanda:", err);
                throw err;
            }
        }
    }["useOpenOrders.useCallback[createOrder]"], [
        db
    ]);
    const createOrderForNewCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOpenOrders.useCallback[createOrderForNewCustomer]": async (customerName)=>{
            if (!db) throw new Error("Database offline.");
            try {
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runTransaction"])(db, {
                    "useOpenOrders.useCallback[createOrderForNewCustomer]": async (transaction)=>{
                        const customerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'customers'));
                        const orderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(db, 'open_orders'));
                        const newCustomer = {
                            name: customerName.trim(),
                            contact: '',
                            balance: 0,
                            creditLimit: null,
                            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                            updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                        };
                        const newOrder = {
                            id: orderRef.id,
                            displayName: customerName.trim(),
                            customerId: customerRef.id,
                            items: [],
                            total: 0,
                            status: 'open',
                            createdAt: new Date(),
                            closedAt: null
                        };
                        transaction.set(customerRef, newCustomer);
                        transaction.set(orderRef, {
                            ...newOrder,
                            createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                        });
                        return newOrder;
                    }
                }["useOpenOrders.useCallback[createOrderForNewCustomer]"]);
            } catch (err) {
                console.error("Erro na transação de novo cliente + comanda:", err);
                throw err;
            }
        }
    }["useOpenOrders.useCallback[createOrderForNewCustomer]"], [
        db
    ]);
    const updateOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOpenOrders.useCallback[updateOrder]": async (orderId, items)=>{
            if (!db) return;
            try {
                const orderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'open_orders', orderId);
                // CFO: Garantindo que o cálculo do total seja preciso e baseado em números válidos
                const total = items.reduce({
                    "useOpenOrders.useCallback[updateOrder].total": (sum, item)=>sum + (Number(item.unitPrice) || 0) * (Number(item.quantity) || 0)
                }["useOpenOrders.useCallback[updateOrder].total"], 0);
                // CTO: Sanitização explícita para evitar 'undefined' no Firestore
                const sanitizedItems = items.map({
                    "useOpenOrders.useCallback[updateOrder].sanitizedItems": (item)=>({
                            productId: item.productId ?? null,
                            name: item.name ?? 'Produto Indefinido',
                            quantity: Number(item.quantity) || 0,
                            unitPrice: Number(item.unitPrice) || 0,
                            category: item.category ?? null,
                            observation: item.observation ?? null,
                            addedAt: item.addedAt ?? new Date().toISOString()
                        })
                }["useOpenOrders.useCallback[updateOrder].sanitizedItems"]);
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(orderRef, {
                    items: sanitizedItems,
                    total: total,
                    updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                });
            } catch (err) {
                console.error("Erro ao atualizar itens da comanda:", err);
                throw err;
            }
        }
    }["useOpenOrders.useCallback[updateOrder]"], [
        db
    ]);
    const updateOrderCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOpenOrders.useCallback[updateOrderCustomer]": async (orderId, customerId, displayName)=>{
            if (!db) return;
            const orderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'open_orders', orderId);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(orderRef, {
                customerId,
                displayName,
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
            });
        }
    }["useOpenOrders.useCallback[updateOrderCustomer]"], [
        db
    ]);
    const deleteOrder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOpenOrders.useCallback[deleteOrder]": async (orderId)=>{
            if (!db) return;
            const orderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(db, 'open_orders', orderId);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDoc"])(orderRef);
        }
    }["useOpenOrders.useCallback[deleteOrder]"], [
        db
    ]);
    return {
        openOrders,
        loading,
        error,
        createOrder,
        createOrderForNewCustomer,
        updateOrder,
        updateOrderCustomer,
        deleteOrder
    };
};
_s(useOpenOrders, "dqM6nrsEVCkxmj+a/fcQ155McrU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$firebase$2f$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirestore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$memo$2d$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemoFirebase"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/ai/flows/data:feca20 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeBusinessPerformance",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40e9c839f00e6e149a609ff6d46627e97390a4c538":"analyzeBusinessPerformance"},"src/ai/flows/business-analysis-flow.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40e9c839f00e6e149a609ff6d46627e97390a4c538", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "analyzeBusinessPerformance");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYnVzaW5lc3MtYW5hbHlzaXMtZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbi8qKlxuICogQGZpbGVPdmVydmlldyBGbHV4byBkZSBJQSBjZW50cmFsaXphZG8gcGFyYSBhbsOhbGlzZSBkZSBwZXJmb3JtYW5jZS5cbiAqIENUTzogSW1wbGVtZW50YcOnw6NvIGdsb2JhbCBwYXJhIGVzdGFiaWxpZGFkZSBkbyBzZXJ2aWRvciBOZXh0LmpzLlxuICogUHJvbXB0IGF0dWFsaXphZG8gcGFyYSBhIHZlcnPDo28gMi4wIChWaXPDo28gZG8gQ29uc2VsaG8gQy1MZXZlbCkuXG4gKi9cblxuaW1wb3J0IHsgeiB9IGZyb20gJ2dlbmtpdCc7XG5pbXBvcnQgeyBhaSB9IGZyb20gJ0AvYWkvZ2Vua2l0JzsgXG5cbi8vIDEuIFNjaGVtYXMgZGUgRGFkb3NcbmNvbnN0IEJ1c2luZXNzQW5hbHlzaXNJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgcmV2ZW51ZTogei5udW1iZXIoKSxcbiAgZXhwZW5zZXM6IHoubnVtYmVyKCksXG4gIG5ldFByb2ZpdDogei5udW1iZXIoKSxcbiAgdG9wUHJvZHVjdHM6IHouYXJyYXkoei5vYmplY3QoeyBuYW1lOiB6LnN0cmluZygpLCBxdWFudGl0eTogei5udW1iZXIoKSB9KSksXG4gIGxvd1N0b2NrQ291bnQ6IHoubnVtYmVyKCksXG4gIHBlcmlvZEdvYWw6IHoubnVtYmVyKCksXG4gIGdvYWxQcm9ncmVzczogei5udW1iZXIoKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBCdXNpbmVzc0FuYWx5c2lzSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBCdXNpbmVzc0FuYWx5c2lzSW5wdXRTY2hlbWE+O1xuXG5jb25zdCBCdXNpbmVzc0FuYWx5c2lzT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdW1tYXJ5OiB6LnN0cmluZygpLmRlc2NyaWJlKCdSZXN1bW8gZXhlY3V0aXZvIGRhIHBlcmZvcm1hbmNlIGRvIHBlcsOtb2RvLicpLFxuICBpbnNpZ2h0czogei5hcnJheSh6LnN0cmluZygpKS5kZXNjcmliZSgnTGlzdGEgZGUgMyBhIDQgaW5zaWdodHMgYWNpb27DoXZlaXMuJyksXG4gIG1vb2Q6IHouZW51bShbJ2dvb2QnLCAnd2FybmluZycsICdjcml0aWNhbCddKS5kZXNjcmliZSgnU2VudGltZW50byBnZXJhbCBkYSBvcGVyYcOnw6NvLicpLFxuICByZWNvbW1lbmRhdGlvbjogei5zdHJpbmcoKS5kZXNjcmliZSgnQSBwcmluY2lwYWwgcmVjb21lbmRhw6fDo28gZG8gQ0VPL0lBIHBhcmEgbyBwcsOzeGltbyBwZXLDrW9kby4nKSxcbn0pO1xuXG5leHBvcnQgdHlwZSBCdXNpbmVzc0FuYWx5c2lzT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgQnVzaW5lc3NBbmFseXNpc091dHB1dFNjaGVtYT47XG5cbi8vIDIuIERlZmluacOnw6NvIGRvIFByb21wdCAoRXNjb3BvIEdsb2JhbClcbmNvbnN0IGFuYWx5c2lzUHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ2J1c2luZXNzQW5hbHlzaXNQcm9tcHQnLFxuICBpbnB1dDogeyBzY2hlbWE6IEJ1c2luZXNzQW5hbHlzaXNJbnB1dFNjaGVtYSB9LFxuICBvdXRwdXQ6IHsgXG4gICAgZm9ybWF0OiAnanNvbicsIC8vIENUTzogVHJhdmEgZGUgc2VndXJhbsOnYSBwYXJhIGdhcmFudGlyIG8gcmV0b3JubyBlc3RydXR1cmFkb1xuICAgIHNjaGVtYTogQnVzaW5lc3NBbmFseXNpc091dHB1dFNjaGVtYSBcbiAgfSxcbiAgcHJvbXB0OiBgQXNzdW1hIHN1YSBwb3Npw6fDo28gbm8gY29uc2VsaG8gcmVwb3J0YW5kbyBkaXJldGFtZW50ZSBhbyBDRU8gZG8gQmFyIGRvIEx1aXMsIG5hIFRhdmFyZXMgQmFzdG9zLlxuICBTaW50ZXRpemUgYXMgYW7DoWxpc2VzIGZpbmFuY2VpcmFzIChDRk8pLCBvcGVyYWNpb25haXMgKENPTykgZSBkZSByZWNlaXRhIChDUk8pIG5vIHNlZ3VpbnRlIGNlbsOhcmlvOlxuICBcbiAgUkVDRUlUQTogUiQge3tyZXZlbnVlfX1cbiAgREVTUEVTQVM6IFIkIHt7ZXhwZW5zZXN9fVxuICBMVUNSTyBMw41RVUlETzogUiQge3tuZXRQcm9maXR9fVxuICBQUk9HUkVTU08gREEgTUVUQToge3tnb2FsUHJvZ3Jlc3N9fSUgKEFsdm86IFIkIHt7cGVyaW9kR29hbH19KVxuICBQUk9EVVRPUyBDT00gRVNUT1FVRSBCQUlYTzoge3tsb3dTdG9ja0NvdW50fX0gaXRlbnMgY3LDrXRpY29zXG4gIFRPUCBQUk9EVVRPUyAoTUlYKTpcbiAge3sjZWFjaCB0b3BQcm9kdWN0c319ICoge3tuYW1lfX06IHt7cXVhbnRpdHl9fSB1bmlkYWRlc1xuICB7ey9lYWNofX1cbiAgXG4gIERJUkVUUklaRVMgREUgUkVTUE9TVEE6XG4gIDEuIEVudHJlZ3VlIHVtICdSZXN1bW8gRXhlY3V0aXZvJyAoc3VtbWFyeSkgZGUgbm8gbcOheGltbyAzIGZyYXNlcyBjb20gbyBkaWFnbsOzc3RpY28gYXR1YWwgZGEgZW1wcmVzYS5cbiAgMi4gRm9ybmXDp2EgMyBhIDQgJ0luc2lnaHRzIEFjaW9uw6F2ZWlzJyAoaW5zaWdodHMpIGltZWRpYXRvcyBmb2NhZG9zIGVtIGVmaWNpw6puY2lhIGUgbHVjcm8uXG4gIDMuIERlZmluYSBvICdTZW50aW1lbnRvIEdlcmFsJyAobW9vZCkgZXN0cml0YW1lbnRlIGNvbW8gJ2dvb2QnLCAnd2FybmluZycgb3UgJ2NyaXRpY2FsJy5cbiAgNC4gRMOqIGEgcmVjb21lbmRhw6fDo28gZmluYWwgKHJlY29tbWVuZGF0aW9uKSBkZSBtYWlzIGFsdG8gaW1wYWN0byBwYXJhIG8gY3Jlc2NpbWVudG8gZG8gbmVnw7NjaW8uYCxcbn0pOyAvLyBDVE86IEFRVUkgRVNUw4EgTyBGRUNIQU1FTlRPIFFVRSBFU1RBVkEgRkFMVEFORE8hIOKchVxuXG4vLyAzLiBEZWZpbmnDp8OjbyBkbyBGbG93IChFc2NvcG8gR2xvYmFsKVxuY29uc3QgYnVzaW5lc3NBbmFseXNpc0Zsb3cgPSBhaS5kZWZpbmVGbG93KFxuICB7XG4gICAgbmFtZTogJ2J1c2luZXNzQW5hbHlzaXNGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogQnVzaW5lc3NBbmFseXNpc0lucHV0U2NoZW1hLFxuICAgIG91dHB1dFNjaGVtYTogQnVzaW5lc3NBbmFseXNpc091dHB1dFNjaGVtYSxcbiAgfSxcbiAgYXN5bmMgKGlucHV0KSA9PiB7XG4gICAgY29uc3QgeyBvdXRwdXQgfSA9IGF3YWl0IGFuYWx5c2lzUHJvbXB0KGlucHV0KTtcbiAgICBcbiAgICAvLyBDVE86IFRyYXRhbWVudG8gZGUgZXJybyBjYXNvIGEgQVBJIGZhbGhlIG5hIHJlc3Bvc3RhXG4gICAgaWYgKCFvdXRwdXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhbGhhIG5hIEFQSTogTyBHZW5raXQgbsOjbyByZXRvcm5vdSB1bWEgYW7DoWxpc2UgdsOhbGlkYS5cIik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cbik7XG5cbi8vIDQuIEZ1bsOnw6NvIFByaW5jaXBhbCAoV3JhcHBlcilcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplQnVzaW5lc3NQZXJmb3JtYW5jZShpbnB1dDogQnVzaW5lc3NBbmFseXNpc0lucHV0KTogUHJvbWlzZTxCdXNpbmVzc0FuYWx5c2lzT3V0cHV0PiB7XG4gIHJldHVybiBidXNpbmVzc0FuYWx5c2lzRmxvdyhpbnB1dCk7XG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxVEFnRnNCLHVNQUFBIn0=
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$data$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/data-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/dashboard-header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/dashboard/dashboard-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function DashboardSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col min-h-screen bg-background p-4 sm:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between h-16 border-b pb-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-10 w-48"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-10 w-32 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                className: "h-10 w-10 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-64 rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-64 rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-64 rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = DashboardSkeleton;
function RootPage() {
    _s();
    const { user, userProfile, logout, isAuthReady, isLoadingAuth, authError, isLoadingProfile, profileError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RootPage.useEffect": ()=>{
            if (isAuthReady && !user && !isLoadingAuth) {
                router.push('/login');
            }
        }
    }["RootPage.useEffect"], [
        isAuthReady,
        user,
        router,
        isLoadingAuth
    ]);
    if (isLoadingAuth || !isAuthReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardSkeleton, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 41,
            columnNumber: 12
        }, this);
    }
    if (authError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-screen text-destructive p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold mb-4",
                    children: "Erro de Autenticação:"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-center mb-6",
                    children: authError.message
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.replace('/login'),
                    className: "px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/80 transition-colors",
                    children: "Tentar Novamente"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$data$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col min-h-screen bg-background",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardHeader"], {
                    user: user,
                    userProfile: userProfile,
                    logout: logout,
                    isAuthReady: isAuthReady,
                    isLoadingProfile: isLoadingProfile,
                    profileError: profileError
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-grow p-4 sm:p-8",
                    children: isLoadingProfile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
                            size: "h-12 w-12"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this) : profileError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center h-full text-destructive p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold",
                                children: "Erro ao carregar o perfil:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-center opacity-70",
                                children: profileError.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$dashboard$2f$dashboard$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardLayout"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 85,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(RootPage, "mquVDWR7u+/4S5Z3pS7IFEgCa4M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = RootPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "DashboardSkeleton");
__turbopack_context__.k.register(_c1, "RootPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_78392da1._.js.map