totalCost: z.number(),
    createdAt: z.any(),
});

export type Purchase = z.infer<typeof PurchaseSchema>;

export const RecurringExpenseSchema = z.object({
  id: z.string().optional(),
  description: z.string(),
  amount: z.number(),
  category: z.string(),
  dayOfMonth: z.number(),
  active: z.boolean().default(true),
  lastGenerated: z.any().optional().nullable(),
});

export type RecurringExpense = z.infer<typeof RecurringExpenseSchema>;
al(),
  saleType: z.enum(['unit', 'dose', 'portion', 'weight', 'game', 'service']).default('unit'),
  baseUnitSize: z.number().nullable().optional(), // ml para doses
  doseOptions: z.array(z.object({
    name: z.string(),
    size: z.number(), // ml
    price: z.number(),
    enabled: z.boolean().default(true)
  })).optional().default([]),
});

export type Product = z.infer<typeof ProductSchema>;
export type DoseOption = NonNullable<Product['doseOptions']>[number];

export const CustomerSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Nome é obrigatório"),
  contact: z.string().optional().nullable(),
  balance: z.number().default(0), // Positivo = Dívida, Negativo = Crédito
  creditLimit: z.number().nullable().optional(),
  createdAt: z.any().optional(),
  updatedAt: z.any().optional(),
});

export type Customer = z.infer<typeof CustomerSchema>;

export const OrderItemSchema = z.object({
  productId: z.string(),
  name: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  category: z.string().optional().nullable(),
  subcategory: z.string().optional().nullable(),
  doseName: z.string().optional().nullable(),
  size: z.number().optional().nullable(),
  identifier: z.string().optional().nullable(), // Para jogos (milhar, máquina)
  observation: z.string().optional().nullable(),
  addedAt: z.string().optional(),
});

export type OrderItem = z.infer<typeof OrderItemSchema>;

export const OrderSchema = z.object({
  id: z.string().optional(),
  displayName: z.string(),
  customerId: z.string().nullable().optional(),
  items: z.array(OrderItemSchema).default([]),
  total: z.number().default(0),
  status: z.enum(['open', 'closed']).default('open'),
  createdAt: z.any().optional(),
  closedAt: z.any().nullable().optional(),
});

export type Order = z.infer<typeof OrderSchema>;

export const TransactionSchema = z.object({
  id: z.string().optional(),
  type: z.enum(['sale', 'expense', 'payment']),
  total: z.number(),
  timestamp: z.any(),
  paymentMethod: z.string().optional(),
  description: z.string().optional(),
  customerId: z.string().nullable().optional(),
  tabName: z.string().optional(),
  expenseCategory: z.string().optional(),
  recurringExpenseId: z.string().optional(),
  creditApplied: z.number().optional().default(0),
  items: z.array(z.any()).optional(),
  status: z.enum(['paid', 'pending']).default('paid'),
});

export type Transaction = z.infer<typeof TransactionSchema>;

export const SupplierSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  contactPerson: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  email: z.string().email().optional().nullable(),
  address: z.string().optional().nullable(),
  createdAt: z.any().optional(),
  updatedAt: z.any().optional(),
});

export type Supplier = z.infer<typeof SupplierSchema>;

export const GameModalitySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  category: z.string().default('Entretenimento'),
  subcategory: z.string().optional().nullable(),
  unitPrice: z.number().optional().default(0),
  createdAt: z.any().optional(),
  updatedAt: z.any().optional(),
});

export type GameModality = z.infer<typeof GameModalitySchema>;

export const PurchaseItemSchema = z.object({
    productId: z.string(),
    name: z.string(),
    quantity: z.number(),
    unitCost: z.number(),
});

export type PurchaseItem = z.infer<typeof PurchaseItemSchema>;

export const PurchaseSchema = z.object({
    id: z.string().optional(),
    supplierId: z.string(),
    supplierName: z.string(),
    items: z.array(PurchaseItemSchema),
    