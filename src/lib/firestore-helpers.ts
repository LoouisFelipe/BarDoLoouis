/**
 * Sanitiza objetos para o Firestore.
 * Remove undefined e garante que valores nulos sejam tratados.
 */
export const sanitizeData = <T extends object>(data: T): T => {
  const sanitize = (obj: any): any => {
    if (Array.isArray(obj)) return obj.map(sanitize);
    if (obj !== null && typeof obj === 'object' && !(obj instanceof Date)) {
      return Object.fromEntries(
        Object.entries(obj)
          .filter(([_, v]) => v !== undefined)
          .map(([k, v]) => [k, sanitize(v)])
      );
    }
    return obj === undefined ? null : obj;
  };

  return sanitize(data);
};

export const toCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};